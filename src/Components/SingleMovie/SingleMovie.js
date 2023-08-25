import './SingleMovie.css'
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard'

function SingleMovie({movie}) {
  return (
    <div className='single-movie-container'>
       <SingleMovieCard 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        img={movie.poster_path}
        rating={movie.average_rating}
      />
    </div>
  )
}

export default SingleMovie