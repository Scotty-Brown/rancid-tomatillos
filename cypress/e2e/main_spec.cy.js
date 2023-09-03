describe('Mainpage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'mainSampleData'
    }).as('getData')
  });

  it('Should show header element on page load', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
    cy.get('header').should('exist')
    cy.get('h1').should('have.attr', 'aria-label', 'Rancid Tomatillos')
  });

  it('Should show all movies from endpoint', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
    cy.get('.movie-card').first().contains('p', 'Rancid Rating - 4.0 🍅s')
    .get('.movie-card-image').first().should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    .get('.movie-card').last().contains('p', 'Rancid Rating - 7.0 🍅s')
    .get('.movie-card-image').last().should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg')
    .get('.movies-container').find('.movie-card').should("have.length", 3)
  })

  it('should show 1 movie when user types "black adam"', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
    cy.get('.search').should('exist')
    .get('label[for="search"]').should('exist')
    .get('input[id="search"]').should('exist')
    .get('input[id="search"]').type('black adam')
    .get('.movies-container').find('.movie-card').should("have.length", 1)
  })

  it('should show 2 movies when user types "the"', () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
    cy.get('.search').should('exist')
    .get('label[for="search"]').should('exist')
    .get('input[id="search"]').type('the')
    .get('.movies-container').find('.movie-card').should("have.length", 2)
  })  
})