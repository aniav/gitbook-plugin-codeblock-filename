module.exports = {
    book: {
        assets: "./book",
        css: ["block.css"]
    },
    blocks: {
        filename: {
            process: function(blk) {
                var body = blk.body.replace(/\\/g, "")
                return '<p class="code-filename">' + body + '</p>';
            }
        }
    }
};
