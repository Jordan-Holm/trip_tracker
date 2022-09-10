import LocationShow from './LocationShow';

const LocationList = ({ locations, updateLocation }) => (
  <>
    {/* [
      {id: 1, body: "Taiwan", name:}, 
      {id: 2, body: "United Kingdom", name:}, 
      {id: 3,body: "Korea", name:}, 
    ] */}
    {
      locations.map( t => 
        <LocationShow
          key={t.id}
          {...t}
          updateLocation={updateLocation}
        />
      )
    }
  </>
)

export default LocationList;