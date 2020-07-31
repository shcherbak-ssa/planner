'use strict';

/** node modules */
const {join: joinPaths, resolve: resolvePath} = require('path');

/** constants */
const SRC_DIRNAME = joinPaths(__dirname, 'src');
const currentMode = (isDev) => isDev ? 'development' : 'production';
const outputDirname = (isDev) => isDev ? 'dist' : 'public';

/** webpack plugins */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** webpack config */
const webpackConfig = (env = {}) => {
  const isDev = env.isDev || false;
  return {
    mode: currentMode(isDev),
    entry: joinPaths(SRC_DIRNAME, 'index.jsx'),
    output: {
      path: resolvePath(__dirname, outputDirname(isDev)),
      filename: 'js/planner.js'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                attributes: false,
                minimize: !isDev
              }
            },
            {
              loader: 'file-loader',
              options: {
                name: '[name].html',
              }
            }
          ]
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
        },
        {
          test: /\.ttf$/,
          loader: 'file-loader',
          options: {
            name: '[name].ttf',
            outputPath: 'fonts'
          }
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
        filename: 'css/planner.css'
      })
    ]
  }
}

/** export */
module.exports = webpackConfig;