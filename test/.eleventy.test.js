const shareHighlight = require('../.eleventy.js')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(shareHighlight, {
        // label: "Custom Label"
    })

    eleventyConfig.addPassthroughCopy('share-highlight.js')
    eleventyConfig.addPassthroughCopy('styles.css')

    return {
        dir: {
            input: '.',
            output: 'test/_site',
            includes: 'test/_includes'
        },
        templateFormats: ['md']
    }
}
