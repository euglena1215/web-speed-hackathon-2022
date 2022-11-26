const { merge } = require('webpack-merge');
const { commonClient, commonServer } = require('./webpack.common');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  merge(commonClient, {
    devtool: "inline-source-map",
    mode: "development",
    plugins: [
      new BundleAnalyzerPlugin(),
    ]
  }),
  merge(commonServer, {
    devtool: "inline-source-map",
    mode: "development",
  })
];
