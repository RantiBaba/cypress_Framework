describe.skip('Should validate jsonDb application requests', () => {
	let newId = ''
	it('should verify GET Method', () => {
		cy.request('http://localhost:3000/posts').as('posts')
		cy.get('@posts').its('status').should('equal', 200)
	})

	it('should CREATE(POST)a new record in DbApp', () => {
		cy.request({
			method: 'POST',
			url: 'http://localhost:3000/posts',
			body: {
				id: 15,
				title: 'You Only Live Twice',
				author: 'Ian Fleming',
			},
		}).then(function (response) {
			const res = response.body
			newId = res.id
			expect(res.id).eql(newId)
			expect(res.title).equal('You Only Live Twice')
			expect(res.author).equal('Ian Fleming')
		})
	})

	it('should UPDATE(PUT) created record in DbApp', () => {
		cy.request({
			method: 'PUT',
			url: 'http://localhost:3000/posts/' + newId,
			body: {
				id: newId,
				title: 'Casino Royale',
				author: 'Ian Fleming',
			},
		}).then(function (response) {
			const res = response.body
			expect(response.isOkStatusCode)
			expect(res.title).equal('Casino Royale')
		})
	})

	it('should update a field(PATCH) in a record', () => {
		cy.request({
			method: 'PATCH',
			url: 'http://localhost:3000/posts/' + newId,
			body: {
				id: newId,
				author: 'John Escott',
			},
		}).then(function (response) {
			const res = response.body
			expect(res.id).equal(newId)
			expect(res.author).equal('John Escott')
		})
	})

	it('should DELETE a record', () => {
		cy.request({
			method: 'DELETE',
			url: 'http://localhost:3000/posts/' + newId,
		}).then(function (response) {
			expect(response.isOkStatusCode)
		})
	})
})
