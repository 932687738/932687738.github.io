---
name: 烟火与诗
description: 一份按栏目归档的个人技术笔记，白页黑封，不是课程站。
colors:
  nong-mo: "#000000"
  dan-mo: "#555555"
  mo-deep: "#222222"
  excerpt: "#666666"
  foot-ash: "#aaaaaa"
  xuan-paper: "#fcfcfb"
  page: "#ffffff"
  hairline: "#dddddd"
  rule: "#eeeeee"
  seal: "#ee4242"
  tag: "#2c5fa5"
  tag-hover: "#2472e7"
  code-paper: "#f7f7f7"
typography:
  display:
    fontFamily: "sourceHanSerif, serif"
    fontSize: "72px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "sourceHanSerif, serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 2
    letterSpacing: "normal"
  label:
    fontFamily: "sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  chip: "2px"
  code: "5px"
  sheet: "10px"
spacing:
  xs: "8px"
  sm: "10px"
  md: "20px"
  lg: "40px"
  nav: "50px"
components:
  nav-link:
    textColor: "{colors.dan-mo}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
  nav-link-hover:
    textColor: "{colors.mo-deep}"
    typography: "{typography.label}"
  like-button:
    backgroundColor: "transparent"
    textColor: "{colors.seal}"
    rounded: "{rounded.sheet}"
    padding: "6px 30px"
    typography: "{typography.label}"
  post-title:
    textColor: "{colors.dan-mo}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
  post-card-sticky:
    backgroundColor: "{colors.xuan-paper}"
    textColor: "{colors.excerpt}"
    rounded: "{rounded.none}"
    padding: "20px"
  tag:
    textColor: "{colors.tag}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
  tag-hover:
    textColor: "{colors.tag-hover}"
  footer:
    backgroundColor: "{colors.nong-mo}"
    textColor: "{colors.foot-ash}"
    typography: "{typography.headline}"
    padding: "40px 0 10px"
---

# Design System: 烟火与诗

## Overview

**Creative North Star: "宣纸档案"**

这套界面把个人笔记站做成一份能翻的档案，而不是产品首页。页面停在宣纸色上，层次靠墨色深浅和字距分开。页脚是一整块浓墨，诗句落在上面，像档案合上之后的封底。

密度偏低。导航是一排加粗、字距拉开的文字，没有按钮底。文章在一条窄栏里自上而下排开，卡片默认贴在纸上。首页第一屏以副题「生活与工作并重」起笔，落款「古柯」居中在下。栏目说明、页脚诗句、赞赏旁的字用宋体。正文是无衬线，颜色是淡墨。

控件克制，像印刷品。悬停只换墨色，不把界面变成可按的仪表。首页第一屏只有题辞，铺在宣纸上。朱红只出现在赞赏上，像偶尔盖上的一枚印。

**Key Characteristics:**

- 平贴的宣纸底，浓墨页脚
- 宋体题辞，无衬线正文
- 字距拉开的文字导航
- 阴影只留给搁在纸上的纸片
- 首页第一屏只有墨和纸，朱红只做赞赏

## Colors

整页由墨和纸构成。有颜色的地方都是局部的：标签链接、赞赏印。

### Primary

- **浓墨** (`nong-mo`)：页脚整块底色，也是页面上唯一的大面积深色。它收束一页，不拿来做按钮底。
- **淡墨** (`dan-mo`)：正文、导航和文章标题的字色。阅读靠它，不靠彩色强调。
- **深墨** (`mo-deep`)：链接和导航悬停后的字色。

### Secondary

- **朱印** (`seal`)：赞赏按钮的字和边。全站只这一处用红。

### Tertiary

- **标签蓝** (`tag`)：文章标签和栏目标签云上的文字链接。悬停为 `tag-hover`。它不是品牌色，只标出可点的分类。

### Neutral

- **宣纸** (`xuan-paper`)：置顶文章卡片的底。普通页面底是 **页白** (`page`)。
- **摘录灰** (`excerpt`)：文章列表里的摘要。
- **封底灰** (`foot-ash`)：浓墨页脚上的字。
- **发丝** (`hairline`)：不用来画满格表格。**界格** (`rule`)：田字格式标签的细边，以及榜单行与行之间的分隔。
- **代码纸** (`code-paper`)：代码块底。

**The Ink Field Rule.** 大面积只允许纸色和浓墨。不要用蓝、青或红铺满一块区域。

**The Seal Rule.** `seal` 只用于赞赏按钮。

## Typography

**Display Font:** sourceHanSerif（思源宋体子集，站点自托管）
**Body Font:** sans-serif
**Label/Mono Font:** 代码用 Consolas、Menlo、monospace，中文回退 PingFang SC、Microsoft YaHei

**Character:** 题辞用宋体，像印在纸上的句子；正文用无衬线，方便长文。两者不混在同一段里互换着玩。

### Hierarchy

- **Display**（600，72px）：首页主标题。只在第一屏使用。
- **Headline**（700，36px，sourceHanSerif）：首页副题与页脚诗句。
- **Title**（700，24px，无衬线）：文章列表标题。栏目标题更大，为 2.5em 加粗。
- **Body**（400，18px，行高 2，无衬线）：正文栏。摘要单独收紧到 1.75。两端对齐。
- **Label**（700，16px，字距 0.1em）：导航项。标签字号同为 16px，但字重随正文，不强制加粗。

**The Serif Ration Rule.** sourceHanSerif 用于首页副题，以及栏目说明、页脚诗句、赞赏旁的句子。落款是居中的「古柯」墨迹。正文、导航、文章标题保持无衬线。

## Layout

阅读宽度是 900px，整页上限 1200px，都居中。导航高 90px，左右内边距 50px；窄于 1023px 时导航改为 60px 顶栏，菜单纵向展开。文章正文在带目录时收到约 760px，窄于 760px 时目录不再占侧栏。再窄于 415px 时只收紧字号和边距。

节奏来自少数几个间距：8px、10px、20px、40px、50px。列表里的文章卡片上下留白大（约 60px），不做成密表格。

**The Single Column Rule.** 文章和列表走一条居中窄栏。不要为了填满 1200px 把正文排成多栏。

## Elevation & Depth

默认平贴。白页和浓墨页脚靠色块相接，不靠投影分层。阴影只表示有一张纸搁在页面上。

### Shadow Vocabulary

- **代码纸片**（`box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15)`）：代码块。
- **简历纸**（`box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2)`）：屏幕上的简历页，像一张放在深色桌上的纸。

**The Flat-By-Default Rule.** 文章卡片、导航、页脚在静止时没有阴影。投影不能变成通用的卡片样式。

## Shapes

默认直角。小圆角只出现在三类东西上：置顶标记和封面的 2px，代码的 3px 到 5px，赞赏按钮的 10px。时间线的点、分页圆点、头像是正圆。

**The Square Paper Rule.** 新的文章容器保持直角。10px 圆角只沿用在已经像「纸片」的赞赏按钮上。

## Components

控件少，字多。悬停改颜色，不改形状。

### Buttons

- **Shape:** 全站几乎没有实心按钮。唯一的常驻按钮是赞赏，轻轻弯折的角（10px）。
- **Primary:** 赞赏按钮没有填充。字和 1px 边都是朱印色，左右内边距 30px、上下 6px，字距 0.1em，字重加粗。静止时饱和度压低，选中后恢复。
- **Hover / Focus:** 悬停时心形图标按心跳节奏动。焦点用 1px 深墨轮廓，不发光。
- **Secondary / Ghost / Tertiary:** 导航不是按钮，是文字链接。

### Chips

- **Style:** 文章下的标签是 16px 的标签蓝文字，没有底，也没有边。栏目页的标签云才是细界格边、正圆内边距。
- **State:** 文章标签悬停变为更亮的蓝。标签云悬停没有另做一套填充。

### Cards / Containers

- **Corner Style:** 文章卡片直角。
- **Background:** 默认透明，贴在页白上。置顶时底色改为宣纸。
- **Shadow Strategy:** 无。见 Elevation 的平贴规则。
- **Border:** 无。
- **Internal Padding:** 20px。标题 24px 加粗淡墨，摘要为摘录灰。

### Inputs / Fields

站点没有表单输入框。评论未开启。不要为了完整而发明一套输入框样式。

### Navigation

桌面是一行加粗文字，字距 0.1em，淡墨，悬停变深墨，项与项间隔 20px。没有当前页的色块或下划线体系。窄于 1023px 时，左侧两条深墨短线展开全屏白底菜单，项改为纵向、字距规则不变。

### 页脚诗句

页脚诗句是一行宋体，居中，字距拉开，颜色用封底灰。不再把每个字放进田字格。下面只放能打开的去处：GitHub 与邮箱，然后是站名。没有栏目小标题，也没有友链申请。

### 榜单

文章里的表是一页宣纸，不是网格。没有竖线，也没有外框。表头只有一条深墨底边；行与行之间用界格分开。表身铺宣纸色，悬停的一行回到页白。数字右对齐。仓库名用等宽字体，不要灰底代码块。

### 首页题辞

第一屏是一张铺满视口的宣纸，没有外框。副题在上，落款是一幅居中的「古柯」墨迹，旁边有一枚朱印。这枚印在画里，不拿来做按钮。层次靠字号和墨色，不靠投影。窄屏上墨迹随栏收窄，不溢出。

## Do's and Don'ts

### Do:

- **Do** 让正文停在淡墨、18px 无衬线上，题辞才用 sourceHanSerif。
- **Do** 用浓墨铺满页脚，页脚上的字用封底灰。
- **Do** 让文章列表保持单栏、直角、无阴影；只有置顶卡片铺宣纸底。
- **Do** 让首页第一屏以副题起笔，落款用「古柯」墨迹。不把站名当作这一屏的大字。
- **Do** 把朱红限制在赞赏按钮。

### Don't:

- **Don't** 把站点做成 SaaS 后台、仪表盘或带侧边栏的应用壳。
- **Don't** 把站点做成课程落地页或招生页。
- **Don't** 用高饱和色块做营销头图。站名不是课程承诺。
- **Don't** 给普通文章卡片加阴影或 10px 圆角。
- **Don't** 把标签蓝或首页信号色当成全站主色去铺导航和按钮。
