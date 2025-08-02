'use strict';

const path = require('path');

/** @typedef {import('webpack').Configuration} WebpackConfig */

/** @type WebpackConfig */
const extensionConfig = {
  target: 'node',
  mode: 'none',

  entry: {
    extension: './src/extension.ts',               // main extension
    'test/runTest': './src/test/runTest.ts',       // test bootstrap
    'test/extension.test': './src/test/extension.test.ts' // your test suite
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',          // name based on entry keys
    libraryTarget: 'commonjs2',
  },

  externals: {
    vscode: 'commonjs vscode'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },

  devtool: 'nosources-source-map',

  infrastructureLogging: {
    level: 'log',
  },
};

module.exports = [extensionConfig];
