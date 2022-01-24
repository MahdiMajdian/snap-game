const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        {from: 'public/assets', to: 'assets'},
      ],
    }),
  ],
};
