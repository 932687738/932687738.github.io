'use strict';

function getModulePath(page) {
  return (page.path || page.name || '').replace(/\\/g, '/').replace(/\/$/, '');
}

module.exports = hexo => {
  hexo.extend.generator.register('module-tag', moduleTagGenerator);
};

function moduleTagGenerator(locals) {
  const ctx = this;

  if (!ctx.theme.config.subpage.enable) return [];

  const result = [];
  const Post = ctx.model('Post');
  const Tag = ctx.model('Tag');

  ctx.theme.config.subpage.pages.forEach(page => {
    const category = locals.categories.findOne({ name: page.name });
    if (!category || !category.length) return;

    const modulePath = `${(page.path || page.name).replace(/\/$/, '')}/`;
    const modulePosts = category.posts.toArray();
    const tagBuckets = new Map();

    modulePosts.forEach(post => {
      post.tags.toArray().forEach(tag => {
        if (!tagBuckets.has(tag.slug)) {
          tagBuckets.set(tag.slug, { tag, postIds: [] });
        }
        tagBuckets.get(tag.slug).postIds.push(post._id);
      });
    });

    const moduleTagIds = getTagIds(category);
    const moduleTags = Tag.find({ _id: { $in: moduleTagIds } });

    tagBuckets.forEach(({ tag, postIds }) => {
      const posts = Post.find({ _id: { $in: postIds } }).sort('-date');

      result.push({
        path: `${modulePath}tag/${tag.slug}/`,
        layout: ['module-tag', 'category', 'index'],
        data: {
          ...page,
          module_path: getModulePath(page),
          tag: tag.name,
          tag_slug: tag.slug,
          posts,
          tags: moduleTags
        }
      });
    });
  });

  return result;
}

function getTagIds(category) {
  const tag_ids = new Set();
  category.posts.toArray()
    .flatMap(post => post.tags.toArray())
    .forEach(tag => tag_ids.add(tag._id));
  return Array.from(tag_ids);
}
