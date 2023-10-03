import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Leftbar2(props){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        // 清除事件监听以避免内存泄漏
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);    
      

    const largestwidth = 1400;
    document.querySelector('.left-content')
      //绑定按钮事件；
      const [sign,setsign] = useState(true);
      var style1 = {};
      var logostyle1 = {};
      var style2 = {};
      var logostyle2 = {};
      function showlist(){
        const list1 = document.querySelector('.left-barcontent');
        const list2 = document.querySelector('.left-barcontent2');
        const logo = document.querySelector('.left-bartop');
        if(sign == true){
            style1 = {
                transform: 'translateX(0)',
                transition: '.3s ease',
            }
            logostyle1 = {
                transform: 'translateX(0px)',
                transition: '.3s ease',
            }            
            style2 = {
                transform: 'translateX(0)',
                transition: '.3s ease',
            }
            logostyle2 = {
                transition: '.3s ease',
                transform: 'translateX(0)',
            }
            setsign(false);
        }
        else{
            style2 = {
                transform: 'translateX(-80px)',
                transition: '.3s ease',
            }
            logostyle2 = {
                transform: 'translateX(80px)',
                transition: '.3s ease',
            }
            style1 = {
                transform: 'translateX(-200px)',
                transition: '.3s ease',
            }
            logostyle1 = {
                transform: 'translateX(200px)',
                transition: '.3s ease',
            }
            setsign(true);
        }
        if(list1){
            logo.style.transform = logostyle1.transform;
            list1.style.transition = style1.transition;
            list1.style.transform = style1.transform;
            logo.style.transition = logostyle1.transition;
            list1.style.boxshadow = style1.boxshadow;
        }
        else if(list2){
            logo.style.transform = logostyle2.transform;
            list2.style.transform = style2.transform;
            list2.style.transition = style2.transition;
            logo.style.transition = logostyle2.transition;
        }
      };
  

    const formalleftbar = (       
    <div className="left-barcontent">
    <div className="left-bartop">
     <button class='button' id="showlist" onClick={showlist}>
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/><path d="M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/><path d="M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/><path d="M21 24H43" stroke="#9b9b9b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 38H43" stroke="#9b9b9b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 10H43" stroke="#9b9b9b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button><span className="left-bartoplogo" ></span>
    </div>
    <div className="leftbarbuttons">
        <div className=" ">
            <a className="pagebutton homebutton" href="/"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 44V20L24 4L4 20L4 44H16V26H32V44H44Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M24 44V34" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Home</a>
        <div className="playbuttons">
            <div><p>play</p></div>  
        </div>
        <div className="">
            <a className="pagebutton targetbutton " href="/daily"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M16 31L22 37L34 25" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/><path d="M32 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/></svg>
            Daily targets</a>
        </div>
        <div className=" ">
            <a className="pagebutton battlebutton" href="/battles"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 13L24 4L31 13L26 39H22L17 13Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 39H31" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 39V45" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Battles</a>
            
        </div>
        <div className=" ">
            <a className="pagebutton leaderbutton" href="/leaderborads"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32V36" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 42L18.69 36H29.0425L33 42H15Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/></svg>
                Leaderboards</a>

        </div>
        <div className=" ">
            <a className="pagebutton" href="/">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L24 8L44 13L24 18L4 13Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 14V36" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="34" width="6" height="6" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Learncss</a>
            
        </div>
    </div>  
    </div>
</div>);

const afterleftbar = (<div className="left-barcontent2">
<div className="left-bartop">
    <button class='button' id='showlist' onClick={showlist}>
            <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/><path d="M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/><path d="M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/><path d="M21 24H43" stroke="#9b9b9b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 38H43" stroke="#9b9b9b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 10H43" stroke="#9b9b9b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button><span className="left-bartoplogo" ></span>
</div>
<div className="leftbarbuttons">
    <div className=" ">
        <a className="pagebutton homebutton" href="/"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 44V20L24 4L4 20L4 44H16V26H32V44H44Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M24 44V34" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
    <div className="playbuttons">
        <div><p>play</p></div>  
    </div>
    <div className="">
        <a className="pagebutton targetbutton " href="/daily"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M16 31L22 37L34 25" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/><path d="M32 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/></svg>
        </a>
    </div>
    <div className=" ">
        <a className="pagebutton battlebutton" href="/battles"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 13L24 4L31 13L26 39H22L17 13Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 39H31" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 39V45" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
        
    </div>
    <div className=" ">
        <a className="pagebutton leaderbutton" href="/leaderborads"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32V36" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 42L18.69 36H29.0425L33 42H15Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/></svg>
            </a>

    </div>
    <div className=" ">
        <a className="pagebutton" href="/">
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L24 8L44 13L24 18L4 13Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 14V36" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="34" width="6" height="6" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        
    </div>
</div>  
</div>
</div>
);


    return (
        <div>
       {windowWidth > largestwidth? formalleftbar:afterleftbar}
       </div>
    );
}

export default Leftbar2;