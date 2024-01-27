it('Deve cadastrar novo cupom', () => {
    
    cy.request({
        method: 'POST',
        url: '/wp-json/wc/v3/coupons',
        headers: {
            authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
        },
        body: {
            "code": "desconto de 21",
            "amount": "21.00",
            "discount_type": "fixed_product",
            "description": "Desconto 21"
        }

    }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(201);

    });

});
