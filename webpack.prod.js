const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common,{ 
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
   plugins: [
        new UglifyJSPlugin()
   ]
});