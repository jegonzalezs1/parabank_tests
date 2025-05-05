class TransferPage {
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/transfer.htm');
  }
  
  enterTransfer(amount, fromAccountId, toAccountId) {
    cy.get('#leftPanel > ul > :nth-child(3) > a').click();
    cy.get('#amount').type(amount);
    cy.fixture("transfer_data").then((data) => {
      cy.get("#fromAccountId").select(data.fromAccountId);
      cy.get("#toAccountId").select(data.toAccountId);
    });
    
    cy.get('form > :nth-child(4) > .button').click();
  }
}
  
export default new TransferPage();
