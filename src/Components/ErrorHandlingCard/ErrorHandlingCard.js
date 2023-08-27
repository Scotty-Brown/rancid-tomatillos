import './ErrorHandlingCard.css'

function ErrorHandlingCard({error}) {
  return (
    <div className='error'>
      <h2>{error}</h2>
      {/* <img src={}></img> */}
    </div>
  )
}

export default ErrorHandlingCard