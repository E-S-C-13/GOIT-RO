import LoginPage from "../PageObjects/Login.js"; //*Page Object
import HomePage from "../PageObjects/HomePage.js"; //*Page Object

describe("Login Tests", () => {
  const login = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    //* Hides XHR and Fetch requests
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    login.navigateToLoginPage();
  });

  describe("Test 1. First credentials", () => {
    it("Verifies the login page", () => {
      login.verifyEmailField();
      login.verifyPasswordField();
      login.verifyLoginButton();
    });
    it("Logs in Taras Schewtschenko", () => {
      login.inputEmail("user888@gmail.com");
      login.emailField.should("have.value", "user888@gmail.com");
      login.inputPassword("1234567890");
      login.loginButton.click();
      cy.log("Logged in");
      homePage.verifyBurgerMenuButton();
      homePage.burgerMenuButton.click();
      homePage.verifyNavigationMenu();
      homePage.verifyLogoutButton();
      homePage.logoutButton.click();
      cy.log("Logged out");
    });
  });

  describe("Test 2. Second credentials", () => {
    it("Logs in testowy qa", () => {
      login.inputEmail("testowyqa@qa.team");
      login.inputPassword("QA!automation-1");
      login.loginButton.click();
      cy.log("Logged in");
      homePage.burgerMenuButton.click();
      homePage.logoutButton.click();
      cy.log("Logged out");
    });
  });
});
