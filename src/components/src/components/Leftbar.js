import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Leftbar(props){
    return (
        <div className="left-barcontent">
            <div className="left-bartop">
                <span className="left-bartoplogo"></span>
            </div>
            <div className=" ">
                <a className="pagebutton homebutton" href="/">☀ home</a>
            </div>
            <div className="">
                <a className="pagebutton targetbutton " href="/">📅 Daily targets</a>
            </div>
            <div className=" ">
                <a className="pagebutton battlebutton" href="/">🔪 Battles</a>
                
            </div>
            <div className=" ">
                <a className="pagebutton leaderbutton" href="/">🏆 Leaderboards</a>

            </div>
            <div className=" ">
                <a className="pagebutton" href="/">learncss</a>
                
            </div>
        </div>
    );
}

export default Leftbar;