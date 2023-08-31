describe('Single Movie Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "mainSampleData"
    })
    .visit("http://localhost:3000/")
  })


  it('first movie', () => {

    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture: 'singleMovie'
    })

    cy.get('[href="/movie/436270"] > .movie-card').click()
    .url().should('eq', 'http://localhost:3000/movie/436270')
    .get('.single-movie-card').should('exist')
    .get('.single-movie-card-image').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    


    // .get('.single-movie-card').contains('hs', 'Tagline')



  })
})