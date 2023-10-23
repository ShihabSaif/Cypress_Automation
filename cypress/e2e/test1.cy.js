it('landing on tp portal', function(){
    cy.visit('http://10.9.0.77:5333/#/login')
})

it('TP Portal login', function(){
    cy.visit('http://10.9.0.77:5333/#/login') //tp portal login page land
    cy.get('.login-form > :nth-child(2) > :nth-child(1) > .form-control').type("shihab") //username
    cy.get(':nth-child(2) > .form-control').type("Shihab12345!") //password
    cy.get('.login-form > :nth-child(2) > .btn-container > .btn').click()  //submit button
    cy.get('.login-form > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("123456") //otp
    cy.get('.login-form > :nth-child(2) > .btn-container > .btn').click()  //confirm button
    cy.get('h3').should('contain','Welcome to TallyPay Portal')
})