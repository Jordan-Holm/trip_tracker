import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TripList from './TripList';
import TripForm from './TripForm';

const Trips = () => {
  const [trips, setTrips] = useState([])

  const { userId } = useParams()

  useEffect( () => {
    axios.get(`/api/users/${userId}/trips`)
      .then( res => setTrips(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addTrip = (trip) => {
    axios.post(`/api/users/${userId}/trips`, { trip })
      .then( res => setTrips([...trips, res.data]))
      .catch( err => console.log(err) )
  }

  const updateTrip = (id, trip) => {
    axios.put(`/api/users/${userId}/trips/${id}`, { trip })
      .then(res => {
        const newUpdatedTrips = trips.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setTrips(newUpdatedTrips)
      })
      .catch( err => console.log(err) )
  }

  const deleteTrip = (id) => {
    axios.delete(`/api/users/${userId}/trips/${id}`)
      .then( res => {
        setTrips( trips.filter( t => t.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>Trips</h1>
      <TripForm 
        addTrip={addTrip}
      />
      <TripList 
        trips={trips}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      />
    </>
  )
}

export default Trips;