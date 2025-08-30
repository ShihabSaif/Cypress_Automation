import { expect } from "chai"

export class LoginPage {
    tp_portal_link = 'http://10.9.0.77:5334/#/login'
    username_textbot = '.login-form > :nth-child(2) > :nth-child(1) > .form-control'
    password_textbox = ':nth-child(2) > .form-control'
    submit_button = '.login-form > :nth-child(2) > .btn-container > .btn'
    otp_textbox = '.login-form > :nth-child(2) > :nth-child(2) > .input-group > .form-control'
    confirm_button = '.login-form > :nth-child(2) > .btn-container > .btn'
    AccountsOption = ':nth-child(3) > .app-menu__item'
    AccountsDetailsOption = '.is-expanded > .treeview-menu > :nth-child(1) > .treeview-item'

    navigate()
    {
        cy.visit(this.tp_portal_link) //tp portal login page land
    }
    username(username)
    {
        cy.get(this.username_textbot).type(username) //username
    }
    password(password)
    {
        cy.get(this.password_textbox).type(password) //password
    }
    submitBtn()
    {
        cy.get(this.submit_button).click()  //submit button
    }
    otp(otp_value)
    {
        cy.get(this.otp_textbox).type(otp_value) //otp
    }
    confirmBtn()
    {
        cy.get(this.confirm_button).click()  //confirm button
        cy.wait(1000)
    }
}