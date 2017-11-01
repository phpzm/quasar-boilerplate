module.exports = {
  NODE_ENV: '"production"',
  LOCALE: '"pt_BR"',
  APP: {
    NAME: '"PHPZM Quasar Boilerplate"',
    DEVICE: '"appDevice"',
    TOKEN: '"appAuth"',
    USER: '"appUser"',
    REMEMBER: '"appRemember"',
  },
  API: {
    PROTOCOL: '"https"',
    DOMAIN: '"quasar.phpzm.rocks"',
    PATH: '"/api/v1"',
    PORT: '""'
  },
  OAUTH: {
    FACEBOOK: '""'
  },
  ROUTES: {
    LOGIN: {
      name: "'auth.login'"
    },
    HOME: {
      name: "'dashboard.home'"
    }
  },
  DEV: false
}
