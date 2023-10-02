import React from 'react';
import { Link } from 'react-router-dom';


function Challenge({id}) {
  return (
    <div className="single-targets">
    <div className="pill"></div>
                <a href = {`/play/${id}`} className='target-question'>
                <img src="https://cssbattle.dev/images/welcome.jpg" ></img>
                <div className="target-footer">
                <div className="score">
                    <p>Your hi-score</p>
                    <h3>Not played</h3>
                </div>
                <button class='button' >?</button>
                </div>
                </a>
</div>
  );
}

export default Challenge;
