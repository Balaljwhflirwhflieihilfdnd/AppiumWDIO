exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'balamurugan_UXImYz',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'yYQPTztZ8eirzdknWJq5',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Samsung Galaxy S20',
    os_version: "10",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://3f3d42a4956b3bb17e0b873c49795bfc9e014ee0',
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
