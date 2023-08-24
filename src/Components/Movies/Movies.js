import MovieCard from '../MovieCard/MovieCard'

function Movies({movies}) {
  const movieCards = movies.movies.map(movie => {
    return (
      <MovieCard 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        img={movie.poster_path}
        rating={movie.average_rating}
      />
    )
  })

  return (
    <div>
      {movieCards}
    </div>
  )
}

export default Movies