import './App.css';
import Movies from '../Movies/Movies';
import SingleMovie from '../SingleMovie/SingleMovie';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { getAllMovies } from '../../apiCalls'
import ErrorHandling from '../ErrorHandling/ErrorHandling'
import { Route, Routes, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Search from '../Search/Search';

function App() {
  const [movies, setMovies] = useState({})
  const [error, setError] = useState('')
  const location = useLocation().pathname
  const [loading, setLoading] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    setError('')
    setSearchInput('')
  }, [location])


  useEffect(() => {
    setLoading(true)
    getAllMovies()
    .then(data => {
      setMovies(data)
      setLoading(false)
    })
    .catch(error => {
      setError(`Request failed - ${error.message}`)
      setLoading(false)
    })
    
  }, [])

  return (
    <main>
      <Header />
      {error && <ErrorHandling error={error}/>}
      {loading && <Loading loading={loading}/>}
      <Routes>
        <Route path='/' element={<><Search setSearchInput={setSearchInput}/>< Movies movies={movies} searchInput={searchInput}/></>} />
        <Route path='/:id' element={<SingleMovie setLoading={setLoading} setError={setError} />}/> 
        <Route path='*' element={<ErrorHandling error={error}/>}></Route>
      </Routes>
    </main>
  )

}

export default App;