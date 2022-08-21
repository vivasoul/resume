const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    resolve: {
        preferRelative: true,
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
          {
              test: /\.(jsx|js)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env","@babel/preset-react"]
                }
              }
          },
          {
            test: /\.css$/,
            //use: ["style-loader", "css-loader"]
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
      "template": path.resolve(__dirname, "public/index.html")
    }), new MiniCssExtractPlugin()]
};
