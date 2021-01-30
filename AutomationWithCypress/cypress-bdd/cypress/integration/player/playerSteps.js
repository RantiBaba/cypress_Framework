import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import PlayerStatsPage from '../../pages/playerStatsPage'

Given('I am on the traditional page for players', () => {
	PlayerStatsPage.visit()
})

When('I filter teams to {string} and {string}', (teamA, teamB) => {
	PlayerStatsPage.selectAdvancedFilters()
	PlayerStatsPage.selectMainTeam(teamA)
	PlayerStatsPage.selectVsOponent(teamB)
	PlayerStatsPage.clickRunItButton()
})

Then('It should filter to {string} and {string}', (teamA, teamB) => {
	cy.get('span.stats-filter-pill__text').eq(0).should('contain.text', teamA)
	cy.get('span.stats-filter-pill__text').eq(1).should('contain.text', teamB)
})
