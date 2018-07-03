let path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let conf = {
  entry: {main:'./src/index.js'},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/'
  },
  resolve:{
    modules: [path.resolve(__dirname, "src"),

     "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: [
           "style-loader",
           MiniCssExtractPlugin.loader,
           "css-loader",
           "sass-loader"
        ]
      }
    ]
  },
  devServer: {
   historyApiFallback: true,
 },
  plugins: [
     new MiniCssExtractPlugin({
       filename: 'main.css'
     })
   ],
 devtool: "eval-soursemap"
};

module.exports = conf;
