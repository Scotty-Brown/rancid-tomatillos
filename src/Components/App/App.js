import './App.css';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { getAllMovies, getSingleMovie, getMovieVideo } from '../../apiCalls'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState({})
  const [singleMovie, setSingleMovie] = useState(null)
  const [error, setError] = useState('')
  const location = useLocation().pathname

  useEffect(() => {
    setError('')
  }, [location])


  useEffect(() => {
    getAllMovies()
    .then(data => setMovies(data))
    .catch(error => setError(`Request failed - ${error.message}`))
  }, [])

  function showSingleMovie(id) {
    setSingleMovie(null)
    getSingleMovie(id)
    .then(data => setSingleMovie(data))
    .catch(error => setError(`Request failed - ${error.message}`))
  }
  
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
        <Route path='*' element={<ErrorHandling error={error}/>}></Route>
      </Routes>
    </main>
  )

}

export default App;