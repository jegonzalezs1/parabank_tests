import LoginPage from '../support/pages/LoginPage';

describe('Login Portal', () => {

  it('User logs in and captures session', () => {
    cy.fixture('user_data').then((user) => {
      LoginPage.visit();
      LoginPage.enterCredentials(user.username, user.password);
    });
  });
});