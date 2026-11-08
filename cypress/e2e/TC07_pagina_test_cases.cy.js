/// <reference types="cypress" />

// Test Case 7: Verify Test Cases Page
describe('Test Case 7: Verify Test Cases Page', () => {
  it('Deve navegar até a página de Test Cases', () => {
    cy.acessarHome()
    cy.get('.shop-menu a[href="/test_cases"]').click()

    cy.url().should('include', '/test_cases')
    cy.contains('h2 b', 'Test Cases').should('be.visible')
  })
})
