module.exports = {
  pwa: {
    name: 'HTML Color Codes',
    themeColor: '#DAF0EE',
    msTileColor: '#DAF0EE',
    mobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    start_url: '.',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
     workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    }
  }
}