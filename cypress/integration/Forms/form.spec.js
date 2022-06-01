/// <reference types="cypress" />

describe("order-form-fill", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("add my details", () => {
    cy.get('input[name="firstName"]').type("test");
    cy.get('input[name="lastName"]').type("user");
    cy.get('input[name="email"]').type("test@gmail.com");
    cy.get('input[name="phoneNo"]').type("0778978452");
    cy.get('input[name="country"]')
      .parent()
      .click()
      .then(() => {
        cy.get("ul").contains("India").click();
      });

    cy.get('input[name="auto"]')
      .type("chennai")
      .then(() => {
        cy.get("ul").first().click();
      });

    cy.get(".btn-submit").click();
  });
});
