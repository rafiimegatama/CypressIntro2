// login to check account
describe('ParaBank', () => {
  it('Logs in ad logs out', () => {
    //Step 1: Visit the website
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    //Step2: type in the username and password (replace 'usernameInput' and 'passwordInput' with the actual selectors)
    cy.get('input[name="username"]').type('john'); // input or command, should be first before the selector. 
    cy.get('input[name="password"]').type('demo');

    //Step3: Click on the submit button to log in (replace 'submitButton' with the actual selector)
    cy.get('input[value = "Log In"]').click()

    //Step4: Assert that you are logged in by checking for an element that is only visible when logged in
    cy.url().should('include', '/overview.htm')

    //Step5: Click on "Open New Account"
    cy.get('a[href="/parabank/openaccount.htm"]').click()

    // Step 6: Select "Savings" from the account types dropdown
    cy.get('select#type').select('SAVINGS'); //The 'select[name=type]' should be replaced with the actual CSS Selector for the Savings option

    // Step 7: Type in the minimum amount
    // cy.get('select[name="fromAccountId"]').select('12345');//  would be replaced with selecting an account to transfer funds from if that is required

    // Step 8: '.new-account-button' with the actual selector, such as the ID, name, or type of the button
    cy.get('input.button[value="Open New Account"]').should('be.visible').click();
    
    // Step 9: Assertion Button
    cy.contains('Account Opened!'); // Replace with actual success message or other success indicator

    // Click the "Logout" button
    cy.get('a[href="/parabank/logout.htm"]').click();
  
    // Assert that you are logged out
    cy.url().should("include", "/index.htm");
  })
})