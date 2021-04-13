# Eleventy Plugin: Share Highlight

This plugin adds a Medium-style shareable text highlight shortcode.

If the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) is supported, clicking the element will bring up your share options and insert the quoted text and a link to the current page. You can share it on any platform that registers as a share target.

If the API is not supported, the component will fall back to sharing on Twitter via [tweet intent URL](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent). The tooltip will show the Twitter icon and clicking the highlight opens a new tab with a pre-filled tweet.

## Installation

Install the plugin through NPM: `npm install eleventy-plugin-share-highlight --save`

Then add it to your `.eleventy.js` configuration like this:

```js
// .eleventy.js
const pluginShareHighlight = require('eleventy-plugin-share-highlight');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginShareHighlight, {
        // optional: define the tooltip label.
        // will be "Share this" if omitted.
        label: "Quote Me"
    })
}
```

To enable the sharing function, you need to add the [custom element definition](https://github.com/maxboeck/eleventy-plugin-share-highlight/blob/main/share-highlight.js) first. Depending on your setup, you can either include that as part of a bundle by importing it directly:

```js
import 'eleventy-plugin-share-highlight/share-highlight'
```

...or [copy the file](https://github.com/maxboeck/eleventy-plugin-share-highlight/blob/main/share-highlight.js) and add it directly to your HTML with something like:

```html
<head>
    <script src="/js/share-highlight.js" async defer></script>
</head>
```

## Usage

Use the paired `{% highlight %}` shortcode to mark pieces of text:

```md
<!-- blogpost.md -->
{% highlight %}Here's some highlighted text you can share!{% endhighlight %}
```

it will produce this HTML output:

```html
<share-highlight aria-label="Share this">
    <mark>Here's some highlighted text you can share!</mark>
<share-highlight>
```

## Styling

To style the highlight, add [this piece of CSS](https://github.com/maxboeck/eleventy-plugin-share-highlight/blob/main/styles.css) and customize it to match your design:

```css
/* general styles for text highlight */
mark {
    background-color: yellow;
}
/* styling if webcomponent is supported */
share-highlight {
    /* default state */
    --share-highlight-text-color: inherit;
    --share-highlight-bg-color: yellow;
    /* hover/focus state */
    --share-highlight-text-color-active: inherit;
    --share-highlight-bg-color-active: orange;
    /* tooltip */
    --share-highlight-tooltip-text-color: white;
    --share-highlight-tooltip-bg-color: black;
}
```