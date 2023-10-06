import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Leftbar(props){
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

      function HoverDivs() {
        const [hoveredDiv, setHoveredDiv] = useState(null);
      
        // 处理鼠标进入某个div的事件
        const handleMouseEnter = (divNumber) => {
          setHoveredDiv(divNumber);
        };
      
        return (
            <div>
            <div className="">
            <a 
            className="pagebutton homebutton smallbutton" 
            href="/"
            onMouseEnter={()=>handleMouseEnter(1)}
            onMouseLeave={()=>setHoveredDiv(null)}
            ><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 44V20L24 4L4 20L4 44H16V26H32V44H44Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M24 44V34" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span 
            className="labelfor"
            style={{
                opacity : hoveredDiv === 1? 1:0,
                left: hoveredDiv === 1?80+'%':0,
            }}>
                Home
            </span>
            </a>
            </div>
            <p>play</p> 
            <div className="">
                <a 
                className="pagebutton targetbutton smallbutton"
                href="/daily"
                onMouseEnter={()=>handleMouseEnter(2)}
                onMouseLeave={()=>setHoveredDiv(null)}
                ><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M16 31L22 37L34 25" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/><path d="M32 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/></svg>
                <span 
                className="labelfor"
                style={{
                    opacity : hoveredDiv === 2? 1:0,
                    left: hoveredDiv === 2?80+'%':0,
                }}>
                    Daily Targets
                </span>
                </a>
            </div>
            <div className=" ">
                <a 
                className="pagebutton battlebutton smallbutton"
                href="/battles"
                onMouseEnter={()=>handleMouseEnter(3)}
                onMouseLeave={()=>setHoveredDiv(null)}
                ><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 13L24 4L31 13L26 39H22L17 13Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 39H31" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 39V45" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span 
                className="labelfor"
                style={{
                    opacity : hoveredDiv === 3? 1:0,
                    left: hoveredDiv === 3?80+'%':0,
                }}>
                    Battles
                </span>    
                </a>
            </div>
            <div className=" ">
                <a 
                className="pagebutton leaderbutton smallbutton" 
                href="/leaderborads"
                onMouseEnter={()=>handleMouseEnter(4)}
                onMouseLeave={()=>setHoveredDiv(null)}
                ><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32V36" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 42L18.69 36H29.0425L33 42H15Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/></svg>
                <span 
                className="labelfor"
                style={{
                    opacity : hoveredDiv === 4? 1:0,
                    left: hoveredDiv === 4?80+'%':0,
                }}>
                    Leaderboards
                </span>    
                </a>
            </div>
            <div className=" ">
                <a 
                className="pagebutton smallbutton" 
                href="/"
                onMouseEnter={()=>handleMouseEnter(5)}
                onMouseLeave={()=>setHoveredDiv(null)}
                >
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 13L24 8L44 13L24 18L4 13Z" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 14V36" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="34" width="6" height="6" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span 
                className="labelfor"
                style={{
                    opacity : hoveredDiv === 5? 1:0,
                    left: hoveredDiv === 5?80+'%':0,
                }}>
                    Learn CSS
                </span>   
                </a>
            </div>
            </div>
        );
    };  

    const largestwidth = 1400;


    const formalleftbar = (       
    <div className="left-barcontent">
    <div className="left-bartop">
        <span className="left-bartoplogo" ></span>
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
    <span className="left-bartoplogo" ></span>
</div>
<div className="leftbarbuttons">
        <HoverDivs></HoverDivs>
</div>
</div>
);


    return (
        <div>
       {windowWidth > largestwidth? formalleftbar:afterleftbar}
       </div>
    );
}

export default Leftbar;