import logo from './logo.svg';
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Data  from './components/Data';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Profile/>
      <Data/>
      <Contact/>
      <Portfolio/>
    </div>
  );
}

export default App;