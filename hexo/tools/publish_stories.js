'use strict'

const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '../../../ai_for_learing/domainConceptStory/domainConcept')
const dst = path.resolve(__dirname, '../source/_posts/stories')
const order = [
  '认知科学与哲学',
  '语言与认知',
  '复杂系统与演化',
  '机器学习与泛化',
  '智能本质与具身认知',
  '强化学习与决策',
  'AI对齐安全与可解释性'
]

function walk (dir, acc) {
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

function stripFrontMatter (text) {
  const result = { title: '', date: '2026-08-05', body: text }
  if (!text.startsWith('---')) return result
  const parts = text.split('---')
  const fm = parts[1] || ''
  result.body = parts.slice(2).join('---')
  fm.split('\n').forEach(function (line) {
    const idx = line.indexOf(':')
    if (idx < 0) return
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '')
    if (key === 'title' && value) result.title = value
    if (key === 'archived_at' && value) result.date = value
  })
  return result
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

const files = walk(src, [])
files.sort(function (a, b) {
  const da = path.basename(path.dirname(a))
  const db = path.basename(path.dirname(b))
  const ia = order.indexOf(da)
  const ib = order.indexOf(db)
  const ra = ia < 0 ? 99 : ia
  const rb = ib < 0 ? 99 : ib
  if (ra !== rb) return ra - rb
  return path.basename(a).localeCompare(path.basename(b), 'zh')
})

files.forEach(function (file, index) {
  const raw = fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '').replace(/\r\n/g, '\n')
  const parsed = stripFrontMatter(raw)
  const title = parsed.title || path.basename(file, '.md')
  const tag = path.basename(path.dirname(file))
  let lines = parsed.body.replace(/^\n+|\n+$/g, '').split('\n')
  if (lines.length && lines[0].trim() === title) {
    lines.shift()
    while (lines.length && !lines[0].trim()) lines.shift()
  }
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
  const minute = String(index).padStart(2, '0')
  const content = [
    '---',
    'title: ' + yamlQuote(title),
    'date: ' + parsed.date + ' 08:' + minute + ':00',
    'categories: Stories',
    'tags:',
    '  - ' + yamlQuote(tag),
    'timeline: Stories',
    '---',
    '',
    out.join('\n').replace(/\n+$/g, '') + '\n'
  ].join('\n')
  const structured = content.replace(
    /---\n\n([\s\S]*)$/,
    function (_, body) {
      return '---\n\n' + structureStory(body)
    }
  )
  const target = path.join(dst, tag, title + '.md')
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.writeFileSync(target, structured, 'utf8')
  process.stdout.write(tag + ' / ' + title + '\n')
})

process.stdout.write('count ' + files.length + '\n')
