const { merge } = require('webpack-merge');
const { commonClient, commonServer } = require('./webpack.common');

module.exports = [
  merge(commonClient, {
    devtool: "inline-source-map",
    mode: "development",
  }),
  merge(commonServer, {
    devtool: "inline-source-map",
    mode: "development",
  })
];
