describe('Error Handling Page', () => {
  it('Should select the first movie and show 404 error', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'mainSampleData'
      }).as('getData')
      .visit('http://localhost:3000/')
      .wait('@getData')
    
      cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',
      { statusCode: 404 }
    ).as('getSecondData')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', {
      statusCode: 200, 
      fixture: 'trailerFetch'
    }).as('trailer')
   

    cy.get('[href="/436270"] > .movie-card').click()
      cy.wait(['@getSecondData', '@trailer'])
      .url().should('eq', 'http://localhost:3000/436270')
      .get('.error').should('exist')
      .get('h2').should('contain', 'Request failed - 404: Nothing to see here')
      .get('img').should('have.attr', 'src');

    cy.get('a').click()
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
});
