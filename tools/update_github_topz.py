#!/usr/bin/env python3
"""抓取 GitHub 全局 Star 与 Trending，写入本仓库 Hexo 文章。不写学习仓库的 github-topz.md。"""
from __future__ import annotations

import argparse
import os
import ssl
import sys
from datetime import datetime
from pathlib import Path
from urllib.error import HTTPError, URLError


def _inject_tools_pkg_path():
    bundle_dir_piece = Path(__file__).resolve().parent
    if str(bundle_dir_piece) not in sys.path:
        sys.path.insert(0, str(bundle_dir_piece))


_inject_tools_pkg_path()

from github_topz import stars_merge, trending_fetch
from github_topz.frontend_posts import (
    POST_SLUGS,
    default_frontend_posts_dir,
    legacy_github_topz_path,
    parse_frontend_stars,
    render_stars_post,
    render_trending_post,
    write_text_atomic,
)
from github_topz.stars_merge import _shanghai_tz


TRENDING_SINCE = ("daily", "weekly", "monthly")


def resolve_frontend_dir(raw_path: Path) -> Path:
    if raw_path.is_absolute():
        return raw_path.resolve()
    repo_root = Path(__file__).resolve().parents[1]
    return (repo_root / raw_path).resolve()


def load_star_history(frontend_dir: Path):
    stars_file = frontend_dir / "{}.md".format(POST_SLUGS["stars"])
    if stars_file.is_file():
        hist_map = parse_frontend_stars(stars_file.read_text(encoding="utf-8"))
        if hist_map:
            return hist_map
    legacy_file = legacy_github_topz_path()
    if legacy_file.is_file():
        print("前端星标榜没有可合并的历史行，已只读 {} 作为底稿，不会回写该文件。".format(legacy_file))
        return stars_merge.parse_stars_merge_state(legacy_file.read_text(encoding="utf-8"))
    return {}


def main() -> None:
    parser_obj = argparse.ArgumentParser(
        description="Write GitHub star and trending snapshots into the Hexo posts"
    )
    parser_obj.add_argument(
        "--frontend-dir",
        type=Path,
        default=None,
        help="Hexo github posts directory (default: hexo/source/_posts/github)",
    )
    cli_args = parser_obj.parse_args()
    if cli_args.frontend_dir is None:
        frontend_dir = default_frontend_posts_dir()
    else:
        frontend_dir = resolve_frontend_dir(cli_args.frontend_dir)
    if not frontend_dir.is_dir():
        print("前端文章目录不存在： {}".format(frontend_dir))
        raise SystemExit(1)

    ssl_ctx = ssl.create_default_context()
    token_piece = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    hist_map = load_star_history(frontend_dir)
    now = datetime.now(tz=_shanghai_tz())

    try:
        merged = stars_merge.merge_stars_history(ssl_ctx, token_piece, hist_map)
    except HTTPError as er_http:
        print("GitHub API 错误 HTTP {}： {}".format(er_http.code, er_http.reason))
        raise SystemExit(1) from er_http
    except URLError as er_url:
        print("请求失败： {}".format(er_url.reason))
        raise SystemExit(1) from er_url

    stars_path = frontend_dir / "{}.md".format(POST_SLUGS["stars"])
    write_text_atomic(stars_path, render_stars_post(ssl_ctx, merged, now))
    print("已写入 {}".format(stars_path))

    failures = []
    for since_value in TRENDING_SINCE:
        post_path = frontend_dir / "{}.md".format(POST_SLUGS[since_value])
        try:
            repos = trending_fetch.fetch_trending_repos(ssl_ctx, since_value)
        except Exception as exc_err:
            failures.append("{} 未更新： {}".format(post_path.name, exc_err))
            continue
        if not repos:
            failures.append("{} 未更新： 没有解析到 Trending 仓库".format(post_path.name))
            continue
        write_text_atomic(post_path, render_trending_post(ssl_ctx, since_value, repos, now))
        print("已写入 {}".format(post_path))

    if failures:
        for line in failures:
            print(line)
        raise SystemExit(1)


if __name__ == "__main__":
    main()
