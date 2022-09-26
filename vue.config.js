module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/a_variable.scss"`
      }
    }
  }
}
