import { LoginPage } from "../page/LoginPage"

Cypress.Commands.add("login", () => {
  cy.session("user-login", () => {
    const loginPage = new LoginPage()

    loginPage.navigate()
    loginPage.username(Cypress.env("username"))
    loginPage.password(Cypress.env("password"))
    loginPage.submitBtn()
    loginPage.otp(Cypress.env("otp"))
    loginPage.confirmBtn()
  })
})