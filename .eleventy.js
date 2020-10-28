const syntaxHighlighting = require('@11ty/eleventy-plugin-syntaxhighlight');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');

module.exports = (eleventyConfig) => {
    eleventyConfig.addCollection('slides', (collection) =>
        collection.getFilteredByGlob('src/content/slides/*.md')
    );
    eleventyConfig.addPlugin(syntaxHighlighting, { templateFormats: 'md' });
    eleventyConfig.addPlugin(inclusiveLangPlugin);

    // Mermaid magic
    const highlighter = eleventyConfig.markdownHighlighter;
    eleventyConfig.addMarkdownHighlighter((str, lang) => {
      if (lang === 'mermaid') {
        return `<pre class="mermaid">${str}</pre>`
      }
      return highlighter(str, lang);
    })
    
    eleventyConfig.addPassthroughCopy('src/assets/styles/*.css');
    eleventyConfig.addPassthroughCopy('src/assets/scripts');
    eleventyConfig.addPassthroughCopy('src/assets/icons');

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