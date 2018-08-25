// Lib imports
import webpack from 'webpack';
import path from 'path';
import WebpackChunkHash from 'webpack-chunk-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Setup
const DEV_MODE = process.env.NODE_ENV !== 'production';
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
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: DEV_MODE ? 'style-loader' : MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
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
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: DEV_MODE ? '[name].css' : '[name].[hash].css',
      chunkFilename: DEV_MODE ? '[id].css' : '[id].[hash].css',
    }),

    new WebpackChunkHash(),
  ],
};
