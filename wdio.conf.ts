export const config = {

    runner: "local",
    specs: [
        "./features/*.feature"
    ],
    capabilities: [{
        browserName: 'chrome'
    }

    ],
    autoCompileOpts: {
        autoCompile: true,
        // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },

    },
    framework: 'cucumber',
    reporter: 'dot',
    services: ['chromedriver'],
    cucumberOpts: {

        require: [
            './steps/*-steps.ts',
            // Or search a (sub)folder for JS files with a wildcard
            // works since version 1.1 of the wdio-cucumber-framework
            // './src/**/*.js',
        ],
        tagExpression: 'not @Pending',
        tagsInTitle: false,
        timeout: 70000,
    } as WebdriverIO.CucumberOpts,

    // wdio.conf.js
    before: () => {
        var chai = require('chai');
        global.expect = chai.expect;
    },

    after: function (result) {
        if (result === 1) {
            browser.debug()
        }
    },

    reporters: [['allure', {
        outputDir: 'reports/allure',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

}