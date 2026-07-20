const { url_for } = require('hexo-util');

module.exports = function (tags, config, categoryPath) {
  if (!config.fancy) {
    config.min_font = 1;
    config.max_font = 1;
    config.unit = 'em';
  }

  let tagcloudHTML = '';

  if (tags && tags.length) {
    tagcloudHTML = renderTagcloud.call(this, tags, config, categoryPath);
  }

  if (config.fancy) {
    return `<canvas width="500" height="500" id="tagCanvas">${tagcloudHTML}<canvas>`;
  }

  return tagcloudHTML;
};

function normalizeModulePath(categoryPath) {
  return (categoryPath || '')
    .replace(/\\/g, '/')
    .replace(/\/index\.html$/i, '')
    .replace(/\/tag\/[^/]+$/i, '')
    .replace(/\/$/, '')
    .replace(/^\//, '');
}

function moduleTagHref(categoryPath, tag) {
  const base = normalizeModulePath(categoryPath);
  return url_for.call(this, `/${base}/tag/${tag.slug}/`);
}

function renderTagcloud(tags, options, categoryPath) {
  if (!tags || !tags.length) return '';

  options = options || {};
  const min = options.min_font || 10;
  const max = options.max_font || 20;
  const orderby = options.orderby || 'name';
  const order = options.order || 1;
  const unit = options.unit || 'px';
  const className = options.class;
  const level = options.level || 10;
  const separator = options.separator || ' ';
  const result = [];
  const sizes = [];

  if (orderby === 'random' || orderby === 'rand') {
    tags = tags.random();
  } else {
    tags = tags.sort(orderby, order);
  }

  tags.sort('length').forEach(tag => {
    if (!sizes.includes(tag.length)) sizes.push(tag.length);
  });

  const length = sizes.length - 1;

  tags.forEach(tag => {
    const ratio = length ? sizes.indexOf(tag.length) / length : 0;
    const size = min + ((max - min) * ratio);
    const style = `font-size: ${parseFloat(size.toFixed(2))}${unit};`;
    const attr = className ? ` class="${className}-${Math.round(ratio * level)}"` : '';
    const label = `#${tag.name}`;
    const href = categoryPath ? moduleTagHref.call(this, categoryPath, tag) : null;
    if (href) {
      result.push(`<a href="${href}" style="${style}"${attr}>${label}</a>`);
    } else {
      result.push(`<span style="${style}"${attr}>${label}</span>`);
    }
  });

  return result.join(separator);
}
