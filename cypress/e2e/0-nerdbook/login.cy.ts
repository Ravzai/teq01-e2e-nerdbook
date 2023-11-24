const loginuser = require("../../fixtures/user.json");

describe("Log In", () => {
    beforeEach(() => {
     cy.visit("/login");
    });
  
    it("should display the login page", () => {
      cy.get("h1").should("contain", "Log in");
    });
  
    it("should display the log in form", () => {
        cy.get("form").should("contain", "Email");
        cy.get("form").should("contain", "Password");
        cy.get("form").should("contain", "Log In");
    });
  
    it("should log in a user", () => {
      cy.get("input#Email").type(loginuser.email);
      cy.get("input#Password").type(loginuser.password);
      
      cy.wait(6000);

      cy.get("input#loginButton").click();
      cy.get("h1").should("contain", "Welcome to NerdBook!");
    });
  });