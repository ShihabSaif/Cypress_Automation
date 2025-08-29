module.exports = {
  // Configure end-to-end (e2e) tests
  e2e: {
    // Specify the pattern for e2e test files
    specPattern: [
      'cypress/e2e/testLogin.cy.js',
      'cypress/e2e/TestAccountsDetails.cy.js'
    ]
  },

  // You can also configure component tests separately if needed
  // component: {
  //   specPattern: '...'
  // }
};

