it('Deve listar todos os cupons cadastrados', () => {
    cy.request({
        method: 'GET',
        url: '/wp-json/wc/v3/coupons',
        headers: {
            authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
        }
    }).then((response) => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.equal(200)
    })
});

