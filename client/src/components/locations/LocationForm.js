import { useState } from 'react';

const LocationForm = ({ addLocation }) => {
  const [location, setLocation] = useState({ name: '', whereabouts: '' })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addLocation(location)
    setLocation({ name: '', whereabouts: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* string */}
        <input 
          name='title'
          value={location.name}
          onChange={(e) => setLocation({...location, name: e.target.value })}
          required
        />
        
        <label>Body</label>
        {/* text */}
        <textarea
          name='body'
          value={location.body}
          onChange={(e) => setLocation({ ...location, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default LocationForm;