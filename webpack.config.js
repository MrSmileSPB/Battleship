const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  
  entry: './src/js/script.js',
  
  module: {
    rules: [
      { 
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],
  
  devServer: {
    static: './dist',
    port: 9000,
    open: true,
    hot: true
  }
};