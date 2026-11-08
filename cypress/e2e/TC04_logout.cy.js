/// <reference types="cypress" />

// Test Case 4: Logout User
describe('Test Case 4: Logout User', () => {
  let email

  beforeEach(() => {
    cy.gerarEmail().then((e) => {
      email = e
      cy.criarContaApi(email)
    })
  })

  afterEach(() => {
    // Limpeza: remove o usuário criado
    cy.excluirContaApi(email)
  })

  it('Deve fazer logout e voltar para a tela de login', () => {
    cy.fixture('usuario').then((u) => {
      cy.acessarHome()
      cy.acessarLogin()

      cy.contains('h2', 'Login to your account').should('be.visible')
      cy.login(email, u.senha)
      cy.contains('Logged in as').should('be.visible').and('contain', u.nome)

      cy.get('.shop-menu a[href="/logout"]').click()

      cy.url().should('include', '/login')
      cy.contains('h2', 'Login to your account').should('be.visible')
    })
  })
})
