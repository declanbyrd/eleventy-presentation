const syntaxHighlighting = require('@11ty/eleventy-plugin-syntaxhighlight');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');

module.exports = (eleventyConfig) => {
    eleventyConfig.addCollection('slides', (collection) =>
        collection.getFilteredByGlob('src/content/slides/*.md')
    );
    eleventyConfig.addPlugin(syntaxHighlighting, { templateFormats: 'md' });
    eleventyConfig.addPlugin(inclusiveLangPlugin);
    
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