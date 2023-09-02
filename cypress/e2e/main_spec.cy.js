describe('Mainpage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'mainSampleData'
    }).as('getData')
    .visit('http://localhost:3000/')
    .wait('@getData')
  });
  it('Should show header element on page load', () => {
    cy.get('header').should('exist')
    cy.get('h1').should('have.attr', 'aria-label', 'Rancid Tomatillos')
  });

  it('Should show all movies from endpoint', () => {
    cy.get('.movie-card').first().contains('p', 'Rancid Rating - 4.0 🍅s')
    .get('.movie-card-image').first().should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    .get('.movie-card').last().contains('p', 'Rancid Rating - 7.0 🍅s')
    .get('.movie-card-image').last().should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg')
    .get('.movies-container').find('.movie-card').should("have.length", 3)
  })

  it('Should return 404 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404}).as('getSecondData')
      .visit('http://localhost:3000/')
      .wait('@getSecondData')
    .get('.error').should('exist')
    .get('h2').should('contain', 'Request failed - 404: Nothing to see here')
    .get('img').should('have.attr', 'src')
  })

  it('Should return 500 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500}).as('getThirdData')    
      .visit('http://localhost:3000/')
      .wait('@getThirdData')
    .get('.error').should('exist')
    .get('h2').should('contain', 'Request failed - 500: Nothing to see here')
    .get('img').should('have.attr', 'src')
  })
})