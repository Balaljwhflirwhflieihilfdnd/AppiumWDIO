exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'balamurugan_UXImYz',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'yYQPTztZ8eirzdknWJq5',

  updateJob: false,
  specs: [
    './examples/run-multiple-test/specs/multiple_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android Multiple',
    name: 'multiple_test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://<hashed app-id>',
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000
  }
};
