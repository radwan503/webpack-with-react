const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
 {
  entry: "./src/client/index.tsx",
  mode: "development",
  target: "web",
  output: {
   path: path.resolve(__dirname, "dist/client"),
   filename: "client_bundle.js"
  },
  resolve: {
   extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
  module: {
   rules: [
    {
     test: /\.(ts|tsx)$/,
     exclude: /node_module/,
     use: 'ts-loader'
    },
    {
     test: /\.(js|jsx)$/,
     exclude: /node_module/,
     use: {
      loader: 'babel-loader',
      options: {
       preset: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      },
     },
    },
    {
     test: /\.css$/,
     exclude: /node_module/,
     use: ['style-loader', 'css-loader']
    },
    {
     test: /\.(png|jpe?g|svg|ttf)$/,
     type: "asset/resource",
    }
   ]
  },
  plugins: [
   new HtmlWebpackPlugin({
    template: "./src/client/index.html",
   })
  ]
 }
]