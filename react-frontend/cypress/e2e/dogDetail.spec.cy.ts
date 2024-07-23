/// <reference types="cypress" />
describe('Dog Detail Tests', () => {
	beforeEach(() => {
		cy.visit('/dog-detail/66900bf22f99def62344f69b');
	});

	it('should render Pomeranian dog detail"', () => {
		cy.contains('Pomeranian White').should('be.visible');
	});

	it('should render Pomeranian dog detail information"', () => {
		cy.contains('Information').should('be.visible');
		cy.contains('Gender').should('be.visible');
		cy.contains('MALE').should('be.visible');
		cy.contains('Age').should('be.visible');
		cy.contains('02 months').should('be.visible');
	});
});
