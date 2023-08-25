import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../../movieData';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState(movieData)
 
  return (
    <main>
      <h1>Rancid Tomatillos</h1>
      <Movies movies={movies}/>
    </main>
  )

}

export default App;
