// Test suite for ParaBank
describe('ParaBank', () => {
    // Test for the "Bill Payment Service" part
    it.only('Logs in and uses the Bill Payment Service', () => {
      // Visit the website
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  
      // Type in the username and password and log in
      cy.get('input[name="username"]').type('john');
      cy.get('input[name="password"]').type('demo');
      cy.get('input[value="Log In"]').click();
  
      // Assert that you are logged in
      cy.url().should('include', '/overview.htm');
  
      // Click on "Bill Pay"
      cy.get('a[href="/parabank/billpay.htm"]').click();
  
      // Fill in the bill payment form and click "Send Payment"
      cy.get('input[name="payee.name"]').type('Payee Adji');
      cy.get('input[name="payee.address.street"]').type('Pemuda');
      cy.get('input[name="payee.address.city"]').type('Jakarta');
      cy.get('input[name="payee.address.state"]').type('Indonesia');
      cy.get('input[name="payee.address.zipCode"]').type('13210');
      cy.get('input[name="payee.phoneNumber"]').type('082245181753');
      cy.get('input[name="payee.accountNumber"]').type('12345 #');
      cy.get('input[name="verifyAccount"]').type('12345 #');
      cy.get('input[name="amount"]').type('10000');
      cy.get('select[name="fromAccountId"]').invoke('val', '14343').trigger('change');
      cy.get('input[value="Send Payment"]').click();
  
      // Assert that the payment was successful
      cy.contains('Bill Payment Complete');
  
      // Click the "Logout" button
      cy.get('a[href="/parabank/logout.htm"]').click();
  
      // Assert that you are logged out
      cy.url().should('include', '/index.htm');
    });
  });