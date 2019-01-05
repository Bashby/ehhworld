// Lib imports
import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplatePlugin from 'html-webpack-template';
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';

// Local imports
import CommonWebpackConfig from './webpack.base.config.babel';


module.exports = merge(CommonWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  plugins: [
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

    // Inline the webpack manifest in the index.html
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest',
    }),

    // Hash chunks
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    // publicPath: '/assets/',
    contentBase: path.join(__dirname, 'app'),
    // historyApiFallback: true
  },
  serve: {
    host: '0.0.0.0',
    port: 8080,
    clipboard: false,
    hotClient: {
      host: {
        client: 'localhost',
        server: '0.0.0.0'
      },
      port: 9091,
    },
    devMiddleware: {
      publicPath: '/',
      watchOptions: {
        aggregateTimeout: 200,
        poll: 1000
      }
    }
  }
});
