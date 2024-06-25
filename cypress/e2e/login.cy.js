import Loggin from "../PageObjects/LoginPage.js";

describe('Login Test', () => {
    // it('should login to the website', () => {
    //   cy.visit('https://dev.omni-dispatch.com/login');
      
    //  // Enter valid username and password
    //   cy.get('input[type="email"]').type('test@gmail.com');
    //   cy.get('input[type="password"]').type('12345678');
      
    //   // Click on the Login button
    //   cy.get('.v-btn__content').click();
      
    //   // Verify that successful login message is displayed
    //   cy.url('https://dev.omni-dispatch.com/chats');
    // });


    it.only('should login to the website', () => {
      cy.visit('https://dev.omni-dispatch.com/login');

      cy.fixture('loginData').then((data) => {
        const ln=new Loggin();
        ln.setEmail(data.email);
        ln.setPassword(data.Password);
        ln.clickSubmit();
        ln.verifyLogin();
      })
      
  });

});
