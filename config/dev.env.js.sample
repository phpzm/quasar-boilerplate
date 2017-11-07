var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: {
    PROTOCOL: '"http"',
    DOMAIN: '"localhost"',
    PATH: '"/api/v1"',
    PORT: '"3000"'
  },
  DEV: true
})
