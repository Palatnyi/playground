const webpack = require("webpack");
const path = require("path");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const projectRoot = process.cwd();

const rules = [
  {
    test: /\.js$/,
    loaders: ["babel-loader"],
    exclude: /node_modules/,
    include: __dirname
  },
  {
    test: /\.less$/,
    loaders: [
      "style-loader",
      "css-loader",
      "less-loader",
    ]
  },
  {
    test: /\.css$/,
    loaders: [
      "style-loader",
      "css-loader"
    ]
  },
  {
    test: /\.(otf|eot|svg|ttf|woff|woff2|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=8192"
  },
  {
    test: /\.(jpeg|jpg|png|pdf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
  }
];
const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
  }),
  new StaticSiteGeneratorPlugin({
    paths: [
      '/',
    ],
    locals: {
      greet: 'Hello'
    }
  })
];

let entry = [
  "./src/index.js"
];

const config = {
  entry,
  plugins,
  devServer: {
    hot: true,
    inline: false
  },
  output: {
    path: path.resolve(projectRoot, "static"),
    filename: "bundle.js",
    publicPath: "/",
    libraryTarget: "umd"
  },
  module: {rules}
};

module.exports = config;