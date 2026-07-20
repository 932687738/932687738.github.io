const htmlGenerator = require("./htmlGenerator");
const trqlt_tagcloud = require('./tagcloud.js');

function normalizeModulePath(categoryPath) {
  return (categoryPath || '')
    .replace(/\\/g, '/')
    .replace(/\/index\.html$/i, '')
    .replace(/\/tag\/[^/]+$/i, '')
    .replace(/\/$/, '')
    .replace(/^\//, '');
}

function getModulePath(page) {
  return (page.path || page.name || '').replace(/\\/g, '/').replace(/\/$/, '');
}

module.exports = function (hexo) {
  hexo.extend.helper.register('htmlGenerator', htmlGenerator);
  hexo.extend.helper.register('trqlt_tagcloud', trqlt_tagcloud);
  hexo.extend.helper.register('module_tag_url', function (categoryPath, tag) {
    const base = normalizeModulePath(categoryPath);
    return this.url_for(`/${base}/tag/${tag.slug}/`);
  });
};