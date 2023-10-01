import React from "react";
import Challenge from "./Challenge";

function homepage(props){
    const dailyChallenges = [
        <Challenge id = "1" key="1"/>,
        <Challenge id = "2" key="2"/>,
        <Challenge id = "3" key="3"/>,
        <Challenge id = "4" key="4"/>,
        <Challenge id = "4" key="4"/>,
        <Challenge id = "4" key="4"/>,
        <Challenge id = "4" key="4"/>,   
    ];


    return(
        <div className="homepage">
            <div className="homeintro">
                <img src="https://cssbattle.dev/images/welcome.jpg" className="introimg"></img>
                <div className="introtext">
                    <h1>welcome to cssbottle</h1>
                    <p>The funnest multiplayer game with 300K+ web designers & developers. Replicate the target images using CSS - the shorter your code, the higher your score! Happy coding!</p>
                    <button className="button">signup/login</button>
                </div>
            </div>
            <div className="daily-targets">
                <div className="daily-intro">
                    <button className="button">📅</button>
                    <div className="introtext">
                        <h2>Daily targets</h2>
                        <p>
A new target everyday for you to unwind. No leaderboards, no competition.</p>
                    </div>
                    <button className="button">View all daily targets</button>
                </div>
                <div className="targets-card">
                    <div className="targets-scroll">
                            {dailyChallenges}
                        <div className="targets today"></div>
                    </div>
                    <div className="daily-targets-shadowed"></div>
                </div>
            </div>
            <div className="battles">
                <div className="battles-intro">
                    <button class='button'>🔪</button>
                    <div className="introtext">
                        <h2>Latest battle</h2>
                        <p>Compete with players around the world in this nail-biting CSS Battle
</p>
                    </div>
                    
                    <button className="button">View all battles</button>
                        <button className="button">Host a private battle</button>
                </div>
                <div className="battle-card">
                    <div className="lastbattle"></div>
                    <div className="lastbattle-q"></div>
                </div>
            </div>
        </div>

    )
}

export default homepage;