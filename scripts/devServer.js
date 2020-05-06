/*
 * @Description: 
 * @Author: wangYong
 * @Date: 2020-02-27 17:55:23
 * @LastEditors: wangYong
 * @LastEditTime: 2020-02-27 18:47:36
 */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.dev')
const devServerConfig = require('../config/webpack.DevServer')

new WebpackDevServer(webpack(config), devServerConfig).listen(devServerConfig.port)
