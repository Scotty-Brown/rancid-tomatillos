import './SingleMovieCard.css'

function SingleMovieCard({title, id, img, rating, goBack, displayVideo}) {

const video = displayVideo(id)


  return (
    <div className='single-movie-card'> 
      <h2>{title}</h2>
      <p>Rancid Rating - {rating.toFixed(1)} 🍅's</p>
      <img className='movie-card-image' src={img} />
      <button onClick={goBack}>Go Back</button>
      <iframe title="Embedded youtube trailer" width="560" height="315" src={video} allowFullScreen></iframe>
    </div>
  )
}

export default SingleMovieCard