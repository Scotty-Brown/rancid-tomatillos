import './MovieCard.css'

function MovieCard({title, img, rating}) {
  return (
    <article className='movie-card'>
      <h2>{title}</h2>
      <img className='movie-card-image' src={img} />
      <p>{rating}</p>
    </article>
     
    
  )
}
export default MovieCard