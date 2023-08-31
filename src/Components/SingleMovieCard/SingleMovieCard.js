import { Link, useParams } from 'react-router-dom'
import './SingleMovieCard.css'

function SingleMovieCard({title, tagLine, releaseDate, genres, id, img, backdropImg, rating, budget, revenue, runTime, overview, goBack, displayVideo}) {
  // const video = displayVideo(id)
  return (
    <article className='single-movie-card' style={{'--backdrop-img': `url(${backdropImg})`}}> 
      <div className='single-card-body-all'>
          <img className='single-movie-card-image' src={img} alt={title}/>
          <section className='single-card-body-text'>
            <div className='single-movie-headings'>
              <h2>{title}</h2>
              <h3>Tagline: "{tagLine} "</h3>
            </div>
            <div className='single-card-description'>
              <p>Release Date: {releaseDate}</p>
              <p>Genres: {genres?.join(' | ').split()}</p>
              <p>Rancid Rating - {rating?.toFixed(1)} 🍅s</p>
              <p>Budget: ${budget?.toLocaleString()}</p>
              <p>Revenue: ${revenue?.toLocaleString()}</p>
              <p>Run Time: {runTime} minutes</p>
              <p>{overview}</p>
              <Link to={'/'} className='button'>Go Back</Link>
            </div>
          </section>
      </div>
    </article>
  )
}

export default SingleMovieCard