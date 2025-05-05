import LoginPage from "../support/pages/LoginPage";
import WithdrawPage from "../support/pages/WithdrawPage";

describe("Withdraw SOAP", () => {
  beforeEach(() => {
    cy.fixture("user_data").then((user) => {
      cy.log("Iniciando sesión...");
      LoginPage.visit();
      LoginPage.enterCredentials(user.username, user.password);
    });
  });

  it("User withdraws money successfully", function () {
    WithdrawPage.enterWithdrawFromFixture();
  });
});