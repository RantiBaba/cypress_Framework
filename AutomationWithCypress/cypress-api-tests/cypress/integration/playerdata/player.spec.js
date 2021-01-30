describe('validate player resource endpoint', () => {
	it('should access players information with valid user', () => {
		cy.request({
			url: '/44',
			headers: { 'X-Auth-Token': '4d277f3e84d04f49be6a3cf075d133c7' },
			method: 'GET',
		}).then(function (response) {
			expect(response.isOkStatusCode)
			expect(response.body.name).to.equal('Cristiano Ronaldo')
			expect(response.body.position).to.eql('Attacker')
		})
	})

	it('should not get player details with a bad request', () => {
		cy.request({
			url: '/x',
			headers: { 'X-Auth-Token': '4d277f3e84d04f49be6a3cf075d133c7' },
			method: 'GET',
			failOnStatusCode: false,
		}).then(function (response) {
			const res = response.body
			expect(res.message).eql(
				`Parameter 'id' is expected to be an integer in a specified range.`
			)
			expect(res.errorCode).to.eql(400)
		})
	})

	it('should not get player details with invalid authorization', () => {
		cy.request({
			method: 'GET',
			url: '/44',
			headers: { 'X-Auth-Token': 'AA4d277f3e84d3304ff075dAA' },
			failOnStatusCode: false,
		}).then(function (response) {
			expect(response.statusText).eql('Bad Request')
			expect(response.body.message).eql(`Your API token is invalid.`)
			expect(response.status).to.eql(400)
		})
	})

	it('should not get player details without authorization', () => {
		cy.request({
			method: 'GET',
			url: '/44',
			failOnStatusCode: false,
		}).then(function (response) {
			expect(response.body.message).eql(
				`The resource you are looking for is restricted. Please pass a valid API token and check your subscription for permission.`
			)
			expect(response.status).to.eql(403)
		})
	})
})
