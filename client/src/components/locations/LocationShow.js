import { useState } from 'react';
import LocationForm from './LocationForm';

const LocationShow = ({ id, name, whereabouts, updateLocation }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h3>{name}</h3>
      <p>{whereabouts}</p>
      { editing ?
        <>
          <LocationForm 
            id={id}
            title={name}
            body={whereabouts}
            updateLocation={updateLocation}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </> 
        :
        <button onClick={() => setEdit(true)}>
          Edit
        </button>
      }
      <button>Delete</button>
      <button>Comments</button>
    </>
  )
}

export default LocationShow;