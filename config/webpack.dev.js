/*
 * @Description: 
 * @Author: wangYong
 * @Date: 2020-02-27 17:55:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-06 22:17:54
 */
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const StylelintPlugin = require('stylelint-webpack-plugin')

let extendConfig = {
  // new webpack.HotModuleReplacementPlugin() 开启hot:true会自动添加该插件
  plugins: [
    new StylelintPlugin({
      files: '**/*.(sc|c)ss',
      fix: true,
    }),
  ],
  // Enables NamedModulesPlugin
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
}
module.exports = {
  ...baseConfig,
  ...extendConfig,
  plugins: [...baseConfig.plugins, ...extendConfig.plugins],
}
