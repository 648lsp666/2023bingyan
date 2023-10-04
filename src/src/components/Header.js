import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // 顶部标题栏内容
  return (
    <div className="header">
      <div className='header-left'>
    </div>
      <div className='header-right'>
        <button class='button' id='day-night'><svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z" fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round"/><path d="M38.9603 9.00977L36.5 11.4842" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M11.0674 36.7451L9.02051 38.8037" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M24 41.3533L24 44.3533" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M43.9998 23.3535L39.9998 23.3535" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M37.5324 36.3361L39.9998 38.8035" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535" fill="#ffffff"/><path d="M4.00019 24.3535L8.00019 24.3535" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M10.0444 9.00974L12.0972 11.0625" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M24 3.35371L24 7.35371" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/></svg></button>
        <Link to={'/login'}>
        <button class='button usersignin'>signup/login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
