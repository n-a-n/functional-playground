const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
module.exports = {
  entry: './src/lambda_problem.js',
  output: {
    filename: 'app.js',
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 4200,
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['babel-preset-env'],
      //     },
      //   },
      // },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new HotModuleReplacementPlugin()],
};
