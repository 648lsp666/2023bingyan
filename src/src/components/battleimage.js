import React from "react";
import { Link } from "react-router-dom";

function Battleimage({id}){
    return (
        <div className="battleimage">
            <Link to={`/battle/${id}`}>
        <div className="battleimagetag">#{id}</div>
<img src="https://cssbattle.dev/images/welcome.jpg" className="introimg"></img>
</Link>
</div>
    )
}

export default Battleimage;