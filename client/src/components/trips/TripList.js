import TripShow from './TripShow';

const TripList = ({ trips, updateTrip, deleteTrip }) => (
  <>
    {/* [
      {id: 1, body: "Kong City", title: 'food'}, 
      {id: 2, body: "Mario City", title: 'mushrooms'}, 
      {id: 3,body: "Peach City", title: 'coins'}, 
    ] */}
    {
      trips.map( t => 
        <TripShow
          key={t.id}
          {...t}
          updateTrip={updateTrip}
          deleteTrip={deleteTrip}
        />
      )
    }
  </>
)

export default TripList;