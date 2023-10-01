import React from 'react';

function Header() {
  // 顶部标题栏内容
  return (
    <div className="header">
      <div className='header-left'>
    </div>
      <div className='header-right'>
        <button class='button'><span>☀</span></button>
        
        <button class='button usersignin'>signup/login</button>

      </div>
    </div>
  );
}

export default Header;
