const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,
    host: "0.0.0.0",
    historyApiFallback: true,
    allowedHosts: "all",
    port: 5002,
    https: false,
    client: {
      overlay: false,
    },
    proxy: {
      "/api": {
        target: "http://localhost:10001",
        changeOrigin: true,
        pathRewrite: {
          // 重写路径
          "^/api": "", // 把/api变为空字符
        },
      },
    },
  },
});
