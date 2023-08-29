import './SingleMovieCard.css'

function SingleMovieCard({title, tagLine, releaseDate, genres, id, img, rating, budget, revenue, runTime, overview, goBack, displayVideo}) {

const video = displayVideo(id)


  return (
    <div className='single-movie-card'> 
      <img className='movie-card-image' src={img} />
      <div className='single-card-body-all'>
        <div className='single-card-body-text'>
          <h2>{title}</h2>
          <h3>{tagLine}</h3>
          <p>Release Date: {releaseDate}</p>
          <p>Genres: {genres.join(' | ').split()}</p>
          <p>Rancid Rating - {rating.toFixed(1)} 🍅s</p>
          <p>Budget: ${budget.toLocaleString()}</p>
          <p>Revenue: ${revenue.toLocaleString()}</p>
          <p>Run Time: {runTime} minutes</p>
          <p>{overview}</p>
          <button onClick={goBack}>Go Back</button>
        </div>
      <iframe title="Embedded youtube trailer" width="560" height="315" src={video} allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default SingleMovieCard