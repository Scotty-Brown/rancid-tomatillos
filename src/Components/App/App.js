import './App.css';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../../apiCalls'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState({})
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

  return (
    <main>
      <Header />
      {error && <ErrorHandling error={error}/>}
      <Routes>
        <Route path='/' element={<Movies movies={movies} />} />
        <Route path='/:id' element={<SingleMovie setError={setError} />}/> 
        <Route path='*' element={<ErrorHandling error={error}/>}></Route>
      </Routes>
    </main>
  )

}

export default App;