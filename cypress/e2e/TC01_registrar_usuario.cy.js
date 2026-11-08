/// <reference types="cypress" />

// Test Case 1: Register User
describe('Test Case 1: Register User', () => {
  it('Deve registrar um novo usuário e excluir a conta', () => {
    cy.gerarEmail().then((email) => {
      cy.fixture('usuario').then((u) => {
        cy.acessarHome()
        cy.acessarLogin()

        cy.contains('h2', 'New User Signup!').should('be.visible')
        cy.get('[data-qa="signup-name"]').type(u.nome)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()

        cy.contains('b', 'Enter Account Information').should('be.visible')
        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type(u.senha, { log: false })
        cy.get('[data-qa="days"]').select(u.diaNascimento)
        cy.get('[data-qa="months"]').select(u.mesNascimento)
        cy.get('[data-qa="years"]').select(u.anoNascimento)
        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('[data-qa="first_name"]').type(u.primeiroNome)
        cy.get('[data-qa="last_name"]').type(u.sobrenome)
        cy.get('[data-qa="company"]').type(u.empresa)
        cy.get('[data-qa="address"]').type(u.endereco)
        cy.get('[data-qa="address2"]').type(u.endereco2)
        cy.get('[data-qa="country"]').select(u.pais)
        cy.get('[data-qa="state"]').type(u.estado)
        cy.get('[data-qa="city"]').type(u.cidade)
        cy.get('[data-qa="zipcode"]').type(u.cep)
        cy.get('[data-qa="mobile_number"]').type(u.celular)
        cy.get('[data-qa="create-account"]').click()

        cy.get('[data-qa="account-created"]').should('be.visible')
          .and('contain', 'Account Created!')
        cy.get('[data-qa="continue-button"]').click()

        cy.contains('Logged in as').should('be.visible').and('contain', u.nome)

        cy.get('.shop-menu a[href="/delete_account"]').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible')
          .and('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
      })
    })
  })
})
