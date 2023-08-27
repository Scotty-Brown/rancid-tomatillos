function getAllMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(res => {
    if (!res.ok) {
      throw new Error(`${res.status}: Nothing to see here`)
    }
    return res.json()
  })
  // .catch(error => console.error(`Request failed: ${error.message}`))
}

function getSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(res => {
    if (!res.ok) {
      throw new Error (`${res.status}: Nothing to see here`)
    }
    return res.json()
  })
  // .catch(err => console.error(`Request failed: ${err.message}`))
}

function getMovieVideo(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
  .then(res => {
    if (!res.ok) {
      throw new Error (`${res.status}: Nothing to see here`)
    }
    return res.json()
  })
  // .catch(err => console.error(`Request failed: ${err.message}`))
}

export {
  getAllMovies,
  getSingleMovie,
  getMovieVideo,
}