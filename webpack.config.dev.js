const path = require('path');


module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']  // Correct
                    }
                }
            }
        ]
    },
    resolve: {               
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        hot: true,
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        open: true,
        port: 3000,
    }
}