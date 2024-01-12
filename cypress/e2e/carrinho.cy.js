/// <reference types="cypress"/>
import ProdutosJson from '../support/json-produtos/produtos.json'

describe('Adicionar item ao carrinho', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });


    it('Adicionar produtos no carrinho.', () => {
        ProdutosJson.comprarTresprodutos()
    })
    
});