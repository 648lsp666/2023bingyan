import React from "react";
import Battleimage from "./battleimage";

function Battlecard({id}){
    const lastbattleimages = [
        <Battleimage id='1' key='1'></Battleimage>,
        <Battleimage id='1' key='1'></Battleimage>,
        <Battleimage id='1' key='1'></Battleimage>,
        <Battleimage id='1' key='1'></Battleimage>,
        ]

    return (
        <div className="battle-card">
        <div className="lastbattle">
            <div className="lastbattleintro">
                <h3>Battle #27 - Relative</h3>
                <p>A chill mini battle with 4 targets!</p>
            </div>
            <div className="lastbattlestart">
                <button className="button">play</button>
            </div>
        </div>
        <div className="lastbattle-q">
            {lastbattleimages}
        </div>
        </div>
);
};

export default Battlecard;