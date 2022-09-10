import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LocationList from './LocationList';
import LocationForm from './LocationForm';

const Locations = () => {
  const [locations, setLocations] = useState([])

  const { tripId } = useParams()

  useEffect( () => {
    axios.get (`/api/trips/${tripId}/locations`)
      .then( res => setLocations(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addLocation = (location) => {
    axios.post(`/api/trips/${tripId}/locations`, { location })
      .then( res => setLocations([...locations, res.data]))
      .catch( err => console.log(err) )
  }

  const updateLocation = (id, location) => {

  }

  const deleteLocation = (id) => {

  }

  return (
    <>
      <h1>Locations</h1>
      <LocationForm 
        addLocation={addLocation}
      />
      <LocationList 
        locations={locations}
      />
    </>
  )
}

export default Locations;