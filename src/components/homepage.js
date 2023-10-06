import React from "react";
import Scrolltarget from "./scrolltarget";
import Battlecard from "./battlecard";

function homepage(props){

    return(
        <div className="homepage">
            <div className="homeintro">
                <img src="https://cssbattle.dev/images/welcome.jpg" className="introimg"></img>
                <div className="introtext">
                    <h1>welcome to cssbottle</h1>
                    <p>The funnest multiplayer game with 300K+ web designers & developers. Replicate the target images using CSS - the shorter your code, the higher your score! Happy coding!</p>
                    <a href="/login">
                    <button className="button" style={{background:'#0060ca'}}>
                        signup/login
                        </button>
                        </a>
                </div>
            </div>
            <div className="daily-targets">
                <div className="daily-intro">
                    <div className="label">
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z" stroke="#f1f1f1" stroke-width="4" stroke-linejoin="round"/><path d="M16 31L22 37L34 25" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/><path d="M32 5V13" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round"/></svg>
                    </div>
                    <div className="introtext">
                        <h2>Daily targets</h2>
                        <p>
A new target everyday for you to unwind. No leaderboards, no competition.</p>
                    </div>
                    <a href="/daily">
                    <button className="button">View all daily targets</button>
                    </a>
                </div>
                <Scrolltarget></Scrolltarget>
            </div>
            <div className="battles">
                <div className="battles-intro">
                    <div className="label">
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 13L24 4L31 13L26 39H22L17 13Z" fill="none" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 39H31" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 39V45" stroke="#f1f1f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                    <div className="introtext">
                        <h2>Latest battle</h2>
                        <p>Compete with players around the world in this nail-biting CSS Battle
</p>
                    </div>
                    <a href="/battles">
                    <button className="button">View all battles</button>
                    </a>
                        <button className="button">Host a private battle</button>
                </div>
                <Battlecard id='1'></Battlecard>
            </div>
        </div>

    )
}

export default homepage;