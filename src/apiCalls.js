function getAllMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(res => {
    if (!res.ok) {
      throw new Error(`${res.status}: Nothing to see here`)
    }
    return res.json()
  })
}

function getSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(res => {
    if (!res.ok) {
      throw new Error (`${res.status}: Nothing to see here`)
    }
    return res.json()
  })
}

function getMovieVideo(id) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
  .then(res => {
    if (!res.ok) {
      throw new Error (`${res.status}: Nothing to see here`)
    }
    return res.json()
  })
}

export {
  getAllMovies,
  getSingleMovie,
  getMovieVideo,
}