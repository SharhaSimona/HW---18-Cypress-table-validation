describe('HTTP Requests', () => {
    it('should login to the website and make a GET request', () => {
     cy.visit('https://dev.omni-dispatch.com/login');
   
     cy.fixture('loginData').then((data) => {
       cy.get('#email').type(data.email);
       cy.get('#password').type(data.password);
       cy.get('#submit').click();
     });
   
     // Wait for the login to complete and verify that user is logged in
     cy.wait(200);
     cy.url().should('eq', 'https://dev.omni-dispatch.com/dashboard');
   
     // Make a GET request to fetch truck information from the backend
     cy.request({
       method: 'GET',
       url: 'https://dev.omni-dispatch.com/fleets/trucks'
      }).then((response) => {
        // Assert that the response status code is successful (200)
        expect(response.status).to.eq(200);
   
        // Assert that the truck information is present in the response body
        expect(response.body.truckInfo).to.exist;
      });
    });
   });