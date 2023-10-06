import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


function Challenge({id}) {
  const targetTime = new Date();
  targetTime.setDate(targetTime.getDate()+1);
  targetTime.setHours(0, 0, 0, 0);

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      var currentTime = new Date();
      var timeDifference = targetTime - currentTime;
      if (timeDifference <= 0) {
        currentTime = new Date();
        timeDifference = (targetTime - currentTime);
      } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);
  function timetostring(num){
    var numstr = num.toString();
    if(numstr.length === 1){
      numstr = '0'+ numstr;
    }
    return numstr;
  }

  const Challenges = [
    {date:'10-1',src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_dZlhbpl.png?alt=media'},
    {date:'10-2',src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_i4XFH3I.png?alt=media'},
    {date:'10-3',src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_T7arYiU.png?alt=media'},
    {date:'10-4',src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_8tWoYsH.png?alt=media'},
    {date:'10-5',src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_zFP5kGg.png?alt=media'},
    {date:'10-6(TODAY)',src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_FqPRWOA.png?alt=media'},
    {date:'TOMORROW',src:'https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fummd3POvEDfFyeFvVdOMG3OOrwE2%2Ftargets%2Ftarget_jELVrVb.png?alt=media'},
  ]
  const thisimgsrc = Challenges[id-1].src;
  const todaystyle1 = (id!=(Challenges.length-1))?{
  }:{
    transform: 'scale(1.15) translateY(15px)',
  };
  const todaystyle2 = (id!=(Challenges.length-1))?{
    
  }:{
    border:'2px solid yellow',
  };
  const tomorrowlock = (
    <div className="single-targets tomorrowlock" style={todaystyle1}>
    <div className="pill">{Challenges[id-1].date}</div>
        <div className='target-question'>
          <img src='https://cssbattle.dev/images/lock.svg' className='lock'></img>
        <img src="https://cssbattle.dev/images/tv-glitch.png" className='showtest'></img>
        <p>Unlock in</p>
        <div className='counttime'>
          <span className='count'>{timetostring(hour)[0]}</span>
          <span className='count'>{timetostring(hour)[1]}</span>
          :
          <span className='count'>{timetostring(minute)[0]}</span>
          <span className='count'>{timetostring(minute)[1]}</span>
          :
          <span className='count'>{timetostring(second)[0]}</span>
          <span className='count'>{timetostring(second)[1]}</span>
        </div>
        </div>
</div>
  );

  return (id!=Challenges.length)?(
    <div className="single-targets" style={todaystyle1}>
    <div className="pill">{Challenges[id-1].date}</div>
      <a href = {`/play/${id}`} className='target-question' style={todaystyle2}>
      <img src={thisimgsrc} className='showtest'></img>
      <div className="target-footer">
      <div className="score">
          <p>Your hi-score {}</p>
          <h3>Not played</h3>
      </div>
      <button class='button'>
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M16 31L22 37L34 25" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/><path d="M32 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/></svg>
      </button>
      </div>
      </a>
</div>
  ):tomorrowlock;
}

export default Challenge;
