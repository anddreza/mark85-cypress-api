describe('POST /sessions', () => {
    it('user session', ()=>{
        const user = {
            email: 'andreza@gmail.com',
            password: '123456'
        }

        cy.postSession(user)
            .then(response => {
                expect(response.status).to.eq(200)
            })
    })  
})

Cypress.Commands.add('postSession', (user) => {
      cy.api({
            url: '/sessions',
            method: 'POST',
            body: user
        })
})