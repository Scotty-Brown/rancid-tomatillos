import './SingleMovie.css'
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard'

function SingleMovie({movie, goBack}) {
  return (
    <div className='single-movie-container'>
       <SingleMovieCard 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        img={movie.poster_path}
        rating={movie.average_rating}
        goBack={goBack}
      />
    </div>
  )
}

export default SingleMovie