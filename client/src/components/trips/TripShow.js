import { useState } from 'react';
import TripForm from './TripForm';

const TripShow = ({ id, name, days, updateTrip, deleteTrip }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h3>{name}</h3>
      <p>{days}</p>
      { editing ?
        <>
          <TripForm 
            id={id}
            namee={name}
            days={days}
            updateTrip={updateTrip}
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
      <button onClick={() => deleteTrip(id)}>
        Delete
      </button>
    </>
  )
}

export default TripShow;