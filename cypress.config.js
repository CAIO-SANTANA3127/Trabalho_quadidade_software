const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // O projeto não usa Cypress.env(); desativar remove o aviso de segurança do Cypress 15
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    // O site é externo e às vezes lento: no modo headless (cypress run) um teste
    // que falhar é repetido até 2 vezes antes de ser considerado falho
    retries: { runMode: 2, openMode: 0 },
    video: false,
    screenshotOnRunFailure: true,
    // Bloqueia os anúncios do site, que causam lentidão e pop-ups (vinheta do Google)
    blockHosts: [
      '*googlesyndication.com',
      '*doubleclick.net',
      '*googleadservices.com',
      '*google-analytics.com',
      '*googletagmanager.com',
      '*fundingchoicesmessages.google.com',
      '*adservice.google.com'
    ]
  }
})
