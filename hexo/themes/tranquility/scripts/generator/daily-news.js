'use strict';

const fs = require('fs');
const path = require('path');

const SOURCES = [
  { slug: 'ai-daily-news', title: 'AI 日报' },
  { slug: 'juejin-hot-news', title: '掘金热榜' },
  { slug: 'knowledge-base-news', title: '知识库' }
];

const DAY_HEADING = /^## (\d{4})-(\d{2})-(\d{2})\s*$/;
const MODULE_PATH = 'Daily-News/';
const TAG_FONT_MIN = 14;
const TAG_FONT_MAX = 30;

function overviewBrief(body) {
  const lines = String(body || '').split(/\r?\n/);
  let inOverview = false;
  const parts = [];
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (/^###\s+今日总览\s*$/.test(line)) {
      inOverview = true;
      continue;
    }
    if (!inOverview) continue;
    if (/^#{1,3}\s+/.test(line)) break;
    if (line.indexOf('|') === 0) break;
    if (!line) {
      if (parts.length) break;
      continue;
    }
    parts.push(line);
  }
  let text = parts.join(' ');
  text = text.replace(/\*\*/g, '').replace(/`/g, '');
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  text = text.replace(/^一句话结论[：:]\s*/, '');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

function tagFontSize(count, counts) {
  const sizes = [];
  counts.forEach(value => {
    if (sizes.indexOf(value) < 0) {
      sizes.push(value);
    }
  });
  sizes.sort((a, b) => a - b);
  const length = sizes.length - 1;
  const ratio = length ? sizes.indexOf(count) / length : 0;
  return TAG_FONT_MIN + ((TAG_FONT_MAX - TAG_FONT_MIN) * ratio);
}

function readSourceDays(root, source) {
  const dir = path.join(root, source.slug);
  if (!fs.existsSync(dir)) {
    return [];
  }
  const fileNames = fs.readdirSync(dir).filter(name => /^\d{6}\.md$/.test(name));
  const days = [];
  fileNames.forEach(name => {
    const fileMonth = name.replace(/\.md$/, '');
    const text = fs.readFileSync(path.join(dir, name), 'utf8');
    const lines = text.split(/\r?\n/);
    let current = null;
    lines.forEach(line => {
      const matched = line.match(DAY_HEADING);
      if (matched) {
        if (current) {
          days.push(current);
        }
        current = {
          source: source.slug,
          sourceTitle: source.title,
          year: matched[1],
          month: matched[2],
          day: matched[3],
          date: matched[1] + '-' + matched[2] + '-' + matched[3],
          yyyymm: matched[1] + matched[2],
          fileMonth: fileMonth,
          lines: []
        };
        return;
      }
      if (current) {
        current.lines.push(line);
      }
    });
    if (current) {
      days.push(current);
    }
  });
  return days.map(day => ({
    source: day.source,
    sourceTitle: day.sourceTitle,
    year: day.year,
    month: day.month,
    day: day.day,
    date: day.date,
    yyyymm: day.yyyymm,
    fileMonth: day.fileMonth,
    monthLabel: day.year + '-' + day.month,
    body: day.lines.join('\n').trim()
  }));
}

function dedupeDays(days) {
  const byDate = new Map();
  days.forEach(day => {
    const prev = byDate.get(day.date);
    if (!prev) {
      byDate.set(day.date, day);
      return;
    }
    const prevMatchesMonth = prev.fileMonth === prev.yyyymm;
    const nextMatchesMonth = day.fileMonth === day.yyyymm;
    if (nextMatchesMonth && !prevMatchesMonth) {
      byDate.set(day.date, day);
      return;
    }
    if (prevMatchesMonth && !nextMatchesMonth) {
      return;
    }
    if (day.fileMonth > prev.fileMonth) {
      byDate.set(day.date, day);
    }
  });
  return Array.from(byDate.values());
}

function monthUrl(sourceSlug, year, month) {
  return MODULE_PATH + sourceSlug + '/' + year + '/' + month + '/';
}

function dayUrl(day) {
  return MODULE_PATH + day.source + '/' + day.year + '/' + day.month + '/' + day.day + '/';
}

module.exports = hexo => {
  hexo.extend.generator.register('daily-news', function () {
    const root = path.join(this.base_dir, 'daily-news');
    const allDays = [];
    SOURCES.forEach(source => {
      dedupeDays(readSourceDays(root, source)).forEach(day => {
        allDays.push(day);
      });
    });

    const sourceCounts = SOURCES.map(source => allDays.filter(day => day.source === source.slug).length);
    const result = [{
      path: MODULE_PATH,
      layout: ['daily-news-index'],
      data: {
        title: '每日新闻',
        icon: '/images/icon/icon-book.svg',
        sources: SOURCES.map((source, index) => ({
          slug: source.slug,
          title: source.title,
          url: MODULE_PATH + source.slug + '/',
          count: sourceCounts[index],
          fontSize: tagFontSize(sourceCounts[index], sourceCounts)
        }))
      }
    }];

    SOURCES.forEach(source => {
      const days = allDays.filter(day => day.source === source.slug);
      const monthMap = new Map();
      days.forEach(day => {
        if (!monthMap.has(day.yyyymm)) {
          monthMap.set(day.yyyymm, {
            yyyymm: day.yyyymm,
            label: day.monthLabel,
            year: day.year,
            month: day.month,
            count: 0
          });
        }
        monthMap.get(day.yyyymm).count += 1;
      });
      const months = Array.from(monthMap.values()).sort((a, b) => {
        if (a.yyyymm < b.yyyymm) return 1;
        if (a.yyyymm > b.yyyymm) return -1;
        return 0;
      });

      result.push({
        path: MODULE_PATH + source.slug + '/',
        layout: ['daily-news-months'],
        data: {
          title: source.title,
          source: source.slug,
          icon: '/images/icon/icon-book.svg',
          months: months.map(month => ({
            label: month.label,
            count: month.count,
            url: monthUrl(source.slug, month.year, month.month)
          }))
        }
      });

      months.forEach(month => {
        const monthDays = days.filter(day => day.yyyymm === month.yyyymm).sort((a, b) => {
          if (a.date < b.date) return 1;
          if (a.date > b.date) return -1;
          return 0;
        });
        result.push({
          path: monthUrl(source.slug, month.year, month.month),
          layout: ['daily-news-days'],
          data: {
            title: source.title + ' ' + month.label,
            sourceTitle: source.title,
            source: source.slug,
            monthLabel: month.label,
            icon: '/images/icon/icon-book.svg',
            days: monthDays.map(day => ({
              date: day.date,
              url: dayUrl(day),
              brief: overviewBrief(day.body)
            }))
          }
        });

        monthDays.forEach(day => {
          const content = this.render.renderSync({ text: day.body, engine: 'markdown' });
          result.push({
            path: dayUrl(day),
            layout: ['daily-news-day'],
            data: {
              title: source.title + ' ' + day.date,
              dateLabel: day.date,
              sourceTitle: source.title,
              source: source.slug,
              monthLabel: month.label,
              monthUrl: monthUrl(source.slug, month.year, month.month),
              content
            }
          });
        });
      });
    });

    return result;
  });
};
