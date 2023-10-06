import React from "react"
import Challenge from "./Challenge"

function Scrolltarget(){
    const dailyChallenges = [
        <Challenge id='1' key='1'></Challenge>,
        <Challenge id='2' key='2'></Challenge>,
        <Challenge id='3' key='3'></Challenge>,
        <Challenge id='4' key='4'></Challenge>,
        <Challenge id='5' key='5'></Challenge>,
        <Challenge id='6' key='6'></Challenge>,
        <Challenge id='7' key='7'></Challenge>,
    ];
    return(                
    <div className="targets-card">
    <div className="targets-scroll">
            {dailyChallenges}
        <div className="targets today"></div>
    </div>
    <div className="daily-targets-shadowed"></div>
</div>
)
};

export default Scrolltarget;