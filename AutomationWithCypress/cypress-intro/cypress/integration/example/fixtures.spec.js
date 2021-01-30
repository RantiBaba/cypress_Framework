describe('using fixtures static data in our tests', () => {
  beforeEach('should navigate to login page', () => {
    cy.visit('/CourseManagementSystem')
    cy.get('a').contains('Log in').click()
  })

  it('should login with valid user', () => {
    cy.fixture('user').then(user => {
      const email = user.email
      const password = user.password
      cy.login(email, password)
      cy.get('li').should('contain.text', email)
    })
  })

  it('should login with invalid email', () => {
    cy.fixture('user').then(user => {
      const email = user.invalidEmail
      const password = user.password
      cy.login(email, password)
      cy.get('li').should('contain.text', 'Invalid login attempt.')
    })
  })

  it('should login with invalid password', () => {
    cy.fixture('user').then(user => {
      const email = user.email
      const password = user.invalidPassword
      cy.login(email, password)
      //login(email, password)
      cy.get('li').should('contain.text', 'Invalid login attempt.')
    })
  })
})
