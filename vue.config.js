module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/utils/sass/index.scss";`
      }
    }
  }
}
