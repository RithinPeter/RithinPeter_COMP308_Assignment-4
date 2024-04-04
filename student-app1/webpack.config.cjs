const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // Assume entry point is also index.jsx

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "auto", // Ensure publicPath is set to "auto" for Module Federation to work correctly
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm'], // Support for .jsx files
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'], // Preset for React
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      // Add other rules as needed
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'StudentApp1', // Name of the current application
      library: { type: "var", name: "StudentApp1" },
      filename: 'remoteEntry.js', // The name of the file containing the exposed modules
      exposes: {
        // Expose components. Adjust according to what StudentApp1 provides
        './StudentForm': './src/StudentForm.jsx', // Assuming there is a StudentForm component
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
      },
    }),
    new HtmlWebpackPlugin({
      template: './index.html', // Ensure you have an index.html template
      filename: 'index.html',
    }),
  ],

  // Other configurations as needed
};
