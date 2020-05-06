const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base')

let extendConfig = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [new CleanWebpackPlugin()],

  // Enables UglifyJsPlugin, ModuleConcatenationPlugin and NoEmitOnErrorsPlugin by default
  mode: 'production',
}

module.exports = {
  ...baseConfig,
  ...extendConfig,
  optimization: { ...baseConfig.optimization, ...extendConfig.optimization },
  plugins: [...baseConfig.plugins, ...extendConfig.plugins],
}
