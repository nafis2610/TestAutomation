import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";


describe("Product purchase", () => {
  const loginPage = new LoginPage();
  const productPage = new ProductsPage();
  

  beforeEach(() => {
    cy.viewport(1920, 1280);
    loginPage.login("standard_user", "secret_sauce");
  });

  it.only("verify the products are ordered according to the chosen sort method", () => {
    productPage.productDashboard();
    productPage.sortingProductZtoA();   // Name (Z to A)
    productPage.sortingProductLtoH();   // Name (low to High)
    productPage.sortingProductHtoL();   // Name (High to Low)
    productPage.sortingProductAtoZ();   // Name (A to Z)
   
  });


});
