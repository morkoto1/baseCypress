const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 60000,
    chromeWebSecurity: false,
    pageLoadTimeout: 60000,
    requestTimeout: 90000,
    baseUrl: 'https://www.alza.cz',
    experimentalStudio: true,
  },
});



