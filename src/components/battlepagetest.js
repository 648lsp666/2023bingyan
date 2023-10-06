import React from "react";
import Challenge from './Challenge';
import rayimage from '../images/ray.jpg';
import { Link } from "react-router-dom";
import Battleimage from "./battleimage";
function Battlepagetest({id}){
    return (
        <div className='singlebattle-test'>
            <Link to={`/battleplay/${id}`}>
        <Battleimage id={id}></Battleimage>
        <img src={rayimage} className='useravatar'></img>
        <h3>
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 42H35L41 21L31 26L24 12L17 26L7 21L13 42Z" fill="#f8e71c" stroke="#f8e71c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="18" r="3" fill="#f8e71c" stroke="#f8e71c" stroke-width="4"/><circle cx="24" cy="9" r="3" fill="#f8e71c" stroke="#f8e71c" stroke-width="4"/><circle cx="41" cy="18" r="3" fill="#f8e71c" stroke="#f8e71c" stroke-width="4"/></svg>
            .Ray
        </h3>
        <h3>
            Highest : 667.28
        </h3>
        <div className='aboutyou'>
            <h4>Your stats: not played</h4>
        </div>
        </Link>
    </div>  
    )
};
export default Battlepagetest;