import React from "react";
import Header from "./Header";
import Leftbar from "./Leftbar";

function Leaderboards(){
    return(
        <div className='app'>
        <Leftbar></Leftbar>
        <div className='content'>
          <Header></Header>
        <div className="homepage">
                <div className="dailypageheader">
                <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z" fill="none" stroke="#ffff00" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21V11H4C4 17.6667 8 21 12 21Z" stroke="#ffff00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 21V11H44C44 17.6667 40 21 36 21Z" stroke="#ffff00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 32V36" stroke="#ffff00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 42L18.69 36H29.0425L33 42H15Z" fill="none" stroke="#ffff00" stroke-width="4" stroke-linejoin="round"/></svg>
                        <h1>Leaderboards</h1>
                    </div>
                    </div>
                    </div>
                    </div>
    );
};
export default Leaderboards;