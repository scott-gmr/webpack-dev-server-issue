const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  container: { ModuleFederationPlugin },
} = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  devServer: {
    port: 3000,
    client: {
      overlay: false,
    },
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
    filename: "[name].[contenthash].js",
    clean: true,
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
      name: "Host",
      remotes: {
        ExampleModule: `ExampleModule@${
          process.env.LOCAL_MODULE
            ? `http://localhost:3001`
            : "https://cdn.statically.io/gh/scott-gmr/webpack-dev-server-issue/a690f8edbc93d7afc8590e84d70fd98c3424437b/module/build/"
        }/remoteEntry.js`,
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
