/// <reference types="cypress" />
/// <reference types="@testing-library/cypress"/>
describe('Pomeranian Website Tests', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should render an article with the text "What is a Pomeranian? How to Identify Pomeranian Dogs"', () => {
		cy.contains(
			'article',
			'What is a Pomeranian? How to Identify Pomeranian Dogs',
		).should('be.visible');
	});

	it('should redirect to the dog detail page and display information when "Pomeranian White" card is clicked', () => {
		cy.contains('Pomeranian White').click();

		cy.url().should('include', '/dog-detail/66900bf22f99def62344f69b');

		cy.contains('Pomeranian White').should('be.visible');
	});

	it('should make the NavBarMenu button clickable and open a menu with the texts "Home", "Articles", "About", and "Contact Us"', () => {
		cy.get('#navBarMenu').click();

		cy.contains('Home').should('be.visible');
		cy.contains('Articles').should('be.visible');
		cy.contains('About').should('be.visible');
		cy.contains('Contact Us').should('be.visible');
	});
});
