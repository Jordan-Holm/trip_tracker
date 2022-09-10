import Locations from './components/locations/Locations'

import { Routes, Route } from 'react-router-dom';
//import Users from './components/users/Users';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/NavBar';
import Trips from './components/trips/Trips';
import Location from './components/locations/Locations';

// this is defining your navigation routes for front end
// if you want a new page, you have to have a route 
const App = () => (
  <>  
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
 {/* <Route path='/users' element={<Users />} /> */}
      {/* :subId is a placeholde for the parent id */}
      {/* <Route path='/:userId/trips' element={<Trips />} /> */}
      {/* mainly for all other routes go here */}
      <Route path='/*' element={<NoMatch />} />
    </Routes>
    {/* <Footer /> */}
  </>
)

export default App;