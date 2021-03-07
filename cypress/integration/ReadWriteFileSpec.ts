

describe('read write file demo', function(){

beforeEach(function(){
     cy.fixture('example.json').as('data')
})

    it('read file using fixture', function(){

        cy.fixture('example.json')
             .its('name').should('eq','cypress')
             cy.log(this.data.name)
             cy.log(this.data.email)
    })

    it('read file using read file command', function(){

        cy.readFile('./cypress/fixtures/example.json')
           .its('name').should('eq','cypress')
    })

    it('write file demo', function(){

        cy.writeFile('./sample.txt', 'Hello I am learning cypress')
        cy.writeFile('./sample.txt', 'This is interesting', { flag: 'a+'})

    })
})
