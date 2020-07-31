'use strict';

/** node modules */
const {join: joinPaths, resolve: resolvePath} = require('path');

/** constants */
const SRC_DIRNAME = joinPaths(__dirname, 'src');
const currentMode = (isDev) => isDev ? 'development' : 'production';

/** webpack plugins */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** webpack config */
const webpackConfig = (env = {}) => {
  const isDev = env.isDev || false;
  return {
    mode: currentMode(isDev),
    entry: joinPaths(SRC_DIRNAME, 'index.jsx'),
    output: {
      path: resolvePath(__dirname, 'dist'),
      filename: 'planner.js'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            attributes: false,
            minimize: !isDev
          }
        },
        {
          test: /\/.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            preset: ['@babel/env', '@babel/react']
          }
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: isDev
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@': SRC_DIRNAME
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'planner.css'
      })
    ]
  }
}

/** export */
module.exports = webpackConfig;