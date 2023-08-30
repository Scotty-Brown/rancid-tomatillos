import './MovieCard.css'
import PropTypes from 'prop-types'

function MovieCard({title, img, rating, id, showSingleMovie}) {
  return (
    <div className='movie-card' onClick={() =>{showSingleMovie(id)}}>
      <h2>{title}</h2>
      <p>Rancid Rating - {rating.toFixed(1)} 🍅s</p>
      <img className='movie-card-image' src={img} />
    </div>
  )
}
export default MovieCard

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  showSingleMovie: PropTypes.func.isRequired 
}