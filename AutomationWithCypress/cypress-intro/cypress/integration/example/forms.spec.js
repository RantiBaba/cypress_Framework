describe('', () => {
  it('should create a student record', () => {
    cy.visit('/CourseManagementSystem/Student')
    let firstName = createRandomString(5)
    let familyName = createRandomString(12)
    createStudentRecord(firstName, familyName)
    cy.get('div.container.body-content > table > tbody > tr')
      .last()
      .should('contain.text', familyName)
  })

  it('should edit a student record', () => {
    cy.visit('/CourseManagementSystem/Student')
    let firstName = createRandomString(5)
    let familyName = createRandomString(12)
    let newFirstName = createRandomString(10)
    let newLastName = createRandomString(15)
    createStudentRecord(firstName, familyName)
    cy.get('div.container.body-content > table > tbody > tr')
      .last()
      .should('contain.text', familyName)

    editStudentRecord(newFirstName, newLastName)
    cy.get('div.container.body-content > table > tbody > tr')
      .eq(1)
      .should('contain.text', newLastName)
  })

  function createRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var word = ''
    for (var i = 0; i < length; i++) {
      word += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return word
  }

  function createStudentRecord(firstName, familyName) {
    cy.get('a').contains('Create New').click()

    //get family name element and set an alias and enter test name
    cy.get('#LastName').as('familyName')
    cy.get('@familyName').clear()
    cy.get('@familyName').type(familyName)

    //get family name element and set an alias and enter test name
    cy.get('#FirstName').as('firstName')
    cy.get('#FirstName').clear()
    cy.get('@firstName').type(firstName)

    //sets enrollment date with todays date
    const todaysDate = Cypress.moment().format('YYYY-MM-DDThh:mm')
    cy.get('#EnrollmentDate').type(todaysDate)

    //clicks on create button
    cy.get('input.btn.btn-default').contains('Create').click()
  }

  function editStudentRecord(newFirstName, newLastName) {
    //getting the last record in the table to edit
    let row = cy.get('div.container.body-content > table > tbody > tr').last()
    row.scrollIntoView()
    let edit = row.get('a').contains('Edit')
    edit.click()

    //changing fields firstname and family name
    cy.get('#LastName').clear()
    cy.get('#LastName').type(newLastName)
    cy.get('#FirstName').clear()
    cy.get('#FirstName').type(newFirstName)

    //enrollment date change
    const todaysDate = Cypress.moment().format('YYYY-MM-DDThh:mm')
    cy.get('#EnrollmentDate').clear()
    cy.get('#EnrollmentDate').type(todaysDate)

    //save update
    let saveButton = cy.get('input.btn.btn-default').contains('Save')
    saveButton.scrollIntoView()
    saveButton.click()
  }
})
