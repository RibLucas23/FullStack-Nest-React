/// <reference types="cypress" />
describe('Admin Panel Tests', () => {
	beforeEach(() => {
		cy.visit('/login');
		cy.get('input[name="email"]').type('q@a.com');
		cy.get('input[name="password"]').type('asd');
		cy.get('button[type="submit"]').click();

		cy.wait(2000);
		cy.visit('/admin-pannel');
		cy.url().should('include', '/admin-pannel');
	});

	it('should render dogs controll pannel', () => {
		cy.get('table').should('be.visible');
		cy.contains('td', '66900bf22f99def62344f69b');
		cy.contains('td', 'Angelito');
		cy.contains('td', 'Pomeranian White');
	});

	it('should edit dog Information', () => {
		cy.wait(2000);

		cy.contains('td', 'Raul');
		cy.contains('td', 'Alaskan Malamute Grey');
		cy.get('button[id="edit-66900c212f99def62344f69d"]').click();

		cy.url().should(
			'include',
			'/admin-pannel/edit-dog/66900c212f99def62344f69d',
		);
		cy.get('input[name="name"]').clear().type('Raul edited');
		cy.get('button[type="submit"]')
			.contains('save', { matchCase: false })
			.click();

		cy.wait(5000);
		cy.url().should('include', '/admin-pannel');
		cy.contains('td', 'Raul edited');
	});

	it('should create successfully a new dog', () => {
		cy.get('button').contains('Add').click();
		cy.url().should('include', '/create/dog');

		cy.get('input, textarea').each(($el) => {
			cy.wrap($el).type('testing');
		});
		cy.get('button[type="submit"]').contains('Save').click();

		cy.wait(5000);
		cy.url().should('include', '/admin-pannel');

		cy.get('button').contains('Next').click();
		cy.get('table').contains('td', 'testing');
	});

	it('should eliminate successfully a dog', () => {
		// Navega a la siguiente página de la tabla
		cy.get('button').contains('Next').click();

		// Encuentra el TR que contiene el texto 'testing'
		cy.get('tr')
			.contains('td', 'testing')
			.parent('tr')
			.then(($row) => {
				// Extrae el atributo data-key
				const rowKey = $row.attr('data-key');
				cy.log(`Dog ID to be deleted: ${rowKey}`);

				// Busca y hace click en el botón de eliminación correspondiente
				cy.get(`button#delete-${rowKey}`).click();

				// Verifica que se muestra la alerta con el texto "Dog Deleted!"
				cy.on('window:alert', (text) => {
					expect(text).to.contains('Dog Deleted!');
				});
			});
	});
});
