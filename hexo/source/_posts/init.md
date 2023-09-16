---
title: 初始化自己的个人博客
date: 2023-09-15 13:07:32
categories: other
tags:
- init bolo
---
这里是我的第一篇文章，介绍如何使用github托管自己的个人博客网站;这里参考了两个不同的链接
[First](http://www.taodudu.cc/news/show-3087055.html?action=onClick)是本地创建自己的HEXO个人博客
[Second](https://zhuanlan.zhihu.com/p/60578464)是对第一个的补充操作，例如绑定GitHub,切换主题,使用自己的域名
[Third](https://www.cnblogs.com/codehome/p/8428738.htmlhttps://www.jianshu.com/p/f72aaad7b852)是对第二个的补充操作，使用HEXO追加图片

<!-- more -->

## Quick Start

### Precondition
**基础环境准备**
1. 需要注册自己的GitHub账号
2. 电脑安装必须的组件
    - node
    - git

### First Step
1. **在github创建一个属于自己的仓库**
    - 注意事项：
        - 创建时repository的名字要与github的名字相同，否则可能出现找不到css文件的情况：**userName.github.io**
<img src="InitHexoStep1.png">

***

<img src="InitHexoStep2.png">

2. **通过setting中page将repository设置为github管理，然后等待部署完成就可以看到对应的页面啦**
<img src="InitHexoStep3.png">

### Second Step
1. **使用git将项目拉取到本地**
    - 在本地创建一个目录：Github_blob
    - 通过git命令将远程项目clone到本地
``` bash
$ git clone https://github.com/932687738/932687738.github.io.git
```
2. **初始化博客项目**
    - 在git项目中新增一个目录(初始化HEXO时文件夹必须为空)：hexo
    - 通过npm命令安装 hexo.cli并初始化Hexo项目
``` bash
$ npm install -g hexo-cli
$ hexo init <替换为当前博客文件夹，例如上面创建的hexo目录的全路径>
$ cd hexo # cd到刚刚我们初始化的目录下
$ npm install # 安装组件
```
3. **初始化后的目录层级结构**
<img src="InitHexoCatalogue.png">

4. **修改配置文件：_config.yml**
``` yml
title: 你博客的标题
subtitle: 显示在浏览器上搜索的时候显示的标题
description: 描述
author: 显示作者
email: 邮箱
language: zh-Hans    #语言
timezone: Asia/Shanghai   #时区# URL
url: https://username.github.io      #这个就是填写你的博客地址
```
5. **本地启动**
**Tips**：如果出现页面加载不出来，可能是端口被占用了。Ctrl+C 关闭服务器，运行 hexo server -p 5000 更改端口号后重试。
``` bash
hexo g   # 生成页面
hexo s   # 启动预览
```
### Third Step
1. **安装hexo-deployer-git**
``` bash
$ npm install hexo-deployer-git --save # 自动化部署
```
2. **修改 _config.yml 配置文件**
``` yml
deploy:
  type: git
  repository: https://github.com/932687738/932687738.github.io.git #自己的github仓库地址
  branch: master # 要上传的分支名称,要与github->setting->page 中配置的部署分支一样
```
3. **上传到GitHub**(等待几分钟后部署完成就可以看到自己的效果了)
``` bash
$ hexo d
```
### Forth Step
1. **追加图片**
    - 把主页配置文件 **_config.yml** 里的 **post_asset_folder** 这个选项设置为true
    - 手动生成文件，将图片放到文件同名文件夹下
``` bash
$ npm install hexo-asset-image --save # 安装图片的插件
$ hexo n 文件名 # 生成文件前，通过该命令创建文件
```

### Fifth Step
1. **查询主题**
    - 访问[HEXO THEME](https://hexo.io/themes/)找到一个自己喜欢的主题
    <img src="InitHexoThemeTranquility.png">
2. **下载主题**
    - 通过 **Visit preview site** 可以预览主题效果
    - 通过 **Tranquility** 进入github下载
3. **设置主题**
    - 将主题下载到自己博客项目的 **themes** 目录下并起一个别名(也可以用原名)
    - 修改 **_config.yml** 下的配置 **theme** 为上面哪个文件夹的名字
    - 有的主题到上面这一步就结束了，有的主题需要按照github的教程进行操作


    