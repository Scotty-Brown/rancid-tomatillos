import './Search.css'

function Search({ setSearchInput }) {
  function handleChange(e) {
    setSearchInput(e.target.value)
  }
 
  return (
    <section className='search'>
      <input 
        className='input-field'
        type='text' 
        placeholder='Search Movies'
        onChange={handleChange} />
    </section>
  )
}

export default Search