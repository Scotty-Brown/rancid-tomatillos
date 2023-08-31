import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../../movieData';
import SingleMovie from '../SingleMovie/SingleMovie';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { getAllMovies, getSingleMovie, getMovieVideo } from '../../apiCalls'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
import { Route, Routes, useParams } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState({})
  const [singleMovie, setSingleMovie] = useState(null)
  const [video, setVideo] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getAllMovies()
    .then(data => setMovies(data))
    .catch(error => setError(`Request failed - ${error.message}`))
  }, [])

  function showSingleMovie(id) {
    getSingleMovie(id)
    .then(data => setSingleMovie(data))
    .catch(error => setError(`Request failed - ${error.message}`))
  }

  // function displayVideo(id) {
  //   getMovieVideo(id)
  //   .then(data => setVideo(data.videos[0].key))
  //   .catch(error => setError(`Request failed: ${error.message}`))
  //   let videoLink = `https://www.youtube.com/embed/${video}`
  //   return videoLink
  // }
  
  function goBack() {
    setSingleMovie(null) 
  }

  return (
    <main>
      <Header />
      {error && <ErrorHandling error={error}/>}
      <Routes>
        <Route path='/' element={<Movies movies={movies} showSingleMovie={showSingleMovie}/>} />
        <Route path='/movie/:id' element={<SingleMovie movie={singleMovie} goBack={goBack} />}/> 
      </Routes>
    </main>
  )

}

export default App;