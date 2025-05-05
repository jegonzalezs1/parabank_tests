import { Given, When, Then } from "cypress-cucumber-preprocessor";
import RegistrationPage from "../../support/pages/RegistrationPage";

Given("el usuario está en la página de registro", () => {
  RegistrationPage.visit();
});

When("ingresa un nombre de usuario válido", () => {
  cy.fixture("user_data").then((user) => {
    cy.get('input[name="customer.username"]').type(user.username);
  });
});

When("ingresa una contraseña válida", () => {
  cy.fixture("user_data").then((user) => {
    cy.get('input[name="customer.password"]').type(user.password);
    cy.get('#repeatedPassword').type(user.confirmPassword);
  });
});

When("completa todos los campos requeridos", () => {
  cy.fixture("user_data").then((user) => {
    RegistrationPage.fillForm(user);
  });
});

When("hace clic en el botón de registro", () => {
  cy.get('[colspan="2"] > .button').click();
});

Then("el sistema debe mostrar un mensaje de éxito", () => {
  cy.get("span[id='customer.username.errors']").should("not.exist");
});