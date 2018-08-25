// Lib imports
import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplatePlugin from 'html-webpack-template';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

// Local imports
import CommonWebpackConfig from './webpack.base.config.babel';


// Setup
const BASE_PATH = path.resolve(__dirname, 'app');
const IMAGE_PATH = path.resolve(BASE_PATH, 'asset', 'image');

module.exports = merge(CommonWebpackConfig, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    // Set environment variables
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
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
      logo: path.resolve(IMAGE_PATH, 'world.png'),
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

    // Inline the webpack manifest in the index.html
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest',
    }),

    // Hash chunks (be less performant but more accurate in production)
    new webpack.HashedModuleIdsPlugin(),
  ],
});
