import './ErrorHandlingCard.css'
import grumpyCat from '../../assets/cyrus-chew-Dl39g6QhOIM-unsplash.jpg'

function ErrorHandlingCard({error}) {
  return (
    <div className='error'>
      <h2>{error}</h2>
      <img src={grumpyCat}></img>
    </div>
  )
}

export default ErrorHandlingCard