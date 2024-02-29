exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'balamurugan_UXImYz',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'yYQPTztZ8eirzdknWJq5',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio iOS Project",
    build: 'Webdriverio iOS',
    name: 'single_test',
    device: 'iPhone 11 Pro',
    os_version: "13",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://040c467af7af3d02165ffe7368d3d9139a5c5499',
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
    timeout: 60000
  }
};
