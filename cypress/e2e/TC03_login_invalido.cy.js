/// <reference types="cypress" />

// Test Case 3: Login User with incorrect email and password
describe('Test Case 3: Login User with incorrect email and password', () => {
  it('Deve exibir erro ao logar com credenciais inválidas', () => {
    cy.acessarHome()
    cy.acessarLogin()

    cy.contains('h2', 'Login to your account').should('be.visible')
    cy.login('usuario.inexistente@teste.com', 'senhaErrada123')

    cy.contains('p', 'Your email or password is incorrect!').should('be.visible')
  })
})
