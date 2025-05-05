import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TransferPage from "../../support/pages/TransferPage";

Given("el usuario está en la página de transferencia de dinero", () => {
  TransferPage.visit();
});

When("ingresa un monto válido", () => {
  cy.get("#amount").type("100"); // ✅ Monto válido
});

When("ingresa un monto que excede el saldo disponible", () => {
  cy.get("#amount").type("100000"); // ❌ Monto muy alto
});

When("selecciona la cuenta de origen", () => {
  cy.get("#fromAccountId").select("12345"); // ✅ Ajusta ID de cuenta según prueba
});

When("selecciona la cuenta de destino", () => {
  cy.get("#toAccountId").select("67890"); // ✅ Ajusta ID de cuenta según prueba
});

When("hace clic en el botón de transferencia", () => {
  cy.get('form > :nth-child(4) > .button').click();
});

Then("el sistema debe mostrar un mensaje confirmando la transferencia", () => {
  cy.contains("Your funds have been transferred").should("be.visible");
});