describe('Error Handling Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'mainSampleData'
    }).as('getData')

   cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',{ 
        statusCode: 404,
        fixture: 'blackAdamMock'
       }
    ).as('getBlackAdam')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 404, 
      fixture: 'blackAdamTrailerFetch'
    }).as('getBlackAdamTrailer') 
    
   
  });

  it ('should return a 404 error for Black Adam' , () => {
    cy.visit('http://localhost:3000/')
    cy.wait('@getData')
      cy.get('[href="/436270"] > .movie-card').click()
    cy.wait(['@getBlackAdamTrailer', '@getBlackAdam'])
    .url().should('eq', 'http://localhost:3000/436270')
    .get('.error').should('exist')
    .get('h2').should('contain', 'Request failed - 404: Nothing to see here')
    .get('img').should('have.attr', 'src');
  })
   
  it('should return all movies', () => {
    cy.visit('http://localhost:3000/436270')
    cy.wait(['@getBlackAdamTrailer', '@getBlackAdam'])
    cy.get('.retry-button').click()
    .wait('@getData')
    .url().should('eq', 'http://localhost:3000/')
    .get('.movie-card').first().contains('p', 'Rancid Rating - 4.0 🍅s')
    .get('.movie-card-image').first().should(
      'have.attr',
      'src',
      'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg'
    )
    .get('.movie-card').last().contains('p', 'Rancid Rating - 7.0 🍅s')
    .get('.movie-card-image').last().should(
      'have.attr',
      'src',
      'https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg'
    )
    .get('.movies-container').find('.movie-card').should('have.length', 3);
  });
})
    
describe('Should handle 404 error on page load', () => {
  it('should return 404 error for all movies page', () => { 
     cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      fixture: 'mainSampleData'
    }).as('get404FetchError')
      cy.visit('http://localhost:3000/')
      .wait('@get404FetchError')
      .get('.error').should('exist')
      .get('h2').should('contain', 'Request failed - 404: Nothing to see here')
      .get('img').should('have.attr', 'src')
    });
})

describe('Should handle a 500 error on page load', () => {
     it('should return 500 error for all movies page', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500, fixture: 'mainSampleData'}).as('get500FetchError')
        .visit('http://localhost:3000/')
        .wait('@get500FetchError')
      .get('.error').should('exist')
      .get('h2').should('contain', 'Request failed - 500: Nothing to see here')
      .get('img').should('have.attr', 'src')
    })
})
   