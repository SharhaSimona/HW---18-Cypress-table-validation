
describe('HTTP Requests', () => {


    it('GET Call', () => {
        
    cy.request('GET', 'https://dev.omni-dispatch.com/api/v1/owners/10987/coordinators?')
        .its('statuds')
        .should('equal', 200);
    })
})
