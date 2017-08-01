var path = require('path');

module.exports = {
    entry : './demo01/bundle.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist"
    }
};