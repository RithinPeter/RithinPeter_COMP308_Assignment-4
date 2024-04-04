const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // Entry point is set to index.jsx inside src directory

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm'], // Add .jsx if you're using JSX syntax
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'StudentApp',
      remotes: {
        StudentApp1: 'StudentApp1@https://studentapp1-assignment4.netlify.app/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
      },
    }),
    // Instantiate the HtmlWebpackPlugin with the template path
    new HtmlWebpackPlugin({
      template: './index.html', // Path to the template file
      filename: 'index.html', // Name of the file to be generated in the dist folder
    }),
 
  ],

  // ...other webpack config options if necessary
};
