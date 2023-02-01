describe('general test for the application', () => {
  it('should check that all nav links are available and work', () => {
    cy.visit('http://localhost:3010/')
    cy.findByRole('heading', {name : 'Welcome to my Next.JS - Cypress - Playground'})

    cy.findByRole('link', {name: 'NEXT.JS'}).click();
    cy.findByRole('heading', {name : 'Next.JS'})

    cy.findByRole('link', {name: 'CYPRESS'}).click();
    cy.findByRole('heading', {name : 'Cypress'})

    cy.findByRole('link', {name: 'START'}).click();
    cy.findByRole('heading', {name : 'Welcome to my Next.JS - Cypress - Playground'})
  })
})