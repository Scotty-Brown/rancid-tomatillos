import './Search.css'

function Search({ setSearchInput }) {
  function handleChange(e) {
    setSearchInput(e.target.value)
  }

  return (
    <section className='search'>
      <label for='search' ></label>
      <input 
        id='search'
        className='input-field'
        type='text' 
        placeholder='Enter Movie Here....'
        onChange={handleChange}
      />
    </section>
  )
}

export default Search