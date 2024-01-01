import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./components/navbar.css";
import Home from './pages/home.js';
import NavBar from './components/navbar.js';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' Component={ () =>{ window.location.href="/.auth/login/aad" }} />
        <Route path='/logout' Component={ () =>{ window.location.href="/.auth/logout" }} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
