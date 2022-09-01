const server = require('./server/server.js')

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:\\Workspace\\builders\\challenge-qa.apk',
      desiredCapabilities: {
        appPackage: 'io.platformbuilders.challenge.qa',
        appActivity: 'host.exp.exponent.MainActivity',
        deviceName: 'Pixel2',
        platformVersion: '10.0'
      }
    }
  },
  include: {
    registration_page: './pages/registration_page.js',
    common_page: './pages/common_page.js',
    full_name_page: './pages/full_name_page.js',
    home_page: './pages/home_page.js',
    home_login_page: './pages/home_login_page.js',
    I: './steps_file.js',
    localization_page: './pages/localization_page.js',
    phone_page: './pages/phone_page.js'
  },
  mocha: {},
  // adding bootstrap/teardown
  async bootstrap() {
    await server.launch();
  },
  async teardown() {
    await server.stop();
  },
  timeout: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'desafioTecnico',
  tests: './steps/*_test.js'
}