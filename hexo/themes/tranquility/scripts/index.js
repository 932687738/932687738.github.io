require("./generator/subpage")(hexo);
require("./generator/module-tag")(hexo);
require("./generator/font")(hexo);
require("./generator/cv")(hexo);
require("./timeline")(hexo);
require("./helper")(hexo);

// 禁用全站标签页与聚合博客页，文章仅通过模块子页展示
hexo.extend.generator.register('tag', () => []);
hexo.extend.generator.register('blog', () => []);