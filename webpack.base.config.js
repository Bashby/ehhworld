// Lib imports
import webpack from 'webpack';
import path from 'path';
import WebpackChunkHash from 'webpack-chunk-hash';
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


// Setup
const BUILD_PATH = path.resolve(__dirname, 'build');
const BASE_PATH = path.resolve(__dirname, 'app');


// Base Webpack Config
module.exports = {
  context: BASE_PATH,
  entry: {
    polyfills: 'babel-polyfill',
    app: path.resolve(BASE_PATH, 'app.tsx'),
  },
  output: {
    path: BUILD_PATH,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      ],
      include: /flexboxgrid/,
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      include: [
        BASE_PATH,
        path.resolve(__dirname, 'node_modules/normalize.css/'),
      ],
      exclude: /flexboxgrid/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
        // use style-loader in development
        fallback: 'style-loader',
      }),
    },
    {
      test: /\.json$/,
      exclude: /node_modules/,
      use: {
        loader: 'json-loader',
      },
    },
    {
      test: /\.yaml$/,
      exclude: /node_modules/,
      use: ['json-loader', 'yaml-loader'],
    },
    {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      },
      {
        loader: 'ts-loader',
      },
      ],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'source-map-loader',
      }],
      enforce: 'pre',
    },
    {
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i, // Notes: Embed small images in CSS via data-urls
      exclude: /node_modules/,
      use: [{
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      },
      {
        loader: 'image-webpack-loader',
        query: {
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
          pngquant: {
            quality: '65-90',
            speed: 4,
          },
        },
      },
      ],
    },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.json', '.css', '.scss', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.eot', '.ttf', '.woff', '.woff2'],
  },
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM",
  },
  node: {
    // console: true,
    // fs: 'empty',
    // net: 'empty',
    // tls: 'empty'
  },
  plugins: [
    // Break out vendor and manifest common chunks
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),

    // Extract CSS into a common file
    new ExtractTextPlugin('[name].css'),

    // Inline the webpack manifest in the index.html
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest',
    }),

    new WebpackChunkHash(),
  ],
};
