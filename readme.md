
### React Setup From Scratch in 2023 (React, TypeScript, Webpack, Babel)

webpack is JavaScript module bundler. it takes code, assets, and other dependencies and bundle them together in a way that is optimized for the web. Its often used in modern wen development to manage and bundle front-end assets, such as JavaScript, CSS and images.

Here is some key concept and feature of webpack

1. **Entry:** Specifies the entry point of your application, where Webpack should start bundling your code.
    
2. **Output:** Specifies the location and name of the bundled output file.
    
3. **Loaders:** Webpack uses loaders to process different types of files. For example, there are loaders for handling JavaScript with Babel, styles with CSS preprocessors like Sass or Less, and more.
    
4. **Plugins:** Plugins are used for a wide range of tasks, such as minification, code splitting, and environment-specific configuration.
    
5. **Code Splitting:** Webpack allows you to split your code into smaller chunks, which can be loaded on demand. This can improve the initial loading time of your application.
    
6. **Hot Module Replacement (HMR):** HMR is a feature that allows you to update modules in your application without a full page reload during development. It helps to speed up the development process.
    
7. **Tree Shaking:** Webpack can eliminate dead code (unreachable code) from your final bundle, reducing its size.
    
8. **Webpack Dev Server:** A development server that provides live reloading, HMR, and other features to streamline the development process.

To use Webpack, you typically create a configuration file (usually named `webpack.config.js`) where you define your entry points, output configuration, and other settings. Then, you run the `webpack` command to trigger the bundling process.

Here's a simple example of a `webpack.config.js` file:

`javascript
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Add other loaders for different file types (e.g., CSS, images) as needed.
    ],
  },
  // Add plugins and other configuration as needed.
};


1. Steps
   - Install latest node js
   - create project
   - npm init -y
   - npm install react react-dom
   - npm i @babel/core @babel/cli @babel/preset-typescript @babel/preset-react babel-loader
   - npm i --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader @types/react style-loader css-loader
   