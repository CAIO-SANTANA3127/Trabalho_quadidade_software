/// <reference types="cypress" />

// Test Case 8: Verify All Products and product detail page
describe('Test Case 8: Verify All Products and product detail page', () => {
  it('Deve listar os produtos e exibir os detalhes do primeiro', () => {
    cy.acessarHome()
    cy.get('.shop-menu a[href="/products"]').click()

    cy.url().should('include', '/products')
    cy.contains('h2.title', 'All Products').should('be.visible')
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)

    cy.get('a[href="/product_details/1"]').click()
    cy.url().should('include', '/product_details/1')

    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible').and('not.be.empty')
      cy.contains('p', 'Category:').should('be.visible')
      cy.contains('span', 'Rs.').should('be.visible')
      cy.contains('p', 'Availability:').should('be.visible')
      cy.contains('p', 'Condition:').should('be.visible')
      cy.contains('p', 'Brand:').should('be.visible')
    })
  })
})
