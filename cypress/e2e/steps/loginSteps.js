import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";

Given("el usuario está en la página de inicio de sesión", () => {
  LoginPage.visit();
});

When("ingresa un nombre de usuario válido", () => {
  cy.fixture("user_data").then((user) => {
    cy.get('#loginPanel > form > div:nth-child(2) > input').type(user.username);
  });
});

When("ingresa la contraseña correcta", () => {
  cy.fixture("user_data").then((user) => {
    cy.get('#loginPanel > form > div:nth-child(4) > input').type(user.password);
  });
});

When("hace clic en el botón de login", () => {
  cy.get('#loginPanel > form > div:nth-child(5) > input').click();
});

Then("el sistema debe mostrar el mensaje de bienvenida", () => {
  cy.url().should("include", "/overview.htm");
});