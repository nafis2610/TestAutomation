const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  
  
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      config.specPattern = [
        'cypress/e2e/Login.cy.js',
        'cypress/e2e/PurchasesProducts.cy.js',
        'cypress/e2e/SortstProduct.cy.js'
      ]
      return config;
    },
  },
});
