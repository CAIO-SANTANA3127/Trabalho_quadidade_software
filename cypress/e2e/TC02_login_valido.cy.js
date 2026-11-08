/// <reference types="cypress" />

// Test Case 2: Login User with correct email and password
describe('Test Case 2: Login User with correct email and password', () => {
  let email

  beforeEach(() => {
    // Pré-condição: usuário existente (criado via API)
    cy.gerarEmail().then((e) => {
      email = e
      cy.criarContaApi(email)
    })
  })

  it('Deve logar com credenciais válidas e excluir a conta', () => {
    cy.fixture('usuario').then((u) => {
      cy.acessarHome()
      cy.acessarLogin()

      cy.contains('h2', 'Login to your account').should('be.visible')
      cy.login(email, u.senha)

      cy.contains('Logged in as').should('be.visible').and('contain', u.nome)

      cy.get('.shop-menu a[href="/delete_account"]').click()
      cy.get('[data-qa="account-deleted"]').should('be.visible')
        .and('contain', 'Account Deleted!')
    })
  })
})
