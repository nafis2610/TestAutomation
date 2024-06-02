class ProductsPage {

  productDashboard() {
    cy.get(".title").should("have.text", "Products");
    
  }

  sortingProductAtoZ(){ 
    cy.get('.product_sort_container').as('dropdown');

  // Use cy.select() to select the desired option
  cy.get('@dropdown').select('az');
  cy.wait(1000);  // Wait for 1 second

  // Perform assertions to ensure the selected option is displayed
  cy.get('@dropdown').should('have.value', 'az');
  }

  sortingProductZtoA(){ 
    cy.get('.product_sort_container').as('dropdown');

  // Use cy.select() to select the desired option
  cy.get('@dropdown').select('za');
  cy.wait(1000);

  // Perform assertions to ensure the selected option is displayed
  cy.get('@dropdown').should('have.value', 'za');
  }


  sortingProductLtoH(){ 
    cy.get('.product_sort_container').as('dropdown');

  // Use cy.select() to select the desired option
  cy.get('@dropdown').select('lohi');
  cy.wait(1000);  // Wait for 1 second

  // Perform assertions to ensure the selected option is displayed
  cy.get('@dropdown').should('have.value', 'lohi');
  }


  sortingProductHtoL(){ 
    cy.get('.product_sort_container').as('dropdown');

  // Use cy.select() to select the desired option
  cy.get('@dropdown').select('hilo');
  cy.wait(1000);  // Wait for 1 second

  // Perform assertions to ensure the selected option is displayed
  cy.get('@dropdown').should('have.value', 'hilo');
  }

  
  productDetailsPageAndAddToCart() {
    //cy.get('[data-test="add-to-cart"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(1000);  // Wait for 1 second
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.wait(1000);  // Wait for 1 second
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.wait(1000);  // Wait for 1 second
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.wait(1000);  // Wait for 1 second
  }
  
  goToCart() {
    cy.get(".shopping_cart_link").click();   // Click on shopping cart button
    cy.wait(1000);  // Wait for 1 second
  }
}

export default ProductsPage;
