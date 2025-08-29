import { LoginPage } from "../page/LoginPage"

Cypress.Commands.add("login", () => {
  cy.session("user-login", () => {
    const loginPage = new LoginPage()

    loginPage.navigate()
    loginPage.username("shihab")
    loginPage.password("Shihab@007!!!")
    loginPage.submitBtn()
    loginPage.otp()
    loginPage.confirmBtn()
    // loginPage.welcomeAfterLogin()
  })
})