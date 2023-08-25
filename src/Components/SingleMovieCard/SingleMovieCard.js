import './SingleMovieCard.css'

function SingleMovieCard({title, img, rating, goBack}) {
  return (
    <div className='single-movie-card'> 
      <h2>{title}</h2>
      <p>Rancid Rating - {rating.toFixed(1)} 🍅's</p>
      <img className='movie-card-image' src={img} />
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default SingleMovieCard