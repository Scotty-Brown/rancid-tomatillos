// import { useParams } from 'react-router-dom'
import './MovieCard.css'
import PropTypes from 'prop-types'

function MovieCard({title, img, rating, id, showSingleMovie}) {
  return (
    <div className='movie-card' onClick={() =>{showSingleMovie(id)}}>
      <p>Rancid Rating - {rating.toFixed(1)} 🍅s</p>
      <img className='movie-card-image' src={img} alt={title}/>
    </div>
  )
}
export default MovieCard

MovieCard.propTypes = {
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  showSingleMovie: PropTypes.func.isRequired 
}