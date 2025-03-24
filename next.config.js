const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    // other next config
    pwa: {
        dest: 'public',
        runtimeCaching,
      },
  })