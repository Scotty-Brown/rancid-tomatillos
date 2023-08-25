import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../../movieData';
import SingleMovie from '../SingleMovie/SingleMovie';
import { useState } from 'react';


function App() {
  const [movies, setMovies] = useState(movieData)
  const [singleMovie, setSingleMovie] = useState(null)
 
  function showSingleMovie(e) {
    const clickedMovie = movies.movies.find(movie => movie.id == e.target.id)
    
    setSingleMovie(clickedMovie)
  }
  
  function goBack() {
    setSingleMovie(null) 
  }

  return (
    <main>
      <h1>Rancid Tomatillos</h1>
      {!singleMovie ? <Movies movies={movies} showSingleMovie={showSingleMovie} />
       : <SingleMovie movie={singleMovie} goBack={goBack}/>}
      
    </main>
  )

}

export default App;
