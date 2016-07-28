function label(blk) {
    var body = blk.body.replace(/\\/g, "")
    return '<p class="code-label">' + body + '</p>';
}

module.exports = {
    book: {
        assets: "./book",
        css: ["block.css"]
    },
    blocks: {
        filename: {
            process: label
        },
        label: {
            process: label
        }
    }
};
