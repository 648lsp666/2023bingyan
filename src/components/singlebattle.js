import React from 'react';
import Header from './Header';
import Leftbar from './Leftbar';
import { useParams } from 'react-router-dom';
import Battlepagetest from './battlepagetest';
import Playercard from './playercard';
function Singlebattle() {
    const {id} = useParams();
    //axios«Î«Û
  return (
    <div className='app'>
    <Leftbar></Leftbar>
    <div className='content'>
      <Header></Header>
    <div className='homepage'>
        <div className='dailypageheader'>
            <h1>Battle #{id} - Relative</h1>
            <p>A chill mini battle with 4 targets!</p>
        </div>
        <div className='singlebattlecontent'>
        <div className='singlebattle'>
            <h1>Battle tests</h1>
            <Battlepagetest id={`${(id-1)*4+1}`}></Battlepagetest>
            <Battlepagetest id={`${(id-1)*4+2}`}></Battlepagetest>
            <Battlepagetest id={`${(id-1)*4+3}`}></Battlepagetest>
            <Battlepagetest id={`${(id-1)*4+4}`}></Battlepagetest>
        </div>   
        <div className='battleleaderboard'>
            <h1>This Battle Leader</h1>
            <Playercard id='1'></Playercard>
            <Playercard id='2'></Playercard>
            <Playercard id='3'></Playercard>
            <Playercard id='4'></Playercard>
            <Playercard id='5'></Playercard>
        </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Singlebattle;
