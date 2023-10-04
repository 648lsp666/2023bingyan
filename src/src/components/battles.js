import React from "react";
import Header from "./Header";
import Leftbar from "./Leftbar";
import Battlecard from "./battlecard";
import Footer from "./footer";
function Battlepage(){
      
    return(
        <div className='app'>
        <Leftbar></Leftbar>
        <div className='content'>
          <Header></Header>
            <div className="homepage">
                <div className="dailypageheader">
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 42C13.3137 42 16 39.3137 16 36C16 32.6863 13.3137 30 10 30C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42Z" fill="none" stroke="#edf115" stroke-width="4" stroke-linejoin="round"/><path d="M40.0615 8C24 28.4331 15.8047 38.6805 14.2426 40.2426C11.8995 42.5858 8.10047 42.5858 5.75732 40.2426" stroke="#edf115" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 42C41.3137 42 44 39.3137 44 36C44 32.6863 41.3137 30 38 30C34.6863 30 32 32.6863 32 36C32 39.3137 34.6863 42 38 42Z" fill="none" stroke="#edf115" stroke-width="4" stroke-linejoin="round"/><path d="M42.2424 40.2426C39.8993 42.5858 36.1003 42.5858 33.7571 40.2426C32.195 38.6805 23.9998 28.446 8.00049 8" stroke="#edf115" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg> 
                        <h1>Battles</h1>
                        <p>Compete with players around the world in these nail-biting battles
</p>
                    </div>
                    <div className="battlebtns">
                        <button className="button">Host a private battle</button>
                        <button className="button">Advertise in a battle</button>
                        <button className="button">My battles</button>
                    </div>
                    <div className="pastbattle">
                        <h2>Play latest battle</h2>
                        <Battlecard></Battlecard>
                    </div>
                    <div className="pastbattle">
                        <h2>Play past battles</h2>
                        <Battlecard></Battlecard>
                        <Battlecard></Battlecard>
                        <Battlecard></Battlecard>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Battlepage;