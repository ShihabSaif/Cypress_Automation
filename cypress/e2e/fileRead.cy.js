it('read file using fixture', function(){
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    } )
})

it('read file using readFile', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    } )
})

it('write file', function(){
    cy.writeFile('text.txt', 'Hello World \n')

    cy.writeFile('text.txt', 'I am Shihab', {flag: 'a+'})
})