// Example use for the plugin:
// {% highlight %}Hi Everyone! This is a piece of text that can be shared.{% endhighlight %}

module.exports = (eleventyConfig, options) => {
    eleventyConfig.addPairedShortcode('highlight', (content) => {
        const defaults = {
            label: 'Share this'
        }
        const { label } = Object.assign({}, defaults, options)
        return `<share-highlight label="${label}"><mark>${content}</mark></share-highlight>`
    })
}
