class LoginPage {
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  }

  enterCredentials(username, password) {
    cy.get('#loginPanel > form > div:nth-child(2) > input').type(username);
    cy.get('#loginPanel > form > div:nth-child(4) > input').type(password);
    cy.get('#loginPanel > form > div:nth-child(5) > input').click();
  }
}

export default new LoginPage();