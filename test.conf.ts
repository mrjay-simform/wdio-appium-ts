const parallelConfig = {
    user: 'jaypatel_Vd1K9b',
    key: 'B6xWLMiS4BYwB8z9K9Gn',
    hostname: 'hub.browserstack.com',
    capabilities: [
      {
        browserName: 'safari',
        'bstack:options': {
          deviceName: 'iPhone 11',
          osVersion: '14',
          deviceOrientation: 'portrait'
        }
      },
      {
        browserName: 'safari',
        'bstack:options': {
          deviceName: 'iPhone 12',
          osVersion: '17',
          deviceOrientation: 'portrait'
        }
      },
      {
        browserName: 'safari',
        'bstack:options': {
          deviceName: 'iPhone 13',
          osVersion: '15',
          deviceOrientation: 'portrait'
        }
      }
    ],
    commonCapabilities: {
      'bstack:options': {
        buildName: 'browserstack-build-1'
      }
    },
    maxInstances: 10
  };
  const { config: baseConfig } = require('./base.conf.js');
  exports.config = { ...baseConfig, ...parallelConfig };
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
  });