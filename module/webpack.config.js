const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  container: { ModuleFederationPlugin },
} = require("webpack");

const PORT = 3001;

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  mode: "development",
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    port: PORT,
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath:
      process.env.NODE_ENV === "development"
        ? `http://localhost:${PORT}/`
        : "https://cdn.statically.io/gh/scott-gmr/webpack-dev-server-issue/a690f8edbc93d7afc8590e84d70fd98c3424437b/module/build/",
    filename: "[name].[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ExampleModule",
      library: { type: "var", name: "ExampleModule" },
      filename: "remoteEntry.js",
      exposes: {
        "./ExampleModule": "./src/ExampleModule",
      },
      shared: [
        {
          react: { version: "16.13.0", singleton: true },
          "react-dom": { version: "16.13.0", singleton: true },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
  ],
};
