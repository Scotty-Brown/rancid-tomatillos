import './SingleMovieCard.css'

function SingleMovieCard({title, img, rating}) {
  return (
    <div> 
      <h2>{title}</h2>
      <p>Rancid Rating - {rating.toFixed(1)} 🍅's</p>
      <img className='movie-card-image' src={img} />
    </div>
  )
}

export default SingleMovieCard