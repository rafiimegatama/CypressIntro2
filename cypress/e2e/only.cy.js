// Test suite for ParaBank
describe("ParaBank", () => {
    // Test for logging in, transferring funds, checking account activity, and logging out
    it("Logs in, transfers funds, checks account activity, and logs out", () => {
      // Visit the website
      cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  
      // Type in the username and password and log in
      cy.get('input[name="username"]').type("john");
      cy.get('input[name="password"]').type("demo");
      cy.get('input[value="Log In"]').click();
  
      // Assert that you are logged in
      cy.url().should("include", "/overview.htm");
  
      // Click on "Transfer Funds"
      cy.get('a[href="/parabank/transfer.htm"]').click();
  
      // Select accounts, type in the amount, and click "Transfer"
      cy.get('#fromAccountId').select("12345");
      cy.get('#toAccountId').select("13011");
      cy.get('#amount').type("1000");
      cy.get('input[value="Transfer"]').click();
  
      // Assert that the transfer was successful
      cy.contains("Transfer Complete!");
  
      // Click on "Accounts Overview"
      cy.get('a[href="/parabank/overview.htm"]').click();
  
      // Click on a random account (replace 'accountLink' with the actual selector)
      cy.get('a[href="activity.htm?id=12345"]').click();

      // Assertion to this point
      cy.url().should("include", "/activity.htm?id=12345");
  
      // Select "November" from the "activity period" dropdown (replace 'activityPeriodDropdown' and 'NovemberOption' with the actual selectors)
      cy.get('#month').select("November");
  
      // Select "All" from the "type" dropdown (replace 'typeDropdown' and 'AllOption' with the actual selectors)
      cy.get('#transactionType').select("All");
      cy.get('input[value="Go"]').click();
  
      // Click the "Logout" button
      cy.get('a[href="/parabank/logout.htm"]').click();
  
      // Assert that you are logged out
      cy.url().should("include", "/index.htm");
    });
  });
  