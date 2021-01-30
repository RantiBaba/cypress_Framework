describe('handling selectors', () => {
  it('should be able to select from dropdown list', () => {
    //ignores uncaught exceptions
    Cypress.on('uncaught:exception', () => {
      return false
    })
    cy.visit('https://stats.nba.com/teams/traditional')

    //take screenshot of a full page
    cy.screenshot({ capture: 'fullPage' })
    cy.get('a').contains('Advanced Filters').click()

    //select a dropdown - ensure you have install cypress-xpath package
    //when working xpaths - also update index.js support file
    cy.xpath('//select[@name="TeamID"]').select('Los Angeles Lakers')

    //take screenshot of a specific element
    cy.get('a').contains('Privacy Policy').screenshot()
    cy.wait(5000)
  })
})
