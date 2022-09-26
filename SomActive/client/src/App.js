import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
// import Test from './components/Test';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NavbarCompLoggedIn from './components/NavbarLoggedIn';
import Footer from './components/Footer';
import WorkoutsAerobic from './components/WorkoutsAerobic';
import WorkoutsAnaerobic from './components/WorkoutsAnaerobic';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = boolean => {
    setIsAuthenticated(boolean)
  }
  
  return (
    <div className="App">
      
      <Router>
        {!isAuthenticated ? (<Navbar setAuth={setAuth}/> ): (
              <NavbarCompLoggedIn setAuth={setAuth }/>
            ) }
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path='/home' element={<Home />} /> */}
            <Route exact path='/login' element={!isAuthenticated ? (<Login setAuth={setAuth}/> ): (
              <Navigate to='/dashboard'/>
            ) } />
            <Route exact path='/register' element={!isAuthenticated ? (<Register setAuth={setAuth}/> ): (
              <Navigate to='/dashboard'/>
            ) }/>
            <Route exact path='/dashboard' element={isAuthenticated ? (<Dashboard setAuth={setAuth}/> ): (
              <Navigate to='/login'/>
            ) } />
            <Route exact path='/workouts/aerobic' element={isAuthenticated ? (<WorkoutsAerobic setAuth={setAuth}/> ): (
              <Navigate to='/login'/>
            ) } />
            <Route exact path='/workouts/anaerobic' element={isAuthenticated ? (<WorkoutsAnaerobic setAuth={setAuth}/> ): (
              <Navigate to='/login'/>
            ) } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
