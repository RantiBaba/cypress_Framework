describe('basic tests for task management system', () => {
  it('should visit managment system', () => {
    cy.visit('http://localhost/CourseManagementSystem')
    cy.url().should('include', '/CourseManagementSystem')
    cy.wait(5000)
  })

  it('should see a text on the page', () => {
    cy.get('a').should('contain.text', 'Course Management System')
  })
})
