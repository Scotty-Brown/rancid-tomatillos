import './SingleMovie.css';
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getSingleMovie } from '../../apiCalls';
import PropTypes from 'prop-types';


function SingleMovie({ setError }) {

  const [singleMovie, setSingleMovie] = useState(null)
  const { id } = useParams()

  function showSingleMovie(id) {
    getSingleMovie(id)
    .then(data => setSingleMovie(data))
    .catch(error => setError(`Request failed - ${error.message}`))
  }

  function goBack() {
    setSingleMovie(null) 
  }

  useEffect(() => {
    showSingleMovie(id)
  }, [id])


  return singleMovie ? (
    <SingleMovieCard
      key={singleMovie.movie.id}
      id={singleMovie.movie.id}
      title={singleMovie.movie.title}
      tagLine={singleMovie.movie.tagline}
      releaseDate={singleMovie.movie.release_date}
      genres={singleMovie.movie.genres}
      backdropImg={singleMovie.movie.backdrop_path}
      img={singleMovie.movie.poster_path}
      rating={singleMovie.movie.average_rating}
      budget={singleMovie.movie.budget}
      revenue={singleMovie.movie.revenue}
      runTime={singleMovie.movie.runtime}
      overview={singleMovie.movie.overview}
      goBack={goBack}
    />
  ) : null;
}


export default SingleMovie;

SingleMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  backdropImg: PropTypes.string.isRequired,
  rating: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runTime: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};