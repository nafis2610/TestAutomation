class LoginPage {

    login(username, password) {
        cy.visit("https://www.saucedemo.com/");   
        cy.get('[data-test="username"]').type(username);
        cy.wait(1000);  // Wait for 1 second
        cy.get('[data-test="password"]').type(password);
        cy.wait(1000);  // Wait for 1 second
        cy.get('[data-test="login-button"]').click();   // Click on Login button
        cy.wait(1000);  // Wait for 1 second
    }

    ErrorCompleteAssertion(expectedText) {
        cy.get('[data-test="error"]').should("have.text", expectedText);
      }

}

export default LoginPage;

