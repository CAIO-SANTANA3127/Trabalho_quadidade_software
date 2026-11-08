# Trabalho Final – Automação de Testes com Cypress

Trabalho da disciplina de **Qualidade de Software**.

Automação de **10 cenários de teste** do site [Automation Exercise](https://www.automationexercise.com/test_cases) utilizando o framework **Cypress**.

## Integrantes

- Caio de Santana Pereira
- Diego Stoqui

## Cenários automatizados

| Nº | Cenário (Test Case do site) | Arquivo |
|----|-----------------------------|---------|
| 1  | Test Case 1: Register User | `cypress/e2e/TC01_registrar_usuario.cy.js` |
| 2  | Test Case 2: Login User with correct email and password | `cypress/e2e/TC02_login_valido.cy.js` |
| 3  | Test Case 3: Login User with incorrect email and password | `cypress/e2e/TC03_login_invalido.cy.js` |
| 4  | Test Case 4: Logout User | `cypress/e2e/TC04_logout.cy.js` |
| 5  | Test Case 5: Register User with existing email | `cypress/e2e/TC05_registro_email_existente.cy.js` |
| 6  | Test Case 6: Contact Us Form | `cypress/e2e/TC06_formulario_contato.cy.js` |
| 7  | Test Case 7: Verify Test Cases Page | `cypress/e2e/TC07_pagina_test_cases.cy.js` |
| 8  | Test Case 8: Verify All Products and product detail page | `cypress/e2e/TC08_produtos_e_detalhe.cy.js` |
| 9  | Test Case 9: Search Product | `cypress/e2e/TC09_buscar_produto.cy.js` |
| 10 | Test Case 10: Verify Subscription in home page | `cypress/e2e/TC10_inscricao_home.cy.js` |

## Estrutura do projeto

```
cypress-automationexercise/
├── cypress/
│   ├── e2e/                 # Specs – um arquivo por cenário
│   ├── fixtures/            # Massa de dados (usuario.json) e arquivo de upload
│   └── support/
│       ├── commands.js      # Comandos customizados (login, criar/excluir conta via API...)
│       └── e2e.js           # Configurações globais carregadas antes dos testes
├── cypress.config.js        # Configuração do Cypress (baseUrl, viewport, timeouts)
├── package.json
└── README.md
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- Google Chrome (ou outro navegador suportado pelo Cypress)

## Como executar

```bash
# 1. Instalar as dependências
npm install

# 2. Abrir a interface do Cypress (modo interativo)
npm run cy:open

# 3. Ou executar todos os testes em modo headless
npm run cy:run
```

Para executar apenas um cenário:

```bash
npx cypress run --spec cypress/e2e/TC03_login_invalido.cy.js
```

## Observações

- Cada execução gera um e-mail único, então os testes podem ser rodados várias vezes sem conflito de cadastro.
- Nos cenários que exigem um usuário já existente (TC02, TC04 e TC05), a conta é criada via API do próprio site (`/api/createAccount`) e removida ao final (`/api/deleteAccount`).
- Os domínios de anúncios do site são bloqueados em `cypress.config.js` para evitar pop-ups e lentidão.
