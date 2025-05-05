class WithdrawPage {
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  }
  
  enterWithdraw(accountId, amount) {
    this.visit();
    const soapRequest = `<?xml version="1.0" encoding="UTF-8"?>
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                        xmlns:ser="http://service.parabank.parasoft.com/">
        <soapenv:Header/>
          <soapenv:Body>
            <ser:withdraw>
              <ser:accountId>${accountId || "0"}</ser:accountId>
              <ser:amount>${amount || "0"}</ser:amount>
            </ser:withdraw>
          </soapenv:Body>
        </soapenv:Envelope>`;
    
    cy.request({
      method: 'POST',
      url: 'https://parabank.parasoft.com/parabank/services/ParaBank',
      headers: { 'Content-Type': 'text/xml', 'SOAPAction': 'withdraw' },
      body: soapRequest,
      failOnStatusCode: false
    }).then((response) => {
      cy.log('Código de estado:', response.status);
      cy.log('Respuesta completa:', response.body);
    });
  }

  enterWithdrawFromFixture() {
    cy.fixture("withdraw_data").then((data) => {
      cy.log("Procesando retiro desde JSON...");
      this.enterWithdraw(data.accountId, data.amount);
    });
  }
}

export default new WithdrawPage();