import React from "react";
import { Link } from "react-router-dom";

function Battleimage({id}){
    const battleimages = [
        {src:'https://cssbattle.dev/targets/167@2x.png'},
        {src:'https://cssbattle.dev/targets/168@2x.png'},
        {src:'https://cssbattle.dev/targets/169@2x.png'},
        {src:'https://cssbattle.dev/targets/170@2x.png'},
        {src:'https://cssbattle.dev/targets/171@2x.png'},
        {src:'https://cssbattle.dev/targets/154@2x.png'},
        {src:'https://cssbattle.dev/targets/153@2x.png'},
        {src:'https://cssbattle.dev/targets/152@2x.png'},
        {src:'https://cssbattle.dev/targets/151@2x.png'},
        {src:'https://cssbattle.dev/targets/150@2x.png'},
        {src:'https://cssbattle.dev/targets/149@2x.png'},
        {src:'https://cssbattle.dev/targets/148@2x.png'},
        {src:'https://cssbattle.dev/targets/147@2x.png'},
        {src:'https://cssbattle.dev/targets/158@2x.png'},
        {src:'https://cssbattle.dev/targets/157@2x.png'},
        {src:'https://cssbattle.dev/targets/156@2x.png'},
        {src:'https://cssbattle.dev/targets/155@2x.png'},
    ]
    const matchid = battleimages[id-1].src.match(/targets\/(.*?)\.png/);
    const matchpill = battleimages[id-1].src.match(/targets\/(.*?)\@2x.png/);
    return (
        <div className="battleimage">
            <Link to={`/battleplay/${id}`}>
        <div className="battleimagetag">#{id}</div>
<img src={battleimages[id-1].src} className="introimg"></img>
</Link>
</div>
    )
}

export default Battleimage;