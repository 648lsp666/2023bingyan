import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Leftbar(props){
    return (
        <div className="left-barcontent">
            <div className="left-bartop">
                <span className="left-bartoplogo" ></span>
            </div>
            <div className=" ">
                <a className="pagebutton homebutton" href="/"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M38.9603 9.00977L36.5 11.4842" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M11.0674 36.7451L9.02051 38.8037" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M24 41.3533L24 44.3533" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M43.9998 23.3535L39.9998 23.3535" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M37.5324 36.3361L39.9998 38.8035" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535" fill="#fff"/><path d="M4.00019 24.3535L8.00019 24.3535" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M10.0444 9.00974L12.0972 11.0625" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M24 3.35371L24 7.35371" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>  home</a>
            </div>
            <div className="">
                <a className="pagebutton targetbutton " href="/daily-targets"><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 13L24 4L31 13L26 39H22L17 13Z" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 39H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 39V45" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg> Daily targets</a>
            </div>
            <div className=" ">
                <a className="pagebutton battlebutton" href="/battles">🔪 Battles</a>
                
            </div>
            <div className=" ">
                <a className="pagebutton leaderbutton" href="/leaderborads">🏆 Leaderboards</a>

            </div>
            <div className=" ">
                <a className="pagebutton" href="/">learncss</a>
                
            </div>
        </div>
    );
}

export default Leftbar;