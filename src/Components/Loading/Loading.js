import './Loading.css'

function Loading ({loading}) {
  return loading && (
    <div >
      <p aria-label='loading' className='loading'>🍅</p>
    </div>
  )
}

export default Loading