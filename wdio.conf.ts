import type { Options } from '@wdio/types'
// const path = require('path');
// const { join } = require('path');
export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './test/tsconfig.json',
            transpileOnly: true
        }
    },

    port: 4723,
    specs: [
        // './test/specs/**/*.ts',
        './test/specs/E2E/**/forms.e2e.ts'
        

    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '11',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.wdiodemoapp',
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:app': '/home/jay/Documents/Freetrade/wdio-appium-ts/app/android/NativeDemoApp.apk'
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}