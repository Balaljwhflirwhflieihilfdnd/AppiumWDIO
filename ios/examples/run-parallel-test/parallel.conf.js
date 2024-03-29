exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'balamurugan_UXImYz',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'yYQPTztZ8eirzdknWJq5',

  updateJob: false,
  specs: [
    './examples/run-parallel-test/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "First Webdriverio iOS Project",
    build: 'Webdriverio iOS Parallel',
    name: 'parallel_test',
    app: process.env.BROWSERSTACK_APP_ID || 'bs://040c467af7af3d02165ffe7368d3d9139a5c5499',
    'browserstack.debug': true
  },

  capabilities: [{
    device: "iPhone 11 Pro",
    os_version: "13"
  }, {
    device: "iPhone 11 Pro Max",
    os_version: "13"
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
    timeout: 40000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
