// Example use for the plugin:
// {% highlight %}Hi Everyone! This is a piece of text that can be shared.{% endhighlight %}

const { JSDOM } = require('jsdom')

module.exports = (eleventyConfig, options) => {
    eleventyConfig.addPairedShortcode('highlight', (content) => {
        const defaults = {
            label: 'Share this'
        }
        const { label } = Object.assign({}, defaults, options)
        return `<share-highlight aria-label="${label}"><mark>${content}</mark></share-highlight>`
    })

    eleventyConfig.addTransform(
        'strip-share-highlight',
        (content, outputPath) => {
            if (outputPath && !outputPath.endsWith('.html')) {
                const dom = new JSDOM(content)
                const { document } = dom.window
                const shareHighlights = Array.from(
                    document.querySelectorAll('share-highlight')
                )
                const unwrapElement = (el) => {
                    if (el.childNodes) {
                        while (el.firstChild) {
                            el.parentNode.insertBefore(el.firstChild, el)
                        }
                        el.parentNode.removeChild(el)
                    }
                }
                if (shareHighlights.length) {
                    shareHighlights.forEach(unwrapElement)
                    return dom.serialize()
                }
            }

            return content
        }
    )
}
