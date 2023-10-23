it('TP Portal login', function(){
    cy.visit('http://10.9.0.77:5333/#/login')

    cy.get('.login-form > :nth-child(2) > :nth-child(1) > .form-control').type("shihab")
    cy.get(':nth-child(2) > .form-control').type("Shihab12345!")

    cy.get('.login-form > :nth-child(2) > .btn-container > .btn').click()

    cy.get('.login-form > :nth-child(2) > :nth-child(2) > .input-group > .form-control').type("123456")

    cy.get('.login-form > :nth-child(2) > .btn-container > .btn').click()
})