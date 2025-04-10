import {defineConfig} from 'cypress'

export default defineConfig({
    // not scrolling down automaticaly so it's requires to set size of the page for the test
    viewportHeight: 2000,
    viewportWidth: 1920,
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        // Configure your E2E tests here
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
        //not allow to reload page in stream ------
        // watchForFileChanges: false
    },
    env: {
        "fullName": "Peter Clown",
        "email": "none@none.none"
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
        charts: true,
        reportPageTitle: 'My custom Report',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
    retries: {
        runMode: 0,
        openMode: 2,
    },
})