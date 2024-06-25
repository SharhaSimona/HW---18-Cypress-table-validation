class Loggin
{
    txtEmail='input[type="email"]';
    txtPassword='input[type="password"]';
    buttonSubmit='.v-btn__content';
    loginURL='https://dev.omni-dispatch.com/chats';


    setEmail(email)
    {
        cy.get('input[type="email"]').type('test@gmail.com');
    }

    setPassword(password)
    {
        cy.get('input[type="password"]').type('12345678'); 
    }

    clickSubmit()
    {
        cy.get('.v-btn__content').click();
    }

    verifyLogin()
    {
        cy.url('https://dev.omni-dispatch.com/chats');
        // cy.get('.text-grey-darken-2 body-2').should('have.text', 'Test User');
    }
}

export default Loggin;