/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login na plataforma', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Fazer o login na plataforma.', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
    })

})

