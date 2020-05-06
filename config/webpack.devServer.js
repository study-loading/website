// const proxy = require('./proxy')

const devServerConfig = {
  // 开启gzip压缩
  compress: true,
  headers: {
    // response header
  },
  historyApiFallback: true,
  hot: true,
  // hotOnly: true,
  inline: true,
  // 无效，无法通过node api实现，暂时用open模块替换
  open: true,
  publicPath: '/',
  overlay: true,
  port: 8080,
  // https: true,
  // lazy: true,
  // host: '0.0.0.0',
  useLocalIp: true,
  quiet: false,
  noInfo: false,
  // proxy: proxy,
  // progress: true
  stats: {
    colors: true,
  },
}

module.exports = devServerConfig
