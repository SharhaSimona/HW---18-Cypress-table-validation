describe('Filter Functionality', () => {
    it('should filter the trucks based on the selected criteria', () => {
    cy.visit('https://dev.omni-dispatch.com/login');

      // Set the filter value for truck type to "Semi truck (Sleeper)"
      const filterValue = 'Semi truck (Sleeper)';
  
      // Select the desired filter option
      cy.get('#app > div > main > div > div.v-card.v-theme--light.bg-white.v-card--density-default.v-card--variant-flat.mb-4.rounded-0.table-filter > div.v-card-text.pa-0 > form > div > div:nth-child(1) > div > div.v-col-md-4.v-col > div > div > div > div.v-field__append-inner > i').click();
      cy.get('#v-menu-32 > div > div > div.v-list-item.v-list-item--active.v-list-item--link.v-theme--light.text-primary.v-list-item--density-default.v-list-item--one-line.rounded-0.v-list-item--variant-text > div.v-list-item__prepend > div.v-selection-control.v-selection-control--dirty.v-selection-control--density-default.v-checkbox-btn > div').click();
      cy.select('.v-list-item-title').should('have.text', 'Semi truck (Sleeper)');
  
      // Click on the Apply button to apply the filter
      cy.get('#apply-filter-btn').click();
  
      // Verify that only trucks that satisfy the selected criteria are displayed in the table
      cy.get('.truck-row').each((row) => {
        // Verify that each row contains the selected truck type
        cy.wrap(row).find('.truck-type-cell').should('contain', filterValue);
       });
    });
  });