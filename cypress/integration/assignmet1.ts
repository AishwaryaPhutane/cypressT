/// <reference types="cypress" />

it('positive test case', () => {

    var url: string;
    var requestType: string;

    cy.fixture('example.json').then(data => {

        url = data.url;
        requestType = data.getRequest;

        cy.request(requestType, url).then(response => {

            // assertion
            expect(response).to.have.property('status', 200);

            //log
            cy.log('response.JSON:', {
                message: 'Request received',
                data: JSON.stringify(response.body)
            })
        })

    })

})


it('negative test case', () => {

    var url: string;
    var requestType: string;

    cy.fixture('example.json').then(data => {

        url = data.InvalidURL;
        requestType = data.getRequest;

        cy.request({
            method: requestType,
            url: url,
            failOnStatusCode: false
        }).then(response => {

            // assertion
            expect(response).to.have.property('status', 404);

            //log
            cy.log('response.JSON:', {
                message: 'Request received',
                data: JSON.stringify(response.body)
            })
        })

    })
    

})