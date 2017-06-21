'use-strict';

module.exports = {
  api: {
    menu: './src/api/menu.json'
  },
  paths: {
    app: './dist/',
    src: {
      main: './src/',
      scss: {
        styles: './src/sass/styles/',
        vendor: './src/sass/vendor/',
      },
      js: './src/js/'
    },
    dist: {
      css: './dist/css',
      js: './dist/js'
    }
  },
  server: {
    port: 8080,
    host: 'localhost',
    path: 'dist'
  }
};
