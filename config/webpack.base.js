const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const PreloadWebpackPlugin = require('preload-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const srcPath = path.resolve(__dirname, '../src')

let config = {
  entry: {
    app: ['./index.tsx'],
  },
  context: srcPath,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/' + (devMode ? '[name]_[hash:8].js' : '[name]_[chunkhash:8].js'),
    chunkFilename: 'chunks/[name]_[chunkhash:8].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: `${srcPath}/components/`,
      pages: `${srcPath}/pages/`,
      utils: `${srcPath}/utils/`,
      styles: `${srcPath}/styles`,
      api: `${srcPath}/api/`,
    },
    extensions: ['.js', '.jsx', 'json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              publicPath: '../',
              // publicPath: (resourcePath, context) => {
              //   // publicPath is the relative path of the resource to the context
              //   // e.g. for ./css/admin/main.css the publicPath will be ../../
              //   // while for ./css/main.css the publicPath will be ../
              //   return path.relative(path.dirname(resourcePath), context) + '/'
              // },
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(j|t)s(x?)$/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
        exclude: [
          path.resolve(__dirname, `${srcPath}/lib`),
          path.resolve(__dirname, '../node_modules'),
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: false,
            name: '[name]_[hash:8].[ext]',
            outputPath: 'images/',
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: false,
            name: '[name]_[hash:8].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 首页渲染依赖主要的第三方库，充分利用持久化缓存
        init: {
          test: /react|react-dom|react-router-dom|react-loadable|@babel\/polyfill/,
          name: 'init',
          chunks: 'all',
          priority: 10, // 优先级最高
        },
        //抽取只出现在异步chunks中复用两次以上的modules模块
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 9,
        },
        //抽取只出现在异步chunks中出现一次的modules模块
        // async2: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: 'async2',
        //   chunks: 'async',
        //   priority: 8,
        //   minChunks: 1,
        // },
        // asyncLib: {
        //   // test: /[\\/]node_modules[\\/]/,
        //   name: 'asyncLib',
        //   chunks: 'all',
        //   priority: 8,
        //   minChunks: 2,
        // },
        // 只在异步chunks中的复用模块会不会被打包到commons里，在首页渲染时被加载
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          priority: 7,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MyWeb',
      filename: 'index.html',
      template: './index.html',
      favicon: './favicon.ico',
      chunks: ['app', 'commons', 'vendors', 'init'],
    }),
    // new PreloadWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/' + (devMode ? '[name].css' : '[name].[contenthash:8].css'),
      chunkFilename: 'css/' + (devMode ? '[id].css' : '[id].[contenthash:8].css'),
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
}
module.exports = config
