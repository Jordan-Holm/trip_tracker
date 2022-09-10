import { useState, useEffect } from 'react';

const TripForm = ({ addTrip, id, name, days, setEdit, updateTrip }) => {
  const [trip, setTrip] = useState({ name: '', days: '' })

  useEffect( () => {
    if (id) {
      setTrip({ name, days })
    }
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTrip(id, trip)
      setEdit(false)
    } else {
      addTrip(trip)
    }
    setTrip({ name: '', days: '' })
  }

  return (
    <>
      <h2>{id ? 'Edit' : 'Create'} Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>Trip Name</label>
        {/* string */}
        <input 
          name='name'
          value={trip.name}
          onChange={(e) => setTrip({ ...trip, name: e.target.value })}
          required
        />
        {/* number */}
        {/* <input 
          type='number'
          name='age'
          value={topic.age}
          onChange={(e) => setTopic({ ...topic, age: e.target.value })}
          required
        /> */}
        {/* boolean */}
        {/* <input 
          type='checkbox'
          name='friend'
          value={topic.friend}
          onChange={(e) => setTopic({ ...topic, friend: e.target.value })}
          required
        /> */}
        <label>Days</label>
        {/* text */}
        <textarea
          name='days'
          value={trip.days}
          onChange={(e) => setTrip({ ...trip, days: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TripForm;