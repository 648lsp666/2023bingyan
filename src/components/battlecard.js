import React from "react";
import Battleimage from "./battleimage";
import { Link } from "react-router-dom";

function Battlecard({id}){
    const lastbattleimages = [
        <Battleimage id={`${(id-1)*4+1}`}></Battleimage>,
        <Battleimage id={`${(id-1)*4+2}`}></Battleimage>,
        <Battleimage id={`${(id-1)*4+3}`}></Battleimage>,
        <Battleimage id={`${(id-1)*4+4}`}></Battleimage>,
        ]
    
    
    return (
        <div className="battle-card">
        <div className="lastbattle">
            <div className="lastbattleintro">
                <h3>Battle #{id} - Relative</h3>
                <p>A chill mini battle with 4 targets!</p>
            </div>
            <div className="lastbattlestart">
                <Link to={`/battle/${id}`}>
                <button className="button">Play</button>
                </Link>
            </div>
        </div>
        <div className="lastbattle-q">
            {lastbattleimages}
        </div>
        </div>
);
};

export default Battlecard;