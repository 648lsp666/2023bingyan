
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Leftbar from './Leftbar';
import Homepage from './homepage';
import Dailypage from './dailytargetpage';

  function Homebarpages(props) {
    return (
      
        <div className='app'>
        <Leftbar></Leftbar>
        <div className='content'>
          <Header></Header>
          
          <Routes>
            <Route path='/' element={<Homepage/>} />
          </Routes>
          
          </div>
        </div>
    
    );
    
  }


export default Homebarpages;
