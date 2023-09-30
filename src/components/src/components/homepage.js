import React from "react";

function homepage(){

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
                    <div className="targests-scroll">
                        <div className="targets">
                            <div className="single-targets">
                                <div className="pill">8-29</div>
                                    <div className="target-question">
                                        <a></a>
                                            <img src="https://cssbattle.dev/images/welcome.jpg" ></img>
                                            <div className="target-footer">
                                            <div className="score">
                                                <p>Your hi-score</p>
                                                <h3>Not played</h3>
                                            </div>
                                            <button class='button'>📕</button>
                                            </div>

                                </div>            
                            </div>
                        </div>
                        <div className="targets today"></div>
                    </div>
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