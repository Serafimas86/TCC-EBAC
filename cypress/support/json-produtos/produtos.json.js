class ProdutosJson {
    
    comprarTresprodutos() {

        //PRIMEIRO PRODUTO
        cy.get('.post-2559 > .product-block').click();
        
        cy.get('.button-variable-item-S').click();
        cy.get('.button-variable-item-Green').click();  
        cy.get('.input-text').clear().type(10);
        
        cy.get('.single_add_to_cart_button').click();

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2)').click();

        // cy.get('.woocommerce-message').should('contain', '10 × “Abominable Hoodie” foram adicionados no seu carrinho.');
        
        //SEGUNDO PRODUTO
        cy.get('.post-3111 > .product-block').click();

        cy.get('.button-variable-item-S').click();
        cy.get('.button-variable-item-Black').click();  
        cy.get('.input-text').clear().type(6);
        
        cy.get('.single_add_to_cart_button').click();

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click();

        // cy.get('.woocommerce-message').should('contain', '6 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.');

        //TERCEIRO PRODUTO
        cy.get('.post-3073 > .product-block').click();

        cy.get('.button-variable-item-32').click();
        cy.get('.button-variable-item-Blue').click();  
        cy.get('.input-text').clear().type(2);
        
        cy.get('.single_add_to_cart_button').click();

        cy.get('.woocommerce-message').should('contain', '2 × “Aether Gym Pant” foram adicionados no seu carrinho.');
        
        cy.get('.sub-title').should('contain', '982');

    }
}

export default new ProdutosJson()
