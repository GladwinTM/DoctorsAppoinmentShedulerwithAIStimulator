import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import DoctorProfile from './components/DoctorProfile';
import About from './components/About';


function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/doctors/:id' element={<DoctorProfile/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
