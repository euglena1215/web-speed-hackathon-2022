const { merge } = require('webpack-merge');
const { commonClient, commonServer } = require('./webpack.common');

module.exports = [
  merge(commonClient, {
    mode: "production",
  }),
  merge(commonServer, {
    mode: "production",
  })
];
