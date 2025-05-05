const { defineConfig } = require("cypress");

const cucumber = require("@badeball/cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Parabank Testing Reports",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true,
    csv: true,
    timestamp: "mmddyyyy_HHMMss"
  },

  e2e: {
    specPattern: [
      "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
      // "cypress/e2e/features/**/*.feature"
    ],
    // stepDefinitions: "cypress/e2e/step_definitions/**/*.js",
    screenshotOnRunFailure: true, 
    video: true,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  }
});