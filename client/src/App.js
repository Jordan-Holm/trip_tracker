import { Routes, Route } from 'react-router-dom';
import Users from './components/users/Users';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Trips from './components/trips/Trips';

// this is defining your navigation routes for front end
// if you want a new page, you have to have a route 
const App = () => (
  <>  
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/users' element={<Users />} />
      {/* :subId is a placeholde for the parent id */}
      <Route path='/:userId/trips' element={<Trips />} />
      {/* mainly for all other routes go here */}
      <Route path='/*' element={<Nomatch />} />
    </Routes>
    {/* <Footer /> */}
  </>
)

export default App;