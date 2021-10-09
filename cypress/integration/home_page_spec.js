describe('The Home Page', () => {
    it('Successfully loads', () => {
        cy.visit('http://localhost:4200')
    })
    it('Render tittle', () => {
        cy.visit('http://localhost:4200')
        cy.get('#title').contains('Casino La Suerte')
    })
    it('Button navigation', () => {
        cy.visit('http://localhost:4200')
        cy.get('#play-btn').click()
    })
});

describe('Codebreaker page', () => {
    it('Successfully loads', () => {
        cy.visit('http://localhost:4200')
    })
    it('Number verification', () => {
        cy.visit('http://localhost:4200/codebreaker')
        cy.get('#input-number').should('be.visible').type('1234');
        cy.get('#bet-btn').click();
        cy.get('#response').contains('XXXX');
    })
    it('Back button', () => {
        cy.get('#back-btn').click();
        cy.url().should('be.equal','http://localhost:4200/')
    })
});


