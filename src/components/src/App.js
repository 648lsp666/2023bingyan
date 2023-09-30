import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Leftbar from './components/Leftbar';
import './css/home.css'
import Homepage from './components/homepage';

  function App(props) {
    
    return (
      
        <div className='app'>
        <Leftbar></Leftbar>
        <div className='content'>
          <Header></Header>
          <Homepage></Homepage>
        </div>
      </div>
      
    );
    
  }


export default App;
