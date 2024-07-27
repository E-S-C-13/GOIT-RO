/// <reference types="cypress" />

describe("Login Tests", () => {
  beforeEach(() => {
    //* Hides XHR and Fetch requests
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://www.edu.goit.global/account/login");
  });

  describe("Test 1. First credentials", () => {
    it("Visits the GoIT's LMS login page and logs in Taras Schewtschenko", () => {
      //! Replace credentials!!!
      cy.login("user888@gmail.com", "1234567890");
      //////////////////////////////////////////
      cy.logout();
    });
  });
  describe("Test 2. Second credentials", () => {
    it("Visits the GoIT's LMS login page and logs in testowy qa", () => {
      //! Replace credentials!!!
      cy.login("testowyqa@qa.team", "QA!automation-1");
      /////////////////////////////////////////
      cy.logout();
    });
  });
});
