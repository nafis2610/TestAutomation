class CheckoutPage {

  checkout() {
    cy.get('[data-test="checkout"]').click();   // Click on Checkout button
  }

  addUserInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.wait(1000);   // Wait for 1 second
    cy.get('[data-test="lastName"]').type(lastName);
    cy.wait(1000);   // Wait for 1 second
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.wait(1000);   // Wait for 1 second
    cy.get('[data-test="continue"]').click();
    cy.wait(1000);
  }

  finishPurchase() {
    cy.get('[data-test="finish"]').click();  // Click on Finish button
    cy.wait(1000);  // Wait for 1 second
  }
  

  purchaseCompleteAssertionTitle(expectedText) {
    cy.get(".complete-header").should("have.text", expectedText);
  }


  purchaseCompleteAssertionText(expectedText) {
    cy.get(".complete-text").should("have.text", expectedText);
  }
}

export default CheckoutPage;
