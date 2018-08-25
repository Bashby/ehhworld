// Lib imports
import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplatePlugin from 'html-webpack-template';

// Local imports
import CommonWebpackConfig from './webpack.base.config';


module.exports = merge(CommonWebpackConfig, {
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    // Set environment variables
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    // Build Index.html
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplatePlugin,
      inlineManifestWebpackName: 'webpackManifest',
      title: 'EhhWorld',
      appMountId: 'application',
      mobile: true,
      meta: [
        {
          name: 'description',
          content: 'EhhWorld. An expanse lies before you. Terra incognita. What will you do? Ehh...',
        },
      ],
      minify: {
        collapseWhitespace: false, // Set to false for DEV
        preserveLineBreaks: true,
      },
      links: [],
      scripts: [
        // "https://unpkg.com/react@^15.6.1/dist/react.min.js",
        // "https://unpkg.com/react-dom@^15.6.1/dist/react-dom.min.js",
        // "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.30.8/react-bootstrap.min.js",
      ],
    }),

    // Hash chunks
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    // publicPath: '/assets/',
    contentBase: path.join(__dirname, 'app'),
    // historyApiFallback: true
  },
});
