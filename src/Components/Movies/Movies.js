import { Link, useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';

function Movies({ movies, showSingleMovie }) {
  const movieCards = movies.movies
    ? movies.movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              img={movie.poster_path}
              rating={movie.average_rating}
              showSingleMovie={showSingleMovie}
            />
          </Link>
        );
      })
    : null;

  return <div className="movies-container">{movieCards}</div>;
}

export default Movies;
