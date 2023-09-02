import { Link } from 'react-router-dom'
import './SingleMovieCard.css'

function SingleMovieCard({ singleMovie }) {

  return (
    <article className='single-movie-card' style={{'--backdrop-img': `url(${singleMovie.movie.backdrop_path})`}}> 
      <div className='single-card-body-all'>
          <img className='single-movie-card-image' src={singleMovie.movie.poster_path} alt={singleMovie.movie.title}/>
          <section className='single-card-body-text'>
            <div className='single-movie-headings'>
              <h2>{singleMovie.movie.title}</h2>
              <h3>Tagline: "{singleMovie.movie.tagline} "</h3>
            </div>
            <div className='single-card-description'>
              <p>Release Date: {singleMovie.movie.release_date}</p>
              <p>Genres: {singleMovie.movie.genres?.join(' | ').split()}</p>
              <p>Rancid Rating - {singleMovie.movie.average_rating?.toFixed(1)} 🍅s</p>
              <p>Budget: ${singleMovie.movie.budget?.toLocaleString()}</p>
              <p>Revenue: ${singleMovie.movie.revenue?.toLocaleString()}</p>
              <p>Run Time: {singleMovie.movie.runtime} minutes</p>
              <p>{singleMovie.movie.overview}</p>
              <Link to={'/'} className='button'>Go Back</Link>
            </div>
          </section>
      </div>
     </article>
  )
}

export default SingleMovieCard


