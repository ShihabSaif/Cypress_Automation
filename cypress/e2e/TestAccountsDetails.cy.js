import { AccountsDetailsPage } from "../page/AccountsDetailsPage"

const accountsDetailspage = new AccountsDetailsPage()

describe("Account Details Section", () => {
  beforeEach(() => {
    cy.login() // restores login session
    cy.visit('http://10.9.0.77:5334')
  })

  it("navigates to Accounts Details", () => {
    accountsDetailspage.clickAccountsOption()
    accountsDetailspage.clickAccountsDetailsOption()
    accountsDetailspage.walletInput()
    accountsDetailspage.submitButton()
  })
})
