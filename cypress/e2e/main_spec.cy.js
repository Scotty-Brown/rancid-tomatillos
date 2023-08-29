describe('Mainpage', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "mainSampleData"
    })
    .visit("http://localhost:3000/")
  });
  it('should show header', () => {
    cy.get('header').should('exist')
    cy.get('h1').should('have.attr', 'aria-label', 'Rancid Tomatillos')
  });
  it('should show all movies from endpoint', () => {
    cy
    .get('.movie-card').first().contains('h2', 'Black Adam')
    .get('.movie-card').first().contains('p', 'Rancid Rating - 4.0 🍅s')
    .get('.movie-card-image').first().should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    .get('.movie-card').last().contains('h2', 'R.I.P.D. 2: Rise of the Damned')
    .get('.movie-card').last().contains('p', 'Rancid Rating - 7.0 🍅s')
    .get('.movie-card-image').last().should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg')
    .get('.movies-container').find('.movie-card').should("have.length", 3)
  })
})