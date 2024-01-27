it('Deve cadastrar novo cupom', () => {
    
    cy.request({
        method: 'POST',
        url: '/wp-json/wc/v3/coupons',
        headers: {
            authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
        },
        body: {
            "code": "desconto de 23",
            "amount": "23.00",
            "discount_type": "fixed_product",
            "description": "Desconto 23"
        }

    }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(201);

    });

});
