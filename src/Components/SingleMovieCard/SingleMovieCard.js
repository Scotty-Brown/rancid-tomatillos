import './SingleMovieCard.css'

function SingleMovieCard({title, id, img, rating, goBack, displayVideo}) {

const video = displayVideo(id)


  return (
    <div className='single-movie-card'> 
      <img className='movie-card-image' src={img} />
      <div className='single-card-body-all'>
        <div className='single-card-body-text'>
          <h2>Judy Booty: Software Dev</h2>
          <p>Rancid Rating - {rating.toFixed(1)} 🍅's</p>
          <p>In the eccentric realm of Codeberg, there resided a software developer like no other – Judy Booty. Her programming prowess was equaled only by her legendary sense of humor. You see, Judy had an uncanny knack for making lines of code burst into fits of binary laughter. One day, while debugging a particularly stubborn software glitch, she muttered, "Hey there, buggy code, why the long loop?" To everyone's astonishment, the code on her screen erupted with a series of beeps and boops that sounded suspiciously like laughter. News of Judy's "comedic debugging" spread like wildfire, and soon programmers from all corners were sending her lines of code, hoping for a chuckle. Her keyboard howled with laughter as if it were possessed by a techno-spirit. They say that even the AI bots had a hard time keeping a straight binary face around her.</p>
          <button onClick={goBack}>Go Back</button>
        </div>
      <iframe title="Embedded youtube trailer" width="560" height="315" src={video} allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default SingleMovieCard