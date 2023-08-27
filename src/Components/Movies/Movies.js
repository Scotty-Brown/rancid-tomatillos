import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

function Movies({movies, showSingleMovie}) {
  let movieCards
  if (!movies.movies) {
    return
  } else {
    movieCards = movies.movies.map(movie => {
    return (
      <MovieCard 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        img={movie.poster_path}
        rating={movie.average_rating}
        showSingleMovie={showSingleMovie}
      />
    )
  })
}
  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies