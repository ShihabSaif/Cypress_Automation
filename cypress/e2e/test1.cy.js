it('google test', function(){
    cy.visit('https://google.com')
    cy.get('.SDkEP').type("Bangladesh{enter}")
})