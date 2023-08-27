import './MovieCard.css'

function MovieCard({title, img, rating, id, showSingleMovie}) {
  return (
    <div className='movie-card' onClick={() =>{
      showSingleMovie(id)
      }}>
      <h2>{title}</h2>
      <p>Rancid Rating - {rating.toFixed(1)} 🍅's</p>
      <img className='movie-card-image' src={img} />
    </div>
     
    
  )
}
export default MovieCard