Cypress.Commands.add('purgeMessages', ()=>{
    cy.api({
        url: Cypress.env('amqpHost') + '/tasks/contents',
        method: 'DELETE',
        //body
        headers: {
            authorization: Cypress.env('amqpToken')
        },
        failOnStatusCOde: false
    }).then(response => { return response })
})

Cypress.Commands.add('getMessageQueue', ()=>{
    cy.api({
        url: Cypress.env('amqpHost') + '/tasks/get',
        method: 'POST',
        body: {
            count: 1,
            ack_mode: "reject_requeue_true",
            encoding: "auto",
            truncate: 50000
        },
        headers: {
            authorization: Cypress.env('amqpToken')
        },
        failOnStatusCOde: false
    }).then(response => { return response })
})