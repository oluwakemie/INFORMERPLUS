const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for generating html report
  reporterOptions: {
    reportDir: "cypress/reports/html", // Ensure this directory is used
    html: true, // This ensures HTML generation
    json: true,
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  screenshotsFolder: "cypress/screenshots", // ✅ Ensure screenshots are stored
  video: true,
  e2e: {
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    viewportWidth: 1640,
    viewportHeight: 1200,
    watchForFileChanges: true,
    // video: true, // Enable video recording
    videoCompression: 32, // Reduce file size (optional)
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,
  //save this pls
    "retries": {
      "runMode": 2,   // Retries failed tests twice in normal runs
      "openMode": 1  // Retries failed tests once in Cypress UI
    },


    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
    },
  },


});


