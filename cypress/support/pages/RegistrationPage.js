class RegistrationPage {
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }
  
  fillForm(user) {
    cy.get('#loginPanel > :nth-child(3) > a');
    cy.get('#customerForm').within(() => {
    cy.get('input[name="customer.firstName"]').type(user.firstName);
    cy.get('input[name="customer.lastName"]').type(user.lastName);
    cy.get('input[name="customer.address.street"]').type(user.address);
    cy.get('input[name="customer.address.city"]').type(user.city);
    cy.get('input[name="customer.address.state"]').type(user.state);
    cy.get('input[name="customer.address.zipCode"]').type(user.zipCode);
    cy.get('input[name="customer.phoneNumber"]').type(user.phone);
    cy.get('input[name="customer.ssn"]').type(user.ssn);
    cy.get('input[name="customer.username"]').type(user.username);
    cy.get('input[name="customer.password"]').type(user.password);
    cy.get('#repeatedPassword').type(user.confirmPassword);
    cy.get('[colspan="2"] > .button').click();
   });
  }
}
  
export default new RegistrationPage();