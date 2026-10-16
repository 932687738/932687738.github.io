---
title: 初始化自己的个人博客
date: 2023-09-15 13:07:32
categories: Jottings
tags:
  - init
  - bolo
timeline: Jottings
---

这里是我的第一篇文章，介绍如何用 GitHub 托管自己的 Hexo 博客。

<!-- more -->

下面三处资料分别补了本地建站、绑定 GitHub，以及在文章里放图片。第三处原文把两个地址粘在了一起，这里拆开。

- [本地创建 Hexo 博客](http://www.taodudu.cc/news/show-3087055.html?action=onClick)
- [绑定 GitHub、切换主题、使用自己的域名](https://zhuanlan.zhihu.com/p/60578464)
- [在文章里追加图片](https://www.cnblogs.com/codehome/p/8428738.html)
- [在文章里追加图片（另一篇）](https://www.jianshu.com/p/f72aaad7b852)

## 开始

### 准备

**基础环境**

1. 注册自己的 GitHub 账号
2. 电脑上安装：
    - node
    - git

### 第一步

1. **在 GitHub 创建一个属于自己的仓库**
    - 注意事项：仓库名必须和 GitHub 用户名相同，否则可能找不到 CSS。形式是 **userName.github.io**

<img src="/images/init/InitHexoStep1.png" alt="创建 GitHub 仓库">

***

<img src="/images/init/InitHexoStep2.png" alt="仓库名称与用户名一致">

2. **在仓库的 Settings 里打开 GitHub Pages，等部署完成就可以看到页面**

<img src="/images/init/InitHexoStep3.png" alt="打开 GitHub Pages">

### 第二步

1. **用 git 把项目拉到本地**
    - 在本地建一个目录，例如 Github_blob
    - 把远程仓库 clone 下来

``` bash
$ git clone https://github.com/932687738/932687738.github.io.git
```

2. **初始化博客项目**
    - 在仓库里新建一个目录。初始化 Hexo 时，这个文件夹必须是空的，例如 hexo
    - 安装 hexo-cli，再初始化项目

``` bash
$ npm install -g hexo-cli
$ hexo init <替换为当前博客文件夹，例如上面创建的 hexo 目录的全路径>
$ cd hexo
$ npm install
```

3. **初始化后的目录**

```text
hexo/
├── _config.yml     # 网站的配置信息
├── package.json    # 应用程序的信息
├── scaffolds       # 模版文件夹
├── source          # 存放用户资源，Markdown 文档
│   ├── _drafts
│   └── _posts
├── themes          # 主题文件夹
└── public          # 网站文件
```

4. **修改 `_config.yml`**

``` yml
title: 你博客的标题
subtitle: 显示在浏览器上搜索的时候显示的标题
description: 描述
author: 显示作者
email: 邮箱
language: zh-Hans
timezone: Asia/Shanghai
url: https://username.github.io
```

5. **本地启动**

如果页面打不开，多半是端口被占用了。Ctrl+C 关掉服务器，再用 `hexo server -p 5000` 换一个端口。

``` bash
hexo g
hexo s
```

### 第三步

1. **安装 hexo-deployer-git**

``` bash
$ npm install hexo-deployer-git --save
```

2. **修改 `_config.yml`**

``` yml
deploy:
  type: git
  repository: https://github.com/932687738/932687738.github.io.git
  branch: master
```

`branch` 要和 GitHub 仓库 Settings 里 Pages 使用的分支一致。

3. **上传到 GitHub。** 等几分钟，部署完成就能看到效果。

``` bash
$ hexo d
```

### 第四步

1. **追加图片**
    - 把 `_config.yml` 里的 `post_asset_folder` 设为 true
    - 生成文章后，把图片放到与文章同名的文件夹里

``` bash
$ npm install hexo-asset-image --save
$ hexo n 文件名
```

### 第五步

1. **找一个主题**
    - 打开 [Hexo 主题列表](https://hexo.io/themes/)，挑一个喜欢的

<img src="/images/init/InitHexoThemeTranquility.png" alt="Tranquility 主题">

2. **下载主题**
    - 用 Visit preview site 可以先看效果
    - 从 Tranquility 的 GitHub 仓库下载

3. **启用主题**
    - 放到博客项目的 `themes` 目录，可以改名，也可以沿用原名
    - 把 `_config.yml` 里的 `theme` 改成这个文件夹的名字
    - 有的主题到这里就结束了，有的还要按它自己的说明再配一次
