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

  const handleSortMostRancid = () => {
    const sortedMovies = [...movies.movies].sort((a, b) => b.average_rating - a.average_rating)
    setMovies({ movies: sortedMovies })
  }

  const handleSortLeastRancid = () => {
    const sortedMovies = [...movies.movies].sort((a, b) => a.average_rating - b.average_rating)
    setMovies({ movies: sortedMovies })
  }

  return (
    <main>

      <Header />
      {error && <ErrorHandling error={error}/>}
      {loading && <Loading loading={loading}/>}
      <Routes>
        <Route path='/' element={ !loading &&
          <>
            <Search setSearchInput={setSearchInput}/>
            <div className='sort'>
              <button className='button most-rancid' onClick={handleSortMostRancid}>Most Rancid</button>
              <button className='button least-rancid' onClick={handleSortLeastRancid}>Least Rancid</button>
            </div>
            <Movies movies={movies} searchInput={searchInput} setMovies={setMovies}/>
          </>}/>
        <Route path='/:id' element={<SingleMovie setLoading={setLoading} setError={setError} />}/> 
        <Route path='*' element={<ErrorHandling error={error}/>}></Route>
      </Routes>
    </main>
  )

}

export default App;