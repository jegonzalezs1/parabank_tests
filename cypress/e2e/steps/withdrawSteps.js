import { Given, When, Then } from "cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";

Given("el usuario está en la página de retiro de dinero", () => {
  LoginPage.visit();
});

When("ingresa un monto válido para retirar", () => {
  const accountId = "12345"; // ✅ Ajusta el ID según las pruebas
  const amount = "50"; // ✅ Monto válido
  LoginPage.enterWithdraw(accountId, amount);
});

Then("el sistema debe confirmar el retiro exitoso", () => {
  cy.contains("Withdrawal completed").should("be.visible");
});