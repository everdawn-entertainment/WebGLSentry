const path = require('path');

module.exports = {
  entry: './src/js/wrapper.js',
  output: {
    filename: 'everdawn-webglsentry.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      core: path.resolve(__dirname, 'src/js/core'),
      lib: path.resolve(__dirname, 'src/js/lib'),
      assets: path.resolve(__dirname, 'src/assets'),
      ui: path.resolve(__dirname, 'src/ui'),
      style: path.resolve(__dirname, 'src/style'),
      js: path.resolve(__dirname, "src/js")
    }
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
       },
       {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
       },
       {
        test: /\.less$/,
        use: [{
             loader: "style-loader" // creates style nodes from JS strings
         }, {
             loader: "css-loader" // translates CSS into CommonJS
         }, {
            loader: "less-loader", options: {
                noIeCompat: false,
                strictMath: true
            }
        }]
       }
     ]
   }
};