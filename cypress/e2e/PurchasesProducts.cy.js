import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Product purchase", () => {
  const loginPage = new LoginPage();
  const productPage = new ProductsPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    cy.viewport(1920, 1280);   //cy.viewport(width, height)
    loginPage.login("standard_user", "secret_sauce");
  });

  it.only("verify product purchase is successful", () => {
    productPage.productDashboard();
    productPage.productDetailsPageAndAddToCart();
    productPage.goToCart();
    checkoutPage.checkout();
    checkoutPage.addUserInfo("Al Amin Coudhury", "Abeer", "1216");
    checkoutPage.finishPurchase();
    checkoutPage.purchaseCompleteAssertionTitle("Thank you for your order!");
    checkoutPage.purchaseCompleteAssertionText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    
  });

});
