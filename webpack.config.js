'use strict';

/** imports */
const webpack = require('webpack');
const argv = require('optimist').argv;
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
  const {page} = env;
  const testComponent = page === 'test-lib' ? argv.c : false;
  return {
    mode: currentMode(isDev),
    watch: isDev,
    devtool: currentDevtool(isDev),
    entry: joinPaths(SRC_DIRNAME, `${page}.jsx`),
    output: {
      path: resolvePath(__dirname, 'public'),
      chunkFilename: 'js/[name].chunk.js',
      filename: `js/${page}.js`
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
            presets: ['@babel/env', '@babel/react']
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
        }
      ]
    },
    resolve: {
      alias: {
        '@': SRC_DIRNAME,
        '@lib': joinPaths(SRC_DIRNAME, 'lib'),
        '@style-assets': joinPaths(SRC_DIRNAME, 'assets', 'styles', 'assets.scss')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        TEST_COMPONENT: testComponent
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `css/${page}.css`
      })
    ]
  }
}

/** export */
module.exports = webpackConfig;