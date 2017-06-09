var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8000/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      use: [{
          loader: 'style-loader'
        },
        {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
            importLoaders: 1,
            sourceMap: true,
          }
        }, {
          loader: 'postcss-loader'
        }
      ]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      loader: ['babel'],
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      loader: "url-loader",
      options: {
        limit: 10000
      },
    }, {
      test: /\.json$/,
      loader: ['json-loader'],
    }, ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],

};
