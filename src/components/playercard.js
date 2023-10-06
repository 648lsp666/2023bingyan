import React, { useState } from "react";
import ray from "../images/ray.jpg";
import kele from "../images/kele.jpg";
import young from "../images/young.jpg";
import mifan from "../images/mifan.jpg";
import huoshan from "../images/huoshan.jpg";

function Playercard({id}){
    const[rank,setrank]=useState(`#${id}`);
    const players = [
        {name:'小睿',src:ray},
        {name:'可乐',src:kele},
        {name:'米饭',src:mifan},
        {name:'火山',src:huoshan},
        {name:'太阳',src:young},
    ]
    const username = players[id-1].name;
    const useravatar = players[id-1].src;
    function Medal(){
        if(rank === '#1')
        return(
             <span dangerouslySetInnerHTML={{ __html: gold }} />

        );
        else if(rank === '#2')
        return(
             <span dangerouslySetInnerHTML={{ __html: silver }} />

        );
        else if(rank === '#3')
        return(
             <span dangerouslySetInnerHTML={{ __html: copper }} />

        );
        else return 
        (
            <></>
        );
    }
    const gold = `<svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z" fill="#f8e71c" stroke="#f8e71c" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z" stroke="#f8e71c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z" stroke="#f8e71c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32V36" stroke="#f8e71c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 42L18.69 36H29.0425L33 42H15Z" fill="#f8e71c" stroke="#f8e71c" stroke-width="4" stroke-linejoin="round"/></svg>`;
    const silver = `<svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z" fill="#c5c5c1" stroke="#c5c5c1" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z" stroke="#c5c5c1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z" stroke="#c5c5c1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32V36" stroke="#c5c5c1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 42L18.69 36H29.0425L33 42H15Z" fill="#c5c5c1" stroke="#c5c5c1" stroke-width="4" stroke-linejoin="round"/></svg>`
    const copper = `<svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z" fill="#8b572a" stroke="#8b572a" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z" stroke="#8b572a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z" stroke="#8b572a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32V36" stroke="#8b572a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 42L18.69 36H29.0425L33 42H15Z" fill="#8b572a" stroke="#8b572a" stroke-width="4" stroke-linejoin="round"/></svg>`
    return(
        <div className="singleplayer">
        <div className="playersprofile">
        <img src={useravatar} className="useravatar"></img>
        <p>{username}</p>
        </div>
        <span>99999</span>
        <div className="rank">
        <span>{rank}</span>
            <Medal></Medal>
        </div>
    </div>
    )
};

export default Playercard;