/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

const credentials = {
    email: 'aluno_ebac@teste.com',
    username: 'aluno_ebac@teste.com',
    cpf: '123.456.789-09'
};

context('Funcionalidade Login na plataforma', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Somente usuários ativos podem fazer login', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
    })

    it('Deve exibir uma mensagem de erro caso o usuário erre o login e senha', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type('teste@test')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })


    it('Login deve permitir e-mail, nome de usuário ou CPF', () => {

        const selectedCredential = credentials.email;

        // Limpar os campos de entrada antes de começar
        cy.get('#username').clear();
        cy.get('#password').clear();

        // Verificar se a credencial é um e-mail, nome de usuário ou CPF e preencher o campo correspondente
        if (selectedCredential.includes('@')) {
            cy.get('#username').type(selectedCredential);
        } else if (selectedCredential.includes('.')) {
            cy.get('#username').type(selectedCredential);
        } else {
            cy.get('#cpf').type(selectedCredential);
        }

        cy.get('#password').type('teste@teste.com');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)');
    });


    it('Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login', () => {
        // Realizar três tentativas incorretas de login
        for (let i = 0; i < 3; i++) {
            cy.get('#username').type(perfil.usuario);
            cy.get('#password').type('senha_incorreta');
            cy.get('.woocommerce-form > .button').click();

            cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail perfil.usuario está incorreta. Perdeu a senha?');

            cy.get('#username').clear();
            cy.get('#password').clear();
        }

        // Aguardar 15 minutos (900000 milissegundos)
        cy.wait(900000);

        // Tentar fazer login novamente após o período de bloqueio
        cy.get('#username').type(perfil.usuario);
        cy.get('#password').type(perfil.senha);
        cy.get('.woocommerce-form > .button').click();

        // Adicionar verificações para garantir que o login foi bem-sucedido após o período de bloqueio
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá, aluno_ebac20Nome de ExibiçãoNome de Exibição (não é aluno_ebac20Nome de ExibiçãoNome de Exibição? Sair)')
    });

})

