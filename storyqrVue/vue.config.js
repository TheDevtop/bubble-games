const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/whatavue', // Define the publicPath here
  devServer: {
    proxy: {
      '^/stories': {
        target: 'https://145.220.74.171:8082/database/',
        ws: true,
        changeOrigin: true
      },
      '^/types': {
        target: 'https://145.220.74.171:8082/database/',
        ws: true,
        changeOrigin: true
      }
    }
  }
});
