import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container";

import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar/>
      <Container/>
    </div>
  </Router>
  );
}

export default App;
