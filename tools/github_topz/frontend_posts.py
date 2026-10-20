from __future__ import annotations

"""把 GitHub 榜单写成前端 Hexo 文章。不写后端 dailyReport。"""
import html
import re
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List

from .display_zh import intro_display_zh_cn, repo_key_from_full
from .stars_merge import Entry
from .trending_fetch import TrendingRepo


STAR_ROW_RE = re.compile(
    r"^\|\s*\d+\s*\|\s*\[`([^`]+)`\]\((https?://[^)]+)\)\s*\|\s*(\d+)\s*\|\s*(.*?)\s*\|\s*$"
)
EMPTY_INTRO = "页面上没有仓库简介。"
EMPTY_INTRO_MARKS = ("", "—", "-", EMPTY_INTRO)

POST_SLUGS = {
    "stars": "stars-snapshot",
    "daily": "trending-daily",
    "weekly": "trending-weekly",
    "monthly": "trending-monthly",
}


def default_frontend_posts_dir() -> Path:
    repo_root = Path(__file__).resolve().parents[2]
    return (repo_root / "hexo" / "source" / "_posts" / "github").resolve()


def legacy_github_topz_path() -> Path:
    repo_root = Path(__file__).resolve().parents[2]
    return repo_root.parent / "ai_for_learing" / "dailyReport" / "github-topz.md"


def parse_frontend_stars(md_text: str) -> Dict[str, Entry]:
    """前端星标榜 -> owner/repo 小写键 -> (stars, url, label, description)。"""
    out_dict: Dict[str, Entry] = {}
    for line in md_text.splitlines():
        matched = STAR_ROW_RE.match(line.strip())
        if not matched:
            continue
        label_use = matched.group(1).strip()
        url_val = matched.group(2).strip()
        stars_val = int(matched.group(3))
        desc_segment = matched.group(4).strip()
        key_use = repo_key_from_full(label_use)
        if not key_use:
            continue
        desc_keep = ""
        if desc_segment not in EMPTY_INTRO_MARKS:
            desc_keep = desc_segment
        out_dict[key_use] = (stars_val, url_val, label_use, desc_keep)
    return out_dict


def post_permalink(day: datetime, slug: str) -> str:
    return "/{}/{}/{}/github/{}/".format(
        day.strftime("%Y"),
        day.strftime("%m"),
        day.strftime("%d"),
        slug,
    )


def clock_on_same_day(now: datetime, minutes_earlier: int) -> datetime:
    shifted = now - timedelta(minutes=minutes_earlier)
    if shifted.date() != now.date():
        return now.replace(hour=0, minute=0, second=0, microsecond=0)
    return shifted.replace(microsecond=0)


def blog_intro(ssl_ctx, repo_key: str, raw_desc: str) -> str:
    cell = intro_display_zh_cn(ssl_ctx, repo_key, raw_desc)
    cell = html.unescape("{}".format(cell)).replace("|", "·").strip()
    if cell in EMPTY_INTRO_MARKS:
        return EMPTY_INTRO
    return cell


def render_stars_post(ssl_ctx, merged: Dict[str, Entry], now: datetime) -> str:
    day_text = now.strftime("%Y-%m-%d")
    stamp = now.strftime("%Y-%m-%d %H:%M:%S")
    written_at = clock_on_same_day(now, 6).strftime("%Y-%m-%d %H:%M:%S")
    daily_url = post_permalink(now, POST_SLUGS["daily"])
    weekly_url = post_permalink(now, POST_SLUGS["weekly"])
    monthly_url = post_permalink(now, POST_SLUGS["monthly"])
    ranked = sorted(merged.items(), key=lambda kv_pair: (-kv_pair[1][0], kv_pair[0]))
    lines = [
        "---",
        "title: GitHub 全局 Star 榜快照",
        "date: {}".format(written_at),
        "categories: GitHub",
        "tags:",
        "  - 快照",
        "  - 星标榜",
        "timeline: GitHub",
        "---",
        "",
        "{} 的全局累计 Star 快照。数据来自 GitHub Search API，按 Star 数排序，并与历史榜单合并：已有仓库更新 Star 数，新仓库按 Star 降序插入。这是累计声量，不是近日热度。".format(day_text),
        "",
        "<!-- more -->",
        "",
        "最近一次更新时间（Asia/Shanghai）：{}。".format(stamp),
        "",
        "| 序号 | 仓库 | Stars | 简介 |",
        "| ---: | --- | ---: | --- |",
    ]
    for idx_row, (key_ent, tup_inner) in enumerate(ranked, start=1):
        stars_ct, html_url_pick, label_pick, brief_raw = tup_inner
        if "/" in key_ent:
            fallback_url = "https://github.com/{}/{}".format(key_ent.split("/")[0], key_ent.split("/")[1])
        else:
            fallback_url = ""
        safe_url = html_url_pick if html_url_pick else fallback_url
        intro_cell = blog_intro(ssl_ctx, key_ent, brief_raw)
        lines.append(
            "| {} | [`{}`]({}) | {} | {} |".format(idx_row, label_pick, safe_url, stars_ct, intro_cell)
        )
    lines.append("")
    lines.append(
        "同一天的热度榜另见 [今日]({})、[本周]({}) 与 [本月]({})。热度榜看的是周期内新增 Star，和本表的累计排序不是同一口径。".format(
            daily_url, weekly_url, monthly_url
        )
    )
    lines.append("")
    return "\n".join(lines)


def period_figure(trending_txt: str) -> str:
    text = "{}".format(trending_txt).strip()
    matched = re.match(r"^([\d,]+)\s+stars\b", text, flags=re.IGNORECASE)
    if matched:
        return matched.group(1)
    if not text or text == "—":
        return "—"
    return text


def trending_repo_cell(repo: TrendingRepo) -> str:
    label = "{}/{}".format(repo.owner_nm, repo.repo_nm)
    link = "[`{}`]({})".format(label, repo.canonical_url)
    lang = "{}".format(repo.language_txt).strip()
    if lang and lang != "—":
        meta = "{}<br>{} stars · {} forks".format(lang, repo.stars_tot, repo.forks_tot)
    else:
        meta = "{} stars<br>{} forks".format(repo.stars_tot, repo.forks_tot)
    return "{}<small>{}</small>".format(link, meta)


def render_trending_post(
    ssl_ctx,
    since_value: str,
    repos: List[TrendingRepo],
    now: datetime,
) -> str:
    day_text = now.strftime("%Y-%m-%d")
    specs = {
        "daily": {
            "title": "GitHub 今日热榜",
            "tag": "今日热榜",
            "column": "今日",
            "lead": "{} 抓取的 GitHub Trending 今日榜。仓库下的 Star 与 Fork 是累计值，「今日」一列才是当天新增。".format(day_text),
            "minutes": 4,
        },
        "weekly": {
            "title": "GitHub 本周热榜",
            "tag": "本周热榜",
            "column": "本周",
            "lead": "{} 抓取的 GitHub Trending 本周榜。仓库下的 Star 与 Fork 是累计值，「本周」一列才是这周新增。".format(day_text),
            "minutes": 2,
        },
        "monthly": {
            "title": "GitHub 本月热榜",
            "tag": "本月热榜",
            "column": "本月",
            "lead": "{} 抓取的 GitHub Trending 本月榜。仓库下的 Star 与 Fork 是累计值，「本月」一列才是本月新增。".format(day_text),
            "minutes": 0,
        },
    }
    spec = specs[since_value]
    written_at = clock_on_same_day(now, spec["minutes"]).strftime("%Y-%m-%d %H:%M:%S")
    page_url = "https://github.com/trending?since={}".format(since_value)
    sibling = {
        "stars": "全局 Star 榜",
        "daily": "今日热榜",
        "weekly": "本周热榜",
        "monthly": "本月热榜",
    }
    link_bits = []
    for key_name in ("stars", "daily", "weekly", "monthly"):
        if key_name == since_value:
            continue
        link_bits.append("[{}]({})".format(sibling[key_name], post_permalink(now, POST_SLUGS[key_name])))
    footer = "同日还有 {}、{} 和 {}。".format(link_bits[0], link_bits[1], link_bits[2])
    lines = [
        "---",
        "title: {}".format(spec["title"]),
        "date: {}".format(written_at),
        "categories: GitHub",
        "tags:",
        "  - 快照",
        "  - {}".format(spec["tag"]),
        "timeline: GitHub",
        "---",
        "",
        spec["lead"],
        "",
        "<!-- more -->",
        "",
        "页面：<{}>".format(page_url),
        "",
        "| # | 仓库 | {} | 简介 |".format(spec["column"]),
        "| ---: | --- | ---: | --- |",
    ]
    for ix_row, repo in enumerate(repos[:25], start=1):
        intro_cell = blog_intro(ssl_ctx, repo.repo_key_lc, repo.description_txt)
        lines.append(
            "| {} | {}| {} | {} |".format(
                ix_row,
                trending_repo_cell(repo),
                period_figure(repo.trending_txt),
                intro_cell,
            )
        )
    lines.append("")
    lines.append(footer)
    lines.append("")
    return "\n".join(lines)


def write_text_atomic(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp_path = path.with_suffix(path.suffix + ".tmp")
    with tmp_path.open("w", encoding="utf-8", newline="\n") as handle:
        handle.write(text)
    tmp_path.replace(path)
