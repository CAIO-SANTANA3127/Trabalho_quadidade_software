/// <reference types="cypress" />

// Test Case 10: Verify Subscription in home page
describe('Test Case 10: Verify Subscription in home page', () => {
  it('Deve se inscrever na newsletter pelo rodapé da home', () => {
    cy.acessarHome()
    cy.scrollTo('bottom')

    cy.get('footer').contains('h2', 'Subscription').should('be.visible')
    cy.get('#susbscribe_email').type('aluno.newsletter@teste.com')
    cy.get('#subscribe').click()

    cy.get('#success-subscribe').should('be.visible')
      .and('contain', 'You have been successfully subscribed!')
  })
})
