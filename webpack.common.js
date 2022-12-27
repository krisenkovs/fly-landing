const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const outputFolderPath = resolve(__dirname, 'build');

module.exports = {
  context: resolve(__dirname, ''),
  entry: [join(__dirname, 'src', 'index.tsx')],
  output: {
    path: outputFolderPath,
    filename: `js/[name].${pkg.version}.js`,
  },
  module: {
    rules: [
      // load ts
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      // load less files
      {
        test: /\.css/,
        exclude: /\.module\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                auto: true,
                localIdentName: '[local]-[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // load assets
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: 'asset/inline',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].${pkg.version}.css`,
      chunkFilename: `css/[id].${pkg.version}.css`,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Webpack App',
      inject: true,
      template: join(__dirname, 'public', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(__dirname, 'public/fonts'),
          to: 'fonts',
        },
        {
          from: resolve(__dirname, 'public/locales'),
          to: 'locales',
        },
        {
          from: resolve(__dirname, 'public/favicon'),
          to: 'favicon',
        },
        {
          from: resolve(__dirname, 'public/static'),
          to: 'static',
        },
        {
          from: resolve(__dirname, 'public/images'),
          to: 'images',
          noErrorOnMissing: true,
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      exclude: [/.*/],
      disableDevLogs: true,
      mode: 'production',
      runtimeCaching: [
        {
          urlPattern: /\.(ttf|png|svg)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'static',
            expiration: {
              maxEntries: 40,
            },
          },
        }
      ],
    }),
  ],
  performance: {
    hints: false,
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat', // Must be below test-utils
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
    fallback: {
      net: false,
    },
  },
  target: 'web',
};
