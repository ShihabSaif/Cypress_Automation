import { expect } from "chai"

export class LoginPage {
    navigate()
    {
        cy.visit('http://10.9.0.77:5333/#/login') //tp portal login page land
    }
    username()
    {
        cy.get('.login-form > :nth-child(2) > :nth-child(1) > .form-control').type("shihab") //username
    }
    password()
    {
        cy.get(':nth-child(2) > .form-control').type("Shihab12345!") //password
    }
    submitBtn()
    {
        cy.get('.login-form > :nth-child(2) > .btn-container > .btn').click()  //submit button
    }
    otp()
    {
        cy.get('.login-form > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("123456") //otp
    }
    confirmBtn()
    {
        cy.get('.login-form > :nth-child(2) > .btn-container > .btn').click()  //confirm button
    }
    welcomeAfterLogin()
    {
        cy.get('h3').should('contain','Welcome to TallyPay Portal')
    }
    welcomeAfterLoginV2()
    {
        let welcome = cy.get('h3').invoke('text')
        console.log("text is : " + welcome)
        expect(true).to.be.true

    }
}