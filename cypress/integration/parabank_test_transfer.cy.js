import LoginPage from "../support/pages/LoginPage";
import TransferPage from "../support/pages/TransferPage";

describe("Transaction Portal", () => {
  beforeEach(() => {
    cy.fixture("user_data").then((user) => {
      cy.log("Iniciando sesión...");
      LoginPage.visit();
      LoginPage.enterCredentials(user.username, user.password);
    });
  });

  it("User transfers money successfully", function () {
    cy.fixture("transfer_data").then((transfer) => {
      cy.log("Procesando transferencia...");
      TransferPage.visit();
      TransferPage.enterTransfer(transfer.amount, transfer.fromAccountId, transfer.toAccountId);
    });
  });
});