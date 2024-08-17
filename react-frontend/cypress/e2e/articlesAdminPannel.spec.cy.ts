/// <reference types="cypress" />
describe('Articles Admin Panel Tests', () => {
	beforeEach(() => {
		cy.visit('/login');
		cy.get('input[name="email"]').type('q@a.com');
		cy.get('input[name="password"]').type('asd');
		cy.get('button[type="submit"]').click();

		cy.wait(2000);
		cy.visit('/admin-pannel');
		cy.url().should('include', '/admin-pannel');
		cy.contains('button', 'Articles').click();
	});

	it('should render articles controll pannel', () => {
		cy.get('table').should('be.visible');
		cy.contains('td', '66b25e5b50405015b20c4640');
		cy.contains(
			'td',
			'What is a Pomeranian? How to Identify Pomeranian Dogs',
		);
	});

	it('should edit article Information', () => {
		cy.contains('td', 'testing');
		cy.get('button[id="edit-66c1091ba5ca1984da0b3bef"]').click();

		cy.url().should(
			'include',
			'/admin-pannel/edit/article/66c1091ba5ca1984da0b3bef',
		);
		cy.get('textarea[name="description"]').clear().type('Testing edited');
		cy.get('button[type="submit"]')
			.contains('save', { matchCase: false })
			.click();

		cy.wait(5000);
		cy.url().should('include', '/admin-pannel');
		cy.contains('button', 'Articles').click();

		cy.contains('td', 'Testing edited');
	});

	it('should create successfully a new article', () => {
		cy.get('button').contains('Add').click();
		cy.url().should('include', '/create/article');

		cy.get('input, textarea').each(($el) => {
			cy.wrap($el).type('create testing');
		});
		cy.get('button[type="submit"]').contains('Save').click();

		cy.wait(5000);
		cy.url().should('include', '/admin-pannel');
		cy.contains('button', 'Articles').click();
		cy.get('table').contains('td', 'create testing');
	});

	it('should eliminate successfully an article', () => {
		cy.get('tr')
			.contains('td', 'create testing')
			.parent('tr')
			.then(($row) => {
				const rowKey = $row.attr('data-key');
				cy.log(`Article ID to be deleted: ${rowKey}`);

				cy.get(`button#delete-${rowKey}`).click();

				cy.on('window:alert', (text) => {
					expect(text).to.contains('Article Deleted!');
				});
			});
	});
});
