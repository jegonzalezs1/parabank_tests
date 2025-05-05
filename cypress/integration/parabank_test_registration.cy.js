import RegistrationPage from '../support/pages/RegistrationPage';

describe('User Registration', () => {
  
  it('User registration successfully', () => {
    cy.fixture('user_data').then((user) => {
      RegistrationPage.visit();
      cy.log('Creando usuario...');
      RegistrationPage.fillForm(user);
      
      cy.get('span[id="customer.username.errors"]').should('not.exist'); 
      cy.log('Usuario registrado correctamente');
    });
  });

  it('User registration failed (username already exists)', () => {
    cy.fixture('user_data').then((user) => {
      RegistrationPage.visit();
      cy.log('Creando usuario...');
      RegistrationPage.fillForm(user);
      cy.get('span[id="customer.username.errors"]').should('have.text', 'This username already exists.');
      cy.log('Error: El usuario ya existe, registro fallido');
    });
  });
});