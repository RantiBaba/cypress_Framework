describe('interact with elements in page', () => {
  it('should click on students link', () => {
    cy.visit('http://localhost/CourseManagementSystem')
    cy.url().should('include', '/CourseManagementSystem')

    cy.get('a').contains('Students').click()
    cy.get('h2').should('contain', 'Students')
  })
})
