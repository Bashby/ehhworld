// Lib imports
import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplatePlugin from 'html-webpack-template';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

// Local imports
import CommonWebpackConfig from './webpack.base.config';


// Setup
const BASE_PATH = path.resolve(__dirname, 'app');
const IMAGE_PATH = path.resolve(BASE_PATH, 'asset', 'image');

module.exports = merge(CommonWebpackConfig, {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    // Set environment variables
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    // Uglify for production
    new webpack.optimize.UglifyJsPlugin(),

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
        collapseWhitespace: true, // Set to true for PROD
        preserveLineBreaks: true,
      },
      links: [],
      scripts: [
        // "https://unpkg.com/react@15/dist/react.min.js",
        // "https://unpkg.com/react-dom@15/dist/react-dom.min.js",
        // "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.30.8/react-bootstrap.min.js",
      ],
    }),

    // Generate fav-icons for all targeted platforms
    new FaviconsWebpackPlugin({
      logo: path.resolve(IMAGE_PATH, 'icons8-globe-64.png'),
      prefix: 'favicons-[hash]/',
      title: 'app-favicon',
      persistentCache: true,
      emitStats: false,
      inject: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),

    // Hash chunks (be less performant but more accurate in production)
    new webpack.HashedModuleIdsPlugin(),
  ],
});
