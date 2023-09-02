import './ErrorHandlingCard.css'
import grumpyCat from '../../assets/cyrus-chew-Dl39g6QhOIM-unsplash.jpg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function ErrorHandlingCard({error}) {
  return (
    <div className='error'>
      <Link className='retry-button' to='/'>Retry</Link>
      <h2>{error}</h2>
      <img src={grumpyCat}></img>
    </div>
  )
}

export default ErrorHandlingCard

ErrorHandlingCard.propTypes = {
  error: PropTypes.string.isRequired
}