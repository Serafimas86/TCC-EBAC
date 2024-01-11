/// <reference types="cypress"/>
import ProdutosJson from '../support/json-produtos/produtos.json'

describe('Adicionar item ao carrinho', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho', () => {
        cy.get('.product-block')
            .contains('Abominable Hoodie').click()
            cy.get('.button-variable-item-S').click()
            cy.get('.button-variable-item-Green').click()
            cy.get('.input-text').clear().type(10)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 10)
            cy.get('.woocommerce-message').should('contain', '10 × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Os valores não podem ultrapassar a R$ 990,00', () => {
        ProdutosJson.comprarTresprodutos()
    })
    

    it('Valores entre R$ 200,00 e R$ 600,00, ganham cupom de 10%', () => {
        cy.get('.post-2559 > .product-block')
            .contains('Abominable Hoodie').click();
        
        cy.get('.button-variable-item-S').click();
        cy.get('.button-variable-item-Green').click();  
        cy.get('.input-text').clear().type(6);
        
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message').should('contain', '6 × “Abominable Hoodie” foram adicionados no seu carrinho.');
    
        cy.get('.sub-title').should('contain', '414');
    });


    it('Valores acima de R$ 600,00 ganham cupom de 15%', () => {
        cy.get('.post-2559 > .product-block')
            .contains('Abominable Hoodie').click();
        
        cy.get('.button-variable-item-S').click();
        cy.get('.button-variable-item-Green').click();  
        cy.get('.input-text').clear().type(11);
        
        cy.get('.single_add_to_cart_button').click();
        cy.get('.woocommerce-message').should('contain', '11 × “Abominable Hoodie” foram adicionados no seu carrinho.');
    
        cy.get('.sub-title').should('contain', '759');
    });
});