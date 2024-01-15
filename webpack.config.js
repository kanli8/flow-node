// webpack.config.js
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');
module.exports = {
  // 其他配置...
  entry: "./server.ts", // 指定入口文件为 server.ts
  target: "node", // 指定目标为 Node.js 环境
  output: {
    filename: "bundle.js", // 输出的文件名
    path: path.resolve(__dirname, "dist"), // 输出的目录
  },
  resolve: {
    extensions: [".ts", ".js"], // 解析的文件扩展名
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        /* 这里添加混淆配置 */
        compress: {
            drop_console: true, // 去除 console.log
          }
      }),
    ],
  },
};