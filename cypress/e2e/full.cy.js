/// <reference types="cypress" />




describe('Trucks page', () => {
    it('should login to the website', () => {
        cy.visit('https://dev.omni-dispatch.com/login');
        
       // Enter valid username and password
        cy.get('input[type="email"]').type('test@gmail.com');
        cy.get('input[type="password"]').type('12345678');
        
        // Click on the Login button
        cy.get('.v-btn__content').click();
        
        // Verify that successful login message is displayed
        cy.url('https://dev.omni-dispatch.com/chats');
        
        // Click on the "Fleet" element
        cy.contains('Fleet').click();
    
        // Click on the "Trucks" element
        cy.contains('Trucks').click();
        cy.url('https://dev.omni-dispatch.com/fleets/trucks');
        cy.get('.trucks-page').should('be.visible')
        .wait(2000)
  
        // Check if the table is displayed
        cy.get('div.v-container.v-container--fluid.v-locale--is-ltr.pt-6.pb-10.pl-6.pr-6.height-100.trucks-page').should('exist')
    
        // Check if the filters are displayed
        cy.get('div.v-card-text.pa-0').should('exist');
      
          // Wait for the page to load and fetch truck information
          cy.wait(200)
      
          // Assert that the truck information is displayed on the page
          cy.get('#app > div > main > div > div.v-card.v-theme--light.v-card--density-default.v-card--variant-flat.bg-transparent > div.v-card-text.pa-0 > div.v-table.v-table--has-top.v-table--has-bottom.v-table--hover.v-theme--light.v-table--density-default.v-data-table.omni-table.trucks-table > div.v-table__wrapper > table > tbody > tr:nth-child(1) > td:nth-child(3)').should('exist')

        // Example verification for Dims & payload:
            
            cy.get('#app > div > main > div > div.v-card.v-theme--light.v-card--density-default.v-card--variant-flat.bg-transparent > div.v-card-text.pa-0 > div.v-table.v-table--has-top.v-table--has-bottom.v-table--hover.v-theme--light.v-table--density-default.v-data-table.omni-table.trucks-table > div.v-table__wrapper > table > tbody > tr:nth-child(1) > td.v-data-table__td.v-data-table-column--align-right > div.v-data-table__td-value > div.text-grey-darken-1.font-size-12').should('have.text', '5000 lbs');
           
  
      })
    })
  

 
  
   