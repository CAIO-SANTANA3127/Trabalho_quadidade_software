/// <reference types="cypress" />

// Test Case 9: Search Product
describe('Test Case 9: Search Product', () => {
  const termo = 'Jeans'

  it('Deve buscar um produto e exibir resultados relacionados', () => {
    cy.acessarHome()
    cy.get('.shop-menu a[href="/products"]').click()

    cy.contains('h2.title', 'All Products').should('be.visible')
    cy.get('#search_product').type(termo)
    cy.get('#submit_search').click()

    cy.contains('h2.title', 'Searched Products').should('be.visible')
    cy.get('.features_items .productinfo p')
      .should('have.length.greaterThan', 0)
      .each(($nome) => {
        expect($nome.text().toLowerCase()).to.include(termo.toLowerCase())
      })
  })
})
