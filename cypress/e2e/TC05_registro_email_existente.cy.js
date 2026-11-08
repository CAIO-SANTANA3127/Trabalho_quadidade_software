/// <reference types="cypress" />

// Test Case 5: Register User with existing email
describe('Test Case 5: Register User with existing email', () => {
  let email

  beforeEach(() => {
    cy.gerarEmail().then((e) => {
      email = e
      cy.criarContaApi(email)
    })
  })

  afterEach(() => {
    cy.excluirContaApi(email)
  })

  it('Deve exibir erro ao cadastrar e-mail já existente', () => {
    cy.fixture('usuario').then((u) => {
      cy.acessarHome()
      cy.acessarLogin()

      cy.contains('h2', 'New User Signup!').should('be.visible')
      cy.get('[data-qa="signup-name"]').type(u.nome)
      cy.get('[data-qa="signup-email"]').type(email)
      cy.get('[data-qa="signup-button"]').click()

      cy.contains('p', 'Email Address already exist!').should('be.visible')
    })
  })
})
