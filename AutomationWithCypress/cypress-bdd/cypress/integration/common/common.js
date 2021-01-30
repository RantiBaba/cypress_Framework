import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} for milliseconds', (time) => {
	cy.wait(time)
})
