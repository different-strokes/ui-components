const path = require('path');
const bourbonPaths = require('node-bourbon').includePaths;

module.exports = {
  module: {
    rules: [
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader?includePaths[]=' + bourbonPaths,
          include: path.resolve(__dirname, '../'),
        }
    ]
  }
}
