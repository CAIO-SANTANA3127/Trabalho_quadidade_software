// ***********************************************
// Comandos customizados do projeto
// ***********************************************

// Gera um e-mail único para evitar conflito de cadastro
Cypress.Commands.add('gerarEmail', () => {
  return cy.wrap(`aluno.${Date.now()}${Cypress._.random(100, 999)}@teste.com`)
})

// Cria uma conta via API do próprio site (pré-condição de alguns cenários)
Cypress.Commands.add('criarContaApi', (email) => {
  cy.fixture('usuario').then((u) => {
    cy.request({
      method: 'POST',
      url: '/api/createAccount',
      form: true,
      body: {
        name: u.nome,
        email,
        password: u.senha,
        title: u.titulo,
        birth_date: u.diaNascimento,
        birth_month: u.mesNascimento,
        birth_year: u.anoNascimento,
        firstname: u.primeiroNome,
        lastname: u.sobrenome,
        company: u.empresa,
        address1: u.endereco,
        address2: u.endereco2,
        country: u.pais,
        zipcode: u.cep,
        state: u.estado,
        city: u.cidade,
        mobile_number: u.celular
      }
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(JSON.stringify(resp.body)).to.include('User created!')
    })
  })
})

// Remove a conta via API (limpeza de massa de dados)
Cypress.Commands.add('excluirContaApi', (email) => {
  cy.fixture('usuario').then((u) => {
    cy.request({
      method: 'DELETE',
      url: '/api/deleteAccount',
      form: true,
      body: { email, password: u.senha },
      failOnStatusCode: false
    })
  })
})

// Acessa a home e valida que ela carregou
Cypress.Commands.add('acessarHome', () => {
  cy.visit('/')
  cy.title().should('eq', 'Automation Exercise')
  cy.get('#slider-carousel').should('be.visible')
})

// Abre a tela "Signup / Login" pelo menu
Cypress.Commands.add('acessarLogin', () => {
  cy.get('.shop-menu a[href="/login"]').click()
})

// Realiza login pela tela
Cypress.Commands.add('login', (email, senha) => {
  cy.get('[data-qa="login-email"]').clear().type(email)
  cy.get('[data-qa="login-password"]').clear().type(senha, { log: false })
  cy.get('[data-qa="login-button"]').click()
})
