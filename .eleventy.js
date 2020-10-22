module.exports = (eleventyConfig) => {
    eleventyConfig.addCollection('slides', (collection) =>
        collection.getFilteredByGlob('src/content/slides/*.md')
    );

    eleventyConfig.addPassthroughCopy('src/js');

    return {
        dir: {
          input: 'src',
          output: 'dist',
          data: 'data',
        },
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
      };
}