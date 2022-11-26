const { merge } = require('webpack-merge');
const { commonClient, commonServer } = require('./webpack.common');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  merge(commonClient, {
    mode: "production",
    plugins: [
      new BundleAnalyzerPlugin(),
    ]
  }),
  merge(commonServer, {
    mode: "development", // TODO: production にするとエラーになったので後で直す
  })
];
