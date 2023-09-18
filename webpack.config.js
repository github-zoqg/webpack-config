const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  performance: {
    hints: "warning", // 枚举 false关闭
    maxEntrypointSize: 100000000, // 最大入口文件大小
    maxAssetSize: 100000000, // 最大资源文件大小
    assetFilter: function (assetFilename) {
      //只给出js文件的性能提示
      return assetFilename.endsWith(".js");
    },
  },
  mode: "production",
  entry: {
    index123: "./src/index.js",
  },
  output: {
    filename: "static/js/[name].[hash:8].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
    // 单独打包css文件
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[hash:8].css",
    }),
    // 压缩打包后css文件
    new OptimizeCSSAssetsPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    moduleIds: "deterministic",
    runtimeChunk: "single",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /my-loader-test-file\.js/,
        use: [
          {
            loader: "./loaders/my-loader.js",
            options: {
              name: 1,
            },
          },
        ],
      },
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: '../'
            },
          },
          // style-loader与minicssextractplugin冲突只能留存一个
          // "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: "asset/resource",
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              fallback: {
                loader: "file-loader",
                options: {
                  esModule: false, //file-loader默认使用es6模块解析，如果使用es6的模块解析，html中图片的路径会不对，关闭es6模块解析开启commonjs模块解析
                  name: "static/img/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
        //这个属性如果没有设置，则会生成两张图片(如果你的页面只引入了一张图片)
        type: "javascript/auto",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "javascript/auto",
        use: [
          {
            // loader: "url-loader",
            // options: {
            //   limit: 8 * 1024,
            //   fallback: {
            loader: "file-loader",
            options: {
              esModule: false, //file-loader默认使用es6模块解析，如果使用es6的模块解析，html中图片的路径会不对，关闭es6模块解析开启commonjs模块解析
              name: "static/fonts/[name].[hash:8].[ext]",
            },
            //   },
            // },
          },
        ],
        // generator: {
        //     publicPath: path.resolve(__dirname, 'dist'),
        //     outputPath: 'static/fonts/',
        // },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader:
              "E:\\workSpace\\middle-platform\\node_modules\\url-loader\\dist\\cjs.js",
            options: {
              limit: 4 * 1024,
              fallback: {
                loader:
                  "E:\\workSpace\\middle-platform\\node_modules\\file-loader\\dist\\cjs.js",
                options: {
                  name: "static/media/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
    ],
  },
};
