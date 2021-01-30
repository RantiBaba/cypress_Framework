describe('illustrating viewport object for simulation', () => {
  it('run with IPhone X', () => {
    cy.visit('http://localhost/CourseManagementSystem/')
    cy.viewport('iphone-x')
    cy.get('a').contains('Students').click()
    cy.get('h2').should('contain', 'Students')
  })

  it('run with Samsung S-10', () => {
    cy.visit('http://localhost/CourseManagementSystem/')
    cy.viewport('samsung-s10')
    cy.get('a').contains('Students').click()
    cy.get('h2').should('contain', 'Students')
  })
})
