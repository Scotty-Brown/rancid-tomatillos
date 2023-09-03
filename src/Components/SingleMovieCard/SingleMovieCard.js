import { Link } from 'react-router-dom'
import './SingleMovieCard.css'

function SingleMovieCard({ singleMovie, VideoButton, video }) {

  return (
    <article className='single-movie-card' style={{'--backdrop-img': `url(${singleMovie.movie.backdrop_path})`}}> 
      <div className='single-card-body-all'>
          <img className='single-movie-card-image' src={singleMovie.movie.poster_path} alt={singleMovie.movie.title}/>
          <section className='single-card-body-text'>
            <div className='single-movie-headings'>
              <h2 className='single-movie-title'>{singleMovie.movie.title}</h2>
              <h3> "{singleMovie.movie.tagline} "</h3>
            </div>
            <div className='single-card-description'>
              <div className='align-content-left'>
                <p><span className='key'>Release Date</span>: {singleMovie.movie.release_date}</p>
                <p><span className='key'>Genres</span>: {singleMovie.movie.genres?.join(' | ').split()}</p>
                <p><span className='key'>Rancid Rating</span>- {singleMovie.movie.average_rating?.toFixed(1)} 🍅s</p>
                <p><span className='key'>Budget</span>: ${singleMovie.movie.budget?.toLocaleString()}</p>
                <p><span className='key'>Revenue</span>: ${singleMovie.movie.revenue?.toLocaleString()}</p>
                <p><span className='key'>Run Time</span>: {singleMovie.movie.runtime} minutes</p>
              </div>
              <p>{singleMovie.movie.overview}</p>
              <VideoButton link={video} />
              <Link to={'/'} className='button go-back'>Go Back</Link>
            </div>
          </section>
      </div>
     </article>
  )
}

export default SingleMovieCard


