import PropTypes from 'prop-types';
import './SingleMovie.css';
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard';

function SingleMovie({ movie, goBack }) {
  return movie ? (
    <SingleMovieCard
      key={movie.movie.id}
      id={movie.movie.id}
      title={movie.movie.title}
      tagLine={movie.movie.tagline}
      releaseDate={movie.movie.release_date}
      genres={movie.movie.genres}
      backdropImg={movie.movie.backdrop_path}
      img={movie.movie.poster_path}
      rating={movie.movie.average_rating}
      budget={movie.movie.budget}
      revenue={movie.movie.revenue}
      runTime={movie.movie.runtime}
      overview={movie.movie.overview}
      goBack={goBack}
    />
  ) : null;
}

export default SingleMovie;

SingleMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      average_rating: PropTypes.number,
      release_date: PropTypes.string
    })
  ),
  goBack: PropTypes.func.isRequired,
};
