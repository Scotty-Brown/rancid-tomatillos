import './ErrorHandlingCard.css'
import grumpyCat from '../../assets/cyrus-chew-Dl39g6QhOIM-unsplash.jpg'
import PropTypes from 'prop-types'

function ErrorHandlingCard({error}) {
  return (
    <div className='error'>
      <h2>{error}</h2>
      <img src={grumpyCat}></img>
    </div>
  )
}

export default ErrorHandlingCard

ErrorHandlingCard.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
}