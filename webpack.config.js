'use strict';

/** imports */
const {join: joinPaths, resolve: resolvePath} = require('path');

/** constants */
const SRC_DIRNAME = joinPaths(__dirname, 'src');
const currentMode = (isDev) => isDev ? 'development' : 'production';
const currentDevtool = (isDev) => isDev ? 'eval-source-map' : false;

/** webpack plugins */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** webpack config */
const webpackConfig = (env = {}) => {
  const isDev = env.isDev || false;
  return {
    mode: currentMode(isDev),
    watch: isDev,
    devtool: currentDevtool(isDev),
    entry: joinPaths(SRC_DIRNAME, `planner.jsx`),
    output: {
      path: resolvePath(__dirname, 'public'),
      chunkFilename: 'js/[name].chunk.js',
      filename: `js/planner.js`
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
                name: 'view/[name].html',
              }
            }
          ]
        },
        {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
            plugins: [
              //'@babel/plugin-syntax-dynamic-import'
            ]
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
                importLoaders: 1,
                sourceMap: isDev
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-short')({ prefix: 'x', skip: 'x' })
                ]
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
        },
        {
          test: /\.(ico|jpg|png)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': SRC_DIRNAME,
        '@lib': joinPaths(SRC_DIRNAME, 'lib'),
        '@style-assets': joinPaths(SRC_DIRNAME, 'assets', 'styles', 'assets.scss'),
        '@module': joinPaths(SRC_DIRNAME, 'modules')
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `css/planner.css`
      })
    ]
  }
}

/** export */
module.exports = webpackConfig;