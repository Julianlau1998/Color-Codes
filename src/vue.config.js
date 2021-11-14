module.exports = {
  pwa: {
    name: 'HTML Color Codes',
    themeColor: '#DAF0EE',
    msTileColor: '#DAF0EE',
    backgroundColor: '#DAF0EE',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
  },
  workboxPluginMode: 'InjectManifest',
     workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    }
}
