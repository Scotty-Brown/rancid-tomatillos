import './SingleMovie.css';
import SingleMovieCard from '../SingleMovieCard/SingleMovieCard';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getSingleMovie, getMovieVideo } from '../../apiCalls';
import PropTypes from 'prop-types';


function SingleMovie({ setError, setLoading }) {

  const [singleMovie, setSingleMovie] = useState(null)
  const [video, setVideo] = useState(null)
  const { id } = useParams()

  function showSingleMovie(id) {
    setLoading(true)
    getSingleMovie(id)
    .then(data => {
      setSingleMovie(data)
      setLoading(false)
    })
    .catch(error => {
      setError(`Request failed - ${error.message}`)
      setLoading(false)
    })
  }

  function getVideoLink(id) {
    getMovieVideo(id)
    .then(data => {
      const trailer = data.videos.find((entry) => entry.type === "Trailer")
      const link = `https://www.youtube.com/watch?v=${trailer.key}`
      setVideo(link)
    })
    .catch(error => {
      setError(`Request failed - ${error.message}`)
    })
  }

  function VideoButton(link) {
    return (
      <div>
        <Link to={link.link} target="_blank" rel="noopener noreferrer">
          <button className='button'>Watch Trailer</button>
        </Link>
      </div>
    );
  }

  useEffect(() => {
    showSingleMovie(id)
    getVideoLink(id)
  }, [id])


  return singleMovie && (
    <SingleMovieCard VideoButton={VideoButton} video={video} singleMovie={singleMovie} />
  ) 
}

export default SingleMovie;

SingleMovieCard.propTypes = {
  singleMovie: PropTypes.shape({
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string),
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      average_rating: PropTypes.number,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      runtime: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
    })
  })
};