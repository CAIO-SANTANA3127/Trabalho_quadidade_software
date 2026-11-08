/// <reference types="cypress" />

// Test Case 6: Contact Us Form
describe('Test Case 6: Contact Us Form', () => {
  it('Deve enviar o formulário de contato com arquivo anexo', () => {
    cy.acessarHome()
    cy.get('.shop-menu a[href="/contact_us"]').click()

    cy.contains('h2', 'Get In Touch').should('be.visible')
    cy.get('[data-qa="name"]').type('Aluno Teste')
    cy.get('[data-qa="email"]').type('aluno.contato@teste.com')
    cy.get('[data-qa="subject"]').type('Trabalho Final Cypress')
    cy.get('[data-qa="message"]').type('Mensagem enviada pela automação de testes com Cypress.')
    cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/arquivo-teste.txt')

    // O site abre um confirm(); confirmamos clicando em "OK"
    cy.on('window:confirm', (texto) => {
      expect(texto).to.eq('Press OK to proceed!')
      return true
    })
    cy.get('[data-qa="submit-button"]').click()

    cy.get('.status.alert-success').should('be.visible')
      .and('contain', 'Success! Your details have been submitted successfully.')

    cy.get('#form-section a.btn-success').click()
    cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
    cy.get('#slider-carousel').should('be.visible')
  })
})
