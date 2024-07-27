// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//* LOGIN GOIT LMS
Cypress.Commands.add("login", (email, password) => {
  cy.get("#user_email").type(email);
  cy.get("#user_email").should("have.value", email);
  cy.get("#user_password").type(password, { sensitive: true });
  cy.get('button[type="submit"]').click();
});

//* LOGOUT GOIT LMS
Cypress.Commands.add("logout", () => {
  cy.log("Opens Burger Menu, scrolls down and presses Log out");
  cy.get("#open-navigation-menu-mobile").click();
  cy.get('nav[role="menu"]')
    //? bad practice of getting button, but the only one that works properly
    .contains("button", "Log out")
    .scrollIntoView()
    .should("be.visible")
    .click();
  cy.log("Logged out");
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//* Sensitive text (replaced in the logs with *)
Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false;
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: "type",
      message: "*".repeat(text.length),
    });
  }
  return originalFn(element, text, options);
});
