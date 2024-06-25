describe('Test for navigating to Trucks page from Fleet', () => {
    it('should naviate to the Trucks page', () => {
    
        // Verify that successful login message is displayed
        cy.visit('https://dev.omni-dispatch.com/chats');

          // Click on the "Fleet" element
          cy.contains('Fleet').click();
    
          // Click on the "Trucks" element
          cy.contains('Trucks').click();
          cy.url('https://dev.omni-dispatch.com/fleets/trucks');
          cy.get('.trucks-page').should('be.visible')
          .wait(3000)
      });
 
  })