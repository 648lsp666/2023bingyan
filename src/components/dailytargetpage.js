import React from "react";
import Header from "./Header";
import Leftbar from "./Leftbar";
import Scrolltarget from "./scrolltarget";
import Challenge from "./Challenge";
import Footer from "./footer";
function Dailypage(){
    const previous = [
        <Challenge id='1'></Challenge>,
        <Challenge id='2'></Challenge>,
        <Challenge id='3'></Challenge>,
        <Challenge id='4'></Challenge>,
        <Challenge id='5'></Challenge>,
    ]
    return (
        <div className='app'>
        <Leftbar></Leftbar>
        <div className='content'>
          <Header></Header>
            <div className="homepage">
                <div className="dailypageheader">
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z" fill="none" stroke="#edf115" stroke-width="4" stroke-linejoin="round"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z" stroke="#edf115" stroke-width="4" stroke-linejoin="round"/><path d="M16 31L22 37L34 25" stroke="#edf115" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5V13" stroke="#edf115" stroke-width="4" stroke-linecap="round"/><path d="M32 5V13" stroke="#edf115" stroke-width="4" stroke-linecap="round"/></svg>
                    <h1>Daily Targets</h1>
                    <p>A new target everyday for you to unwind. No leaderboards, no competition</p>
                </div>
                <Scrolltarget></Scrolltarget>
                <div class="previoustargets">
                    <div class="previousheader">
                        <h2>Previous targets</h2>
                        <p>Want more? Play the previously released targets. You can also view the top solutions of all previous targets
</p>
                    </div>
                    <div className="previoustargetsline">
                        {previous}
                    </div>
                </div>
            </div>
            <Footer></Footer>
          </div>
        </div>
    )
}

export default Dailypage;