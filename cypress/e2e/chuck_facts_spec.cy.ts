// cypress/e2e/chuck_norris_spec.cy.js
describe('Chuck Norris Jokes App', () => {
  it('loads the home page', () => {
    cy.visit('http://localhost:3000'); // Verifique se seu servidor Next.js está rodando
    cy.contains('Chuck Norris Facts');
  });

  it('fetches a new joke and likes it', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('fact').click();
    cy.get('div').contains('Failed to fetch joke.').should('not.exist');
    cy.get('button').contains('Like').click();
    cy.get('h3').contains('Fact');
  });

  it('removes a liked joke', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('fact').click();
    cy.get('button').contains('Like').click();
    cy.get('button').contains('X').click();
    cy.get('h3').contains('Fact').should('not.exist');
  });

  it('navigates to the About page and back to the home page', () => {
    cy.visit('http://localhost:3000');
    cy.get('a').contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Chuck Norris Jokes App');
    cy.get('a').contains('Home').click();
    cy.url().should('include', '/');
    cy.contains('Chuck Norris Facts');
  });

  it('navigates back to the Home page', () => {
    cy.visit('http://localhost:3000/about');
    cy.get('a').contains('Home').click();
    cy.url().should('include', '/');
    cy.contains('Chuck Norris Facts');
  });
});