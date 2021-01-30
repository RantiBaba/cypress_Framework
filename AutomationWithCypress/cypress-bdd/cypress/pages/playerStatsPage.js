const traditionalUrl = 'https://stats.nba.com/players/traditional/'

class PlayerStatsPage {
	static visit() {
		Cypress.on('uncaught:exception', () => {
			return false
		})
		cy.visit(traditionalUrl)
		cy.viewport(1152, 864)
	}

	static selectAdvancedFilters() {
		cy.get('a').contains('Advanced Filters').click()
	}

	static selectMainTeam(team) {
        cy.xpath('//select[@name="TeamID"]').select(team)
    }

	static selectVsOponent(team) {
		cy.xpath('//select[@name="OpponentTeamID"]').select(team)
	}

	static clickRunItButton() {
		cy.get('a').contains('Run It').scrollIntoView()
		cy.get('a').contains('Run It').click()
	}
}
export default PlayerStatsPage
