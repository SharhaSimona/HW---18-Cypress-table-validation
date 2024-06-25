import Loggin from "../../PageObjects/LoginPage.js";


describe('Trucks page', () => {
 
  it('should display table and filters', () => {
    cy.visit('https://dev.omni-dispatch.com/fleets/trucks')
  
    // Check if the table is displayed
    cy.get('div.v-container.v-container--fluid.v-locale--is-ltr.pt-6.pb-10.pl-6.pr-6.height-100.trucks-page').should('exist')
    
    // Check if the filters are displayed
    cy.get('div.v-card-text.pa-0').should('exist');
  
  })

    it('should return data from API', () => {
      // Wait for the page to load and fetch truck information
      cy.wait(200)
  
      // Assert that the truck information is displayed on the page
      cy.get('#app > div > main > div > div.v-card.v-theme--light.v-card--density-default.v-card--variant-flat.bg-transparent > div.v-card-text.pa-0 > div.v-table.v-table--has-top.v-table--has-bottom.v-table--hover.v-theme--light.v-table--density-default.v-data-table.omni-table.trucks-table > div.v-table__wrapper > table > tbody > tr:nth-child(1) > td:nth-child(3)').should('exist')
    })


  });

