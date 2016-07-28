# Gitbook Plugin: Add labels to codeblocks

This is a gitbook plugin.

Id adds a label to codeblocks, it's useful for adding filenames over code blocks.

## Usage

You can install this plugin via NPM and save it to `package.json`.
The plugin requires gitbook >= 3, for older versions see [the original package](https://github.com/litmon/gitbook-plugin-codeblock-filename).

```
$ npm install gitbook-plugin-codeblock-label --save
```

Add the plugin to your `book.json`:

```
{
	plugins: [ "codeblock-label" ]
}
```

Then, you need only to insert before codeblock the code below.

<pre><code>
{% label %}filename{% endlabel %}
```
codeblock
```
</code></pre>


## Example

write this code ↓

<pre><code>
{% label %}test.js{% endlabel %}
```js
var a = 10;
a = a + 1;

console.log(a);
```
</code></pre>

then result is ↓

![screenshot](./screenshot.png)

