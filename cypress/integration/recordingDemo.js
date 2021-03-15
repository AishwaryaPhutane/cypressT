
describe('Record tests', function(){

    it('My first recorded test', function(){
    /* === Generated with Cypress Studio === */
     cy.visit('https://trytestingthis.netlify.app/');
    cy.get('.pop-up-alert > button').click();
    cy.get('#fname').type('Aishwarya');
    cy.get('#lname').type('Phutane');
    /* === End Cypress Studio === */
        })
})