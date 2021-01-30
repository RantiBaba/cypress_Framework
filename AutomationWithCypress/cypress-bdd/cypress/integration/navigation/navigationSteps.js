import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../pages/homePage'

Given('I am on the nba stats page', () => {
	HomePage.visit()
})

When('I click the {string} menu', (menu) => {
	HomePage.selectMenu(menu)
})

Then('I should see overall information for all teams', () => {
	cy.url().should('include', '/standings')
	cy.title().should('include', 'NBA Regular Season Standings | NBA.com')
})

When('I search and select for a {string}', (player) => {
	HomePage.searchForTeamOrPlayers(player)
	cy.get('a').contains(player).should('be.visible')
	HomePage.clickOnRenderedResult(player)
})

Then('I should be directed to the players {string}', (page) => {
	cy.title().should('include', page)
	//check the players name is displayed
	const space = page.indexOf(' ')
	const firstName = page.substr(0, space)
	const lastName = page.substr(space + 1)
	cy.get('p').should('contain.text', firstName)
	cy.get('p').should('contain.text', lastName)
})
