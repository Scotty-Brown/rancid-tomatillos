import './SingleMovie.css'
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard'

function SingleMovie({movie, goBack, displayVideo}) {
  return (
    <div className='single-movie-container'>
       <SingleMovieCard 
        key={movie.movie.id}
        id={movie.movie.id}
        title={movie.movie.title}
        img={movie.movie.poster_path}
        rating={movie.movie.average_rating}
        goBack={goBack}
        displayVideo={displayVideo}
      />
    </div>
  )
}

export default SingleMovie