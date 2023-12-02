import { LoginPage } from "../page/LoginPage"

const loginPage = new LoginPage()

it('TP Portal login', function(){
    loginPage.navigate()
    loginPage.username("shihab")
    loginPage.password("Shihab12345!")
    loginPage.submitBtn()
    loginPage.otp()
    loginPage.confirmBtn()
    loginPage.welcomeAfterLogin()
})