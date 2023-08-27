import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../../movieData';
import SingleMovie from '../SingleMovie/SingleMovie';
import { useEffect, useState } from 'react';
import { getAllMovies, getSingleMovie, getMovieVideo } from '../../apiCalls'
import ErrorHandling from '../ErrorHandling/ErrorHandling'

function App() {
  const [movies, setMovies] = useState({})
  const [singleMovie, setSingleMovie] = useState(null)
  const [video, setVideo] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getAllMovies()
    .then(data => setMovies(data))
    .catch(error => setError(`Request failed: ${error.message}`))
  }, [])

  function showSingleMovie(id) {
    getSingleMovie(id)
    .then(data => setSingleMovie(data))
    .catch(error => setError(`Request failed: ${error.message}`))
  }

  function displayVideo(id) {
    getMovieVideo(id)
    .then(data => setVideo(data.videos[0].key))
    .catch(error => setError(`Request failed: ${error.message}`))
    let videoLink = `https://www.youtube.com/embed/${video}`
    console.log('whatvid', video)
    return videoLink
  }
  
  function goBack() {
    setSingleMovie(null) 
  }

  return (
    <main>
      <h1>Rancid Tomatillos</h1>
      {error && <ErrorHandling error={error}/>}
      {!singleMovie ? <Movies movies={movies} showSingleMovie={showSingleMovie} />
       : <SingleMovie movie={singleMovie} goBack={goBack} displayVideo={displayVideo}/>}
    </main>
  )

}

export default App;

  // function getAllMovies() {
  //   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  //     .then(res => res.json())
  //     .then(data => setMovies(data))
  //     .catch(error => console.log(error.message))
  // }

  // function getSingleMovie(id) {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //   .then(res => res.json())
  //   .then(data => setSingleMovie(data))
  //   .catch(error => console.log(error.message))
  // }

  // function getVideo(id) {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
  //   .then(res => res.json())
  // .then(data => {
  //   const firstVideoLink = data.videos[0].key;
  //       setVideo(firstVideoLink);
  // })
  //   .catch(error => console.log(error.message))
  // }

  // function displayVideo(id) {
  //   let videoLink = `https://www.youtube.com/embed/${video}`
  //   return videoLink
  // }
  
  // useEffect(() => {
  //   getAllMovies()
  // }, [])
  
  // function showSingleMovie(id) {
  //   getSingleMovie(id)
  //   getVideo(id)
  // }