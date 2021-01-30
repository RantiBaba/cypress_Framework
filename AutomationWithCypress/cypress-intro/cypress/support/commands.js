Cypress.Commands.add('login', (email, password) => {
  cy.get('input#Email.form-control').as('email')
  cy.get('@email').clear()
  cy.get('@email').type(email)
  cy.get('input#Password.form-control').as('password')
  cy.get('@password').clear()
  cy.get('@password').type(password)
  cy.get('input.btn.btn-default').contains('Log in').click()
})
