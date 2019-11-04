const { resolve } = require('path');

module.exports ={
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, 'public'),
        filename: 'bunble.js',
    },
    devServer: {
        contentBase: resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{ 
                    loader: 'babel-loader'
                }
            }
        ],
    }
}