// Arquivo carregado automaticamente antes de cada spec
import './commands'

// O site carrega scripts de terceiros (anúncios) que podem lançar erros.
// Ignoramos esses erros para que não quebrem os testes.
Cypress.on('uncaught:exception', () => false)
