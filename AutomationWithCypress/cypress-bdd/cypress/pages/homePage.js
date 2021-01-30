const homePageUrl = 'https://stats.nba.com/'

class HomePage {
	static visit() {
		Cypress.on('uncaught:exception', () => {
			return false
		})

		cy.visit(homePageUrl)
		cy.viewport(1152, 864)
	}

	static selectMenu(menu) {
		cy.get('a').contains(menu).click()
	}

	// this is just a sample of integrating data
	// from fixtures into cucumber test
	// static login(){
	// 	cy.filter('user', user => {
	// 		const email = user.email
	// 		const password = user.password

	// 	})
	// }

	static searchForTeamOrPlayers(searchText) {
		cy.get('span').contains('Search For A Player or Team').type(searchText)
	}

	static clickOnRenderedResult(searchResult) {
		cy.get('a').contains(searchResult).click()
	}

}
export default HomePage
