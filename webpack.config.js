const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const WebpackChunkHash = require('webpack-chunk-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === "production";

let chunkHashPlaceholder = '';
let contentHashPlaceholder = '';
let publicPath = '/';
let extraPlugins = [];

if (isProduction) {
  chunkHashPlaceholder = '[chunkhash:16].';
  contentHashPlaceholder = '[contenthash:16].';
  publicPath = '/';

  extraPlugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false, // 最紧凑的输出
      comments: false, // 删除所有的注释
      sourceMap: true,
      compress: {
        warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
        drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
        collapse_vars: true, // 内嵌定义了但是只用到一次的变量
        reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
      },
    }),
  ];
}

module.exports = {
  entry: {
    bundle: './src/index.jsx',
  },
  node: {
    fs: 'empty',
  },
  output: {
    publicPath,
    path: path.resolve(__dirname, './dist'),
    chunkFilename: `[name].${chunkHashPlaceholder}js`,
    filename: `[name].${chunkHashPlaceholder}js`,
    sourceMapFilename: "[name].js.map",
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          'eslint-loader',
        ],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?-autoprefixer'],
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?-autoprefixer',
            'postcss-loader?sourceMap',
            'resolve-url-loader',
            'sass-loader?sourceMap',
          ],
          fallback: "style-loader",
        }),
      }, {
        test: /\.png|\.eot|\.ttf|\.woff|\.jpg|\.gif|\.svg$/,
        use: [
          "url-loader?limit=5000&name=img/[name].[hash:8].[ext]",
          {
            loader: 'image-webpack-loader',
            query: {
              optipng: { optimizationLevel: 3 },
              pngquant: false,
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    // historyApiFallback: true,
    hot: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/static/, to: '/static' },
      ],
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new WebpackChunkHash(),
    new ExtractTextPlugin(`[name].${contentHashPlaceholder}css`),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              '> 1%',
              'IE >= 10',
              'Chrome >= 39',
              'Safari >= 4',
              'ios >= 8',
              'Android >= 4.0',
              'last 2 versions',
            ],
          }),
        ],
      },
    }),
  ].concat(extraPlugins),
};
