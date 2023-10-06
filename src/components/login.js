import React from "react";
import Header from "./Header";
import Leftbar from "./Leftbar";
import Footer from "./footer";
import background from "../images/backgroun.png";
function Login(){

    return(
        <div className='app'>
        <Leftbar></Leftbar>
        <div className='content'>
          <Header></Header>
        <div className="homepage" style={{overflow:'hidden'}}>
                <div className="dailypageheader">
                        <h1>Signup & Login</h1>
                    </div>
                    <div className="logincard">
                    <form>
                        <div className="inputcontainer">
                            <input type="email" className="email" placeholder="example@domain.com"></input>
                            <button className="button">Sign in with email</button>
                        </div>
                        <p>This is a password-less login, so you don't need a password.</p>
                    </form>
                    </div>
                    <img src={background} className="loginbackground"></img>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};
export default Login;