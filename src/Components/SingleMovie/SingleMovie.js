import PropTypes from 'prop-types'
import './SingleMovie.css'
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard'

function SingleMovie({movie, goBack, displayVideo}) {
  return (
       <SingleMovieCard 
        key={movie.movie.id}
        id={movie.movie.id}
        title={movie.movie.title}
        img={movie.movie.poster_path}
        rating={movie.movie.average_rating}
        goBack={goBack}
        displayVideo={displayVideo}
      />
  )
}

export default SingleMovie

SingleMovie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      average_rating: PropTypes.number,
      release_date: PropTypes.string,
    })
  ),
  goBack: PropTypes.func.isRequired,
  displayVideo: PropTypes.func.isRequired
};