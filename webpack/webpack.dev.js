const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
};
