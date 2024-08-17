const path = require('path');


module.exports = {
    mode: "development",
    entry: './src/index.js', // Specifies the entry point of your application. This is the main JavaScript file that Webpack will start bundling from.
    output: { // Defines where and how Webpack should output the bundled files.
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js' // Specifies the name of the output file. In this case, Webpack will create a bundle.js file in the dist directory.
    },
    module: { // This section is where you define the rules for how different types of files should be processed by Webpack.
        rules: [ // An array of rules that define how Webpack should treat different file types.
            {
                test: /\.(jsx|js)$/, // Specifies what are the file types to use this rule 
                include: path.resolve(__dirname, "src"), // babel only process js file inside the src file
                exclude: path.resolve(__dirname, "node_modules"), // Excludes the node_modules directory from being processed by Babel. This is important for performance, as you don't want to transpile third-party code.
                use: { // Specifies which loader should be used to process the files that match the test condition.
                    loader: 'babel-loader', // Tells Webpack to use babel-loader to process the files. babel-loader is responsible for transpiling the code using Babel.
                    options: { // Specifies the options that should be passed to babel-loader.
                        presets: ['@babel/preset-env', '@babel/preset-react']  
                        // @babel/preset-env: Transpiles modern JavaScript down to a version compatible with older environments based on your target browsers.
                        // @babel/preset-react: Transpiles JSX syntax and other React-specific code into standard JavaScript.
                    }
                }
            }
        ]
    },
    resolve: { // This section is used to specify how Webpack should resolve the paths of modules that are imported in your code.
        extensions: ['.js', '.jsx'], // Automatically resolves imports without needing to specify the file extension for .js and .jsx files. For example, import App from './App' would resolve to either App.js or App.jsx.
    },
    devServer: { // Configures the Webpack development server, which is used for running your application during development.
        hot: true, // Enables Hot Module Replacement (HMR), which allows you to see changes in real-time without a full page reload.
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        open: true, // opens the webpage in your default browser when you run the appliaction
        port: 3000, // choose the port where in the webpage in can hosted
    }
}