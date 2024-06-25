describe('Dims & Payload Validation', () => {
    it('should display correct Dims & Payload information in the table', () => {

      cy.request({
        method: 'GET',
        url: 'https://dev.omni-dispatch.com/fleets/trucks'
      }).then((response) => {
  
        // Assert that the response status code is successful (200)
        expect(response.status).to.eq(200);
  
  
        // Example verification for :Dims & payload
        cy.get('#app > div > main > div > div.v-card.v-theme--light.v-card--density-default.v-card--variant-flat.bg-transparent > div.v-card-text.pa-0 > div.v-table.v-table--has-top.v-table--has-bottom.v-table--hover.v-theme--light.v-table--density-default.v-data-table.omni-table.trucks-table > div.v-table__wrapper > table > tbody > tr:nth-child(1) > td.v-data-table__td.v-data-table-column--align-right > div.v-data-table__td-value > div.text-grey-darken-1.font-size-12').should('have.text', '5000 lbs');
    
        });
          
 });
        
});
      