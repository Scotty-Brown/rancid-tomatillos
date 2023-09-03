import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';

function Movies({ movies, searchInput, setMovies }) {

  const handleSortAscending = () => {
    const sortedMovies = [...movies.movies].sort((a, b) => b.average_rating - a.average_rating)
    setMovies({ movies: sortedMovies })
  };

  const handleSortDescending = () => {
    const sortedMovies = [...movies.movies].sort((a, b) => a.average_rating - b.average_rating)
    setMovies({ movies: sortedMovies })
  };

  const movieCards = movies.movies
    ? movies.movies
        .filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))
        .map(movie => (
          <Link to={`/${movie.id}`} className='movie-comp' key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              img={movie.poster_path}
              rating={movie.average_rating}
            />
          </Link>
        ))
    : null

  return (
    <div className="movies-container">
      <div>
        <button onClick={handleSortAscending}>Most Rancid</button>
        <button onClick={handleSortDescending}>Least Rancid</button>
      </div>
      <div className="movies-container">{movieCards}</div>
    </div>
  )
}

export default Movies;
