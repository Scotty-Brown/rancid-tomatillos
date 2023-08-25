import './MovieCard.css'

function MovieCard({title, img, rating, id, showSingleMovie}) {
  return (
    <div id={id} className='movie-card' onClick={(e) => showSingleMovie(e)}>
      <h2 id={id}>{title}</h2>
      <p id={id}>Rancid Rating - {rating.toFixed(1)} 🍅's</p>
      <img id={id} className='movie-card-image' src={img} />
    </div>
     
    
  )
}
export default MovieCard