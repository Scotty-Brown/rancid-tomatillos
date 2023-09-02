describe('Single Movie Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'mainSampleData'
    }).as('getData')
    .visit('http://localhost:3000/')
    .wait('@getData')
  })


  it('Should select the first movie and show movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'blackAdamMock'
    }).as('getBlackAdamMock')

    cy.get('[href="/436270"] > .movie-card').click()
    .wait('@getBlackAdamMock')
    .url().should('eq', 'http://localhost:3000/436270')
    .get('.single-movie-card').should('exist')
    .get('.single-movie-card-image').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
    .get('.single-movie-headings').contains('h2', 'Black Adam')
    .get('.single-movie-headings').contains('h3', 'Tagline: ')
    .get('.single-card-description').should('exist')
    .get('.single-card-description').contains('p', 'Release Date: 2022-10-19')
    .get('.single-card-description').contains('p', 'Genres: Action | Fantasy | Science Fiction')
    .get('.single-card-description').contains('p', 'Rancid Rating - 4.0 🍅s')
    .get('.single-card-description').contains('p', 'Budget: $200,000,000')
    .get('.single-card-description').contains('p', 'Revenue: $384,571,691')
    .get('.single-card-description').contains('p', 'Run Time: 125 minutes')
    .get('.single-card-description').contains('p', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    cy.get('.button').click()
    .url().should('eq', 'http://localhost:3000/')
  })

  it('Should select another movie and show details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', {
      statusCode: 200,
      fixture: 'ripdMock'
    }).as('getRipdMock')

    cy.get('[href="/1013860"] > .movie-card').click()
    .wait('@getRipdMock')
    .url().should('eq', 'http://localhost:3000/1013860')
    .get('.single-movie-card').should('exist')
    .get('.single-movie-headings').contains('h2', 'R.I.P.D. 2: Rise of the Damned')
    .get('.single-movie-headings').contains('h2', 'R.I.P.D. 2: Rise of the Damned')
    .get('.single-card-description').children().should('have.length', 8)
    .get('.single-card-description').contains('p', 'Budget: $130')
    cy.get('.button').click()
    .url().should('eq', 'http://localhost:3000/')

  })

  it('should return 404 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404}).as('getSecondData')
      .visit('http://localhost:3000/')
      .wait('@getSecondData')
    .get('.error').should('exist')
    .get('h2').should('contain', 'Request failed - 404: Nothing to see here')
    .get('img').should('have.attr', 'src')
  })
  
  it('should return 500 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500}).as('getThirdData')
      .visit('http://localhost:3000/')
      .wait('@getThirdData')
    .get('.error').should('exist')
    .get('h2').should('contain', 'Request failed - 500: Nothing to see here')
    .get('img').should('have.attr', 'src')
  })
})
