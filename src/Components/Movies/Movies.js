import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';

function Movies({ movies }) {
  const movieCards = movies.movies
    && movies.movies.map((movie) => {
        return (
          <Link to={`/${movie.id}`} className='movie-comp' key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              img={movie.poster_path}
              rating={movie.average_rating}
            />
          </Link>
        );
      })

  return <div className="movies-container">{movieCards}</div>;
}

export default Movies;
