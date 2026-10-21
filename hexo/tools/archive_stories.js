'use strict'

const fs = require('fs')
const path = require('path')

const hexoRoot = path.resolve(__dirname, '..')
const sourceFile = path.join(hexoRoot, 'stories', 'originalStory.txt')
const postsRoot = path.join(hexoRoot, 'source', '_posts', 'stories')
const dryRun = process.argv.indexOf('--dry') >= 0

const BANNED = {
  '概念解释': true,
  '继续': true,
  '下一个': true,
  '继续下一个': true,
  '核心特征有三个': true,
  '故事中的隐喻对应': true,
  '隐喻对应': true
}

const RULES = [
  [['自组织临界性', '幂律', '雪崩', '临界态'], '复杂系统与演化'],
  [['二阶控制论', '反馈闭环'], '认知科学与哲学'],
  [['适应性偏好', '偏好内生', '酸葡萄'], '认知科学与哲学'],
  [['模型依赖实在论', '模型依赖的实在论', '归纳问题'], '认知科学与哲学'],
  [['语义外部主义', '孪生地球', '意义不在头脑'], '语言与认知'],
  [['涌现', '整体大于部分'], '复杂系统与演化'],
  [['路径依赖', '锁定', '正反馈'], '复杂系统与演化'],
  [['分布偏移', '虚假相关性', 'OOD', '域外泛化'], '机器学习与泛化'],
  [['灾难性遗忘', '持续学习', '稳定性-可塑性'], '机器学习与泛化'],
  [['莫拉维克悖论', '具身认知'], '智能本质与具身认知'],
  [['信用分配', '时序差分', 'TD学习', 'TD Learning'], '强化学习与决策'],
  [['奖励黑客', '规格游戏', '古德哈特'], 'AI对齐安全与可解释性'],
  [['可解释性', '事后解释', '黑箱'], 'AI对齐安全与可解释性'],
  [['基准测试饱和', '欺骗性对齐', '过拟合评估'], 'AI对齐安全与可解释性'],
  [['观察者'], '认知科学与哲学'],
  [['自组织'], '复杂系统与演化'],
  [['隐性知识'], '智能本质与具身认知'],
  [['范式'], '认知科学与哲学']
]

const NOISE = /^(继续\s*$|下一个\s*$|继续下一个\s*$|本回答由 AI|用户说|好的[，,]|好，|现在开始写|我需要|我决定|那么我需要|嗯，|起草|标题：|标题《|评估隐喻|结构安排|检查是否|设计寓言|整体结构|让我再|让我检查|让我们|主要跟|分析用户|上一轮|当前提示|为与|我们选|精炼|检查偏见|正式写作|开始写作|意图：)/

function walk (dir, acc) {
  if (!fs.existsSync(dir)) return acc
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (ent) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(full, acc)
    else if (ent.name.endsWith('.md')) acc.push(full)
  })
  return acc
}

function yamlQuote (value) {
  return '"' + String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'
}

function normalize (text) {
  return String(text || '')
    .replace(/^\uFEFF/, '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function stripFrontMatter (text) {
  const raw = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n')
  if (raw.indexOf('---') !== 0) return { title: '', body: raw }
  const parts = raw.split('---')
  const fm = parts[1] || ''
  let title = ''
  fm.split('\n').forEach(function (line) {
    const idx = line.indexOf(':')
    if (idx < 0) return
    if (line.slice(0, idx).trim() !== 'title') return
    title = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '')
  })
  return { title: title, body: parts.slice(2).join('---') }
}

function titleAt (lines, index) {
  let text = lines[index].trim()
  const heading = text.match(/^#{1,3}\s+(.+)$/)
  if (heading) text = heading[1].trim()
  const bold = text.match(/^\*\*(.+)\*\*$/)
  if (bold) text = bold[1].trim()
  if (text.length < 2 || text.length > 20) return ''
  if (!/^[\u4e00-\u9fffA-Za-z0-9·]+$/.test(text)) return ''
  if (BANNED[text]) return ''
  let next = ''
  for (let i = index + 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue
    next = lines[i].trim()
    break
  }
  if (next.length < 20) return ''
  if (!/[。，、！？；：—]/.test(next)) return ''
  if (/^(用户|好的|好，|我需要|我决定|那么|嗯|起草|标题|现在|让我|评估|结构|检查|设计|整体|本回答)/.test(next)) return ''
  return text
}

function cutPlanning (chunk) {
  const out = []
  for (let i = 0; i < chunk.length; i++) {
    if (NOISE.test(chunk[i].trim())) break
    out.push(chunk[i])
  }
  while (out.length && !out[out.length - 1].trim()) out.pop()
  return out
}

function parseStories (text) {
  const lines = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').split('\n')
  const marks = []
  for (let i = 0; i < lines.length; i++) {
    const title = titleAt(lines, i)
    if (title) marks.push({ index: i, title: title })
  }
  return marks.map(function (mark, n) {
    const end = n + 1 < marks.length ? marks[n + 1].index : lines.length
    const chunk = cutPlanning(lines.slice(mark.index + 1, end))
    return {
      title: mark.title,
      body: chunk.join('\n').replace(/^\n+|\n+$/g, '')
    }
  })
}

function matchRule (text) {
  if (!text) return ''
  for (let i = 0; i < RULES.length; i++) {
    const keys = RULES[i][0]
    for (let k = 0; k < keys.length; k++) {
      if (text.indexOf(keys[k]) >= 0) return RULES[i][1]
    }
  }
  return ''
}

function classify (body) {
  const idx = body.indexOf('概念解释')
  let concept = ''
  if (idx >= 0) {
    concept = body.slice(idx).split('\n').slice(1).join('\n').slice(0, 400)
  }
  return matchRule(concept) || matchRule(body) || '未分类_待标注'
}

function structureStory (body) {
  const lines = body.replace(/\n+$/g, '').split('\n')
  const out = []
  let mode = 'tale'
  let listOpen = false
  lines.forEach(function (line) {
    const trimmed = line.trim()
    if (trimmed === '<!-- more -->') {
      if (listOpen) {
        out.push('')
        listOpen = false
      }
      out.push(trimmed)
      return
    }
    if (trimmed === '——故事完——') {
      if (listOpen) {
        out.push('')
        listOpen = false
      }
      out.push('<p class="story-close">——故事完——</p>')
      out.push('')
      return
    }
    if (trimmed === '概念解释') {
      if (listOpen) {
        out.push('')
        listOpen = false
      }
      mode = 'concept'
      out.push('## 概念解释')
      out.push('')
      return
    }
    if (trimmed === '故事中的隐喻对应：' || trimmed === '故事中的隐喻对应') {
      if (listOpen) {
        out.push('')
        listOpen = false
      }
      mode = 'metaphor'
      out.push('## 隐喻对应')
      out.push('')
      return
    }
    if (!trimmed) {
      if (mode === 'metaphor' && listOpen) return
      out.push(line)
      return
    }
    if (mode === 'concept' && /^\d+\.\s+\S/.test(trimmed) && trimmed.length <= 42) {
      out.push('### ' + trimmed.replace(/^\d+\.\s+/, ''))
      out.push('')
      return
    }
    if (mode === 'concept' && /^[^：。]{2,22}：$/.test(trimmed)) {
      out.push('### ' + trimmed.replace(/：$/, ''))
      out.push('')
      return
    }
    if (mode === 'metaphor') {
      const matched = trimmed.match(/^([^：。]{2,26})：(.+)$/)
      if (matched) {
        out.push('- **' + matched[1] + '** ' + matched[2].trim())
        listOpen = true
        return
      }
    }
    if (listOpen) {
      out.push('')
      listOpen = false
    }
    out.push(line)
  })
  return out.join('\n').replace(/\n{3,}/g, '\n\n').replace(/\n+$/g, '') + '\n'
}

function withMore (body) {
  const lines = body.replace(/^\n+|\n+$/g, '').split('\n')
  const out = []
  let seen = false
  let inserted = false
  lines.forEach(function (line) {
    if (!inserted && seen && !line.trim()) {
      out.push('')
      out.push('<!-- more -->')
      inserted = true
      return
    }
    if (line.trim()) seen = true
    out.push(line)
  })
  if (!inserted) {
    out.push('')
    out.push('<!-- more -->')
  }
  return out.join('\n').replace(/\n+$/g, '') + '\n'
}

function renderBody (story) {
  let body = structureStory(withMore(story.body))
  if (story.domain === '未分类_待标注') {
    body = body.replace(/\n+$/g, '') + '\n\n<!-- 请手动标注领域 -->\n'
  }
  return body
}

function loadExisting () {
  const byTitle = {}
  walk(postsRoot, []).forEach(function (file) {
    const parsed = stripFrontMatter(fs.readFileSync(file, 'utf8'))
    const name = path.basename(file, '.md').replace(/_v\d+$/, '')
    const title = parsed.title || name
    if (!byTitle[title]) byTitle[title] = []
    byTitle[title].push({ file: file, body: parsed.body })
  })
  return byTitle
}

function sameBody (left, right) {
  return normalize(left) === normalize(right)
}

function firstDiff (left, right) {
  const a = normalize(left).split('\n')
  const b = normalize(right).split('\n')
  const n = Math.max(a.length, b.length)
  for (let i = 0; i < n; i++) {
    if (a[i] === b[i]) continue
    return 'L' + (i + 1) + ' source=' + (a[i] || '') + ' | post=' + (b[i] || '')
  }
  return ''
}

function dateStamp (index) {
  const now = new Date()
  const pad = function (n) { return String(n).padStart(2, '0') }
  const day = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate())
  const hour = pad(8 + Math.floor(index / 60))
  const minute = pad(index % 60)
  return day + ' ' + hour + ':' + minute + ':00'
}

function safeName (title) {
  return title.replace(/[\\/:*?"<>|]/g, '')
}

function nextVersion (domain, title) {
  let n = 2
  const dir = path.join(postsRoot, domain)
  while (fs.existsSync(path.join(dir, safeName(title) + '_v' + n + '.md'))) n += 1
  return n
}

function writePost (story, filename, date) {
  const content = [
    '---',
    'title: ' + yamlQuote(story.title),
    'date: ' + date,
    'categories: Stories',
    'tags:',
    '  - ' + yamlQuote(story.domain),
    'timeline: Stories',
    '---',
    '',
    story.rendered
  ].join('\n')
  const target = path.join(postsRoot, story.domain, filename)
  if (!dryRun) {
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, content, 'utf8')
  }
  return target
}

function main () {
  if (!fs.existsSync(sourceFile)) {
    process.stderr.write('missing ' + sourceFile + '\n')
    process.exit(1)
  }
  const stories = parseStories(fs.readFileSync(sourceFile, 'utf8'))
  const existing = loadExisting()
  const stats = { created: 0, skipped: 0, versioned: 0 }
  const byDomain = {}
  let createdIndex = 0

  stories.forEach(function (story) {
    story.domain = classify(story.body)
    story.rendered = renderBody(story)
    if (!byDomain[story.domain]) byDomain[story.domain] = { created: 0, skipped: 0, versioned: 0 }
    const found = existing[story.title] || []
    let matched = null
    for (let i = 0; i < found.length; i++) {
      if (sameBody(story.rendered, found[i].body)) {
        matched = found[i]
        break
      }
    }
    if (matched) {
      stats.skipped += 1
      byDomain[story.domain].skipped += 1
      process.stdout.write('skip ' + story.domain + ' / ' + story.title + '\n')
      return
    }
    if (found.length) {
      const version = nextVersion(story.domain, story.title)
      const filename = safeName(story.title) + '_v' + version + '.md'
      const diff = firstDiff(story.rendered, found[0].body)
      writePost(story, filename, dateStamp(createdIndex))
      createdIndex += 1
      stats.versioned += 1
      byDomain[story.domain].versioned += 1
      process.stdout.write('version ' + story.domain + ' / ' + filename + ' ' + diff + '\n')
      return
    }
    writePost(story, safeName(story.title) + '.md', dateStamp(createdIndex))
    createdIndex += 1
    stats.created += 1
    byDomain[story.domain].created += 1
    process.stdout.write('add ' + story.domain + ' / ' + story.title + '\n')
  })

  const domains = Object.keys(byDomain)
  process.stdout.write('---\n')
  domains.forEach(function (domain) {
    const row = byDomain[domain]
    process.stdout.write(domain + ' 新增 ' + row.created + ' 跳过 ' + row.skipped + ' 版本 ' + row.versioned + '\n')
  })
  process.stdout.write('parsed ' + stories.length + '\n')
  process.stdout.write('created ' + stats.created + '\n')
  process.stdout.write('skipped ' + stats.skipped + '\n')
  process.stdout.write('versioned ' + stats.versioned + '\n')
  if (dryRun) process.stdout.write('dry-run\n')
}

main()
