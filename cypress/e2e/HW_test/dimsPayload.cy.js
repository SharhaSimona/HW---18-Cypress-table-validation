/// <reference types="cypress" />

describe('Dims & Payload Validation', () => {
  beforeEach(() => {
    cy.visit('https://dev.omni-dispatch.com/login');
      
     // Enter valid username and password
      cy.get('input[type="email"]').type('test@gmail.com');
      cy.get('input[type="password"]').type('12345678');
      
      // Click on the Login button
      cy.get('.v-btn__content').click();

    });
  
  
    it('should display correct information in the table', () => {
      cy.url().should('include', '/chats');
      cy.get('header').find('button').contains('Test User').should('be.visible');
      cy.get('[group="/fleets"]').contains('Fleet').click();
      cy.intercept('/api/v1/trucks?*').as('trucks');
    
      cy.contains('Trucks').click();
      cy.url().should('include', '/fleets/trucks');
      
      
      cy.wait('@trucks').its('response.statusCode').should('eq', 200);
      cy.get('@trucks').then(interception => {
        const response = interception.response.body;
        const items = response.items;
  
        cy.get('div[class=v-table__wrapper] tbody tr').each(($row, index) => {
          const item = items[index];
          if (item.trailer) {
            const trailer = item.trailer;
            cy.wrap($row).within(() => {
             
              cy.get('[data-qa=truck-trailer-dims]').should('contain.text', trailer.length.toString());
              cy.get('[data-qa=truck-trailer-dims]').should('contain.text', trailer.min_height.toString());
              cy.get('[data-qa=truck-trailer-dims]').should('contain.text', trailer.min_width.toString());
              cy.get('[data-qa=truck-trailer-dims]').siblings().should('contain.text', trailer.payload.toString() + ' lbs');
            });
          } else {
            cy.log(`Property trailer in item with index ${index} is null.`);
          }
        });
      });
    });
});
        

      