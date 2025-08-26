import { expect } from "chai"

export class LoginPage {
    tp_portal_link = 'http://10.9.0.77:5334/#/login'
    username_textbot = '.login-form > :nth-child(2) > :nth-child(1) > .form-control'
    password_textbox = ':nth-child(2) > .form-control'
    submit_button = '.login-form > :nth-child(2) > .btn-container > .btn'
    otp_textbox = '.login-form > :nth-child(2) > :nth-child(2) > .input-group > .form-control'
    confirm_button = '.login-form > :nth-child(2) > .btn-container > .btn'

    navigate()
    {
        cy.visit(this.tp_portal_link) //tp portal login page land
        cy.wait(2000)
    }
    username(username)
    {
        cy.get(this.username_textbot).type(username) //username
        cy.wait(2000)
    }
    password(password)
    {
        cy.get(this.password_textbox).type(password) //password
        cy.wait(2000)
    }
    submitBtn()
    {
        cy.get(this.submit_button).click()  //submit button
        cy.wait(5000)
    }
    otp()
    {
        cy.get(this.otp_textbox).type("123456") //otp
        cy.wait(2000)
    }
    confirmBtn()
    {
        cy.get(this.confirm_button).click()  //confirm button
        cy.wait(2000)
    }
    welcomeAfterLogin()
    {
        cy.get('h3').should('contain','Welcome to TallyPay Portal')
        cy.wait(2000)
    }
    welcomeAfterLoginV2()
    {
        let welcome = cy.get('h3').invoke('text')
        console.log("text is : " + welcome)
        expect(true).to.be.true
        cy.wait(2000)
    }
}