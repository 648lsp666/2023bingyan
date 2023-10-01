import React from 'react';
import { useCode } from './playpage';

function Output() {
    const data = useCode();

  return (
    <div className='play-content output'>
        <div className='item-header outputh'><p>Editor</p></div>
        <div className='outputchart' id="outputchart">

        </div>
      </div>

  );
}

export default Output;
