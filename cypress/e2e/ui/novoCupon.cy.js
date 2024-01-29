const uuid = require('uuid');

it('Deve cadastrar novo cupom', () => {
    // Gerar um código único para o cupom
    const cupomCode = `desconto_${uuid.v4()}`;

    cy.request({
        method: 'POST',
        url: '/wp-json/wc/v3/coupons',
        headers: {
            authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
        },
        body: {
            "code": cupomCode,
            "amount": "31.00",
            "discount_type": "fixed_product",
            "description": "Desconto 31"
        }
    }).then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(201);
    });
});

