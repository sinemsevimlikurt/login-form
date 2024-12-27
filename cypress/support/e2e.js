// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
describe("A template spec", () => {
  
    it("should allow a user to login", () => {
      cy.visit("http://localhost:5173");
      cy.get('[data-cy="email"]').type("erdem.guntay@wit.com.tr");
      cy.get('[data-cy="password"]').type("9fxIH0GXesEwH_I");
     
      cy.contains("I agree").click();
      cy.get('[data-cy="submit"]').click();
    });
    
    it("shows one error for invalid email", () => {
      cy.visit("http://localhost:5173");
      cy.get('[data-cy="email"]').type("erdem.gun"); 
      cy.get('[data-cy="error"]').should("have.length", 1); 
      cy.get('[data-cy="error"]').contains(/Please enter/); 
    });
    
    it("shows error messages for invalid email and password", () => {
      cy.visit("http://localhost:5173");
      cy.get('[data-cy="email"]').type("erdem.guntay@wit.com.tr");
      cy.get('[data-cy="password"]').type("9fx"); 
      cy.get('[data-cy="error"]').should("have.length", 2); 
      cy.get('[data-cy="error"]').contains(/Please enter/); 
      cy.get('[data-cy="error"]').contains(/Password must/);
    });
  });
  