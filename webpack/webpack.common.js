const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const tailwindcss = require('tailwindcss')
const srcDir = path.join(__dirname, '..', 'src')

module.exports = {
  entry: {
    index: path.join(srcDir, 'index.tsx'),
    popup: path.join(srcDir, 'popup.tsx'),
    background: path.join(srcDir, 'background.ts'),
    content_script: path.join(srcDir, 'content_script.tsx')
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks(chunk) {
        return chunk.name !== 'background'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                tailwindcss('./tailwind.config.js'),
                require('autoprefixer')
              ]
            }
          }
        }],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '.', to: '../', context: 'public' }],
      options: {}
    })
  ]
}
