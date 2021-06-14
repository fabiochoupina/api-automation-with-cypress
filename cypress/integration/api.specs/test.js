
describe('Users', () => {

    const USERS_LIST_ENDPOINT = '/users'
    const CREATE_USER_ENDPOINT = '/user'

    it('returns the users list', () => {
        cy.request(USERS_LIST_ENDPOINT)
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
    });

    it('creates a user - passing test', () => {
        cy.api( {
            method : 'POST',
            url : CREATE_USER_ENDPOINT,
            body : {
                "name" : "Fabio",
                "job" : "Test Engineer",
            }
        })
        .then(function(response) {
            expect(response).to.have.property('status', 201)
            expect(response.body).to.have.property('name', "Fabio")
        })
    });
    
    it('creates a user - failing test', () => {
        cy.api( {
            method : 'POST',
            url : CREATE_USER_ENDPOINT,
            body : {
                "name" : "Fabio",
                "job" : "Test Engineer",
            }
        })
        .then(function(response) {
            expect(response).to.have.property('status', 201)
            expect(response.body).to.have.property('name', "Fabio123")
        })
    });

});
