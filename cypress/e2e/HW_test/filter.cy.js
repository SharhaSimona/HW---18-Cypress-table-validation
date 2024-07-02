describe('Filter Functionality', () => {
  beforeEach(() => {
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
    });

    it('should filter the trucks based on the selected criteria', () => {
    
      // Select the desired filter option
      cy.get('[data-qa="truck-phone"]').find('input').type('875555555');
    
      // Click on the Apply button to apply the filter
      cy.get('#search--apply-btn').contains('Apply').click();

      // Verify that only trucks that satisfy the selected criteria are displayed in the table
     
      cy.get('table td [data-qa="truck-driver-phone"]')
      .should('have.length.greaterThan', 0)
      .each(($cel) => {
        expect($cel.text()).to.contain('+1 (875) 555-555');
    });
  });
});