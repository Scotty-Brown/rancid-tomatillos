import './SingleMovie.css'
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard'

function SingleMovie({movie, goBack}) {
  return (
    <div className='single-movie-container'>
       <SingleMovieCard 
        key={movie.movie.id}
        id={movie.movie.id}
        title={movie.movie.title}
        img={movie.movie.poster_path}
        rating={movie.movie.average_rating}
        goBack={goBack}
      />
    </div>
  )
}

export default SingleMovie