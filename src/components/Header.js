import React, { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const dayNightButton = document.querySelector('#day-night');

    // 监听按钮的点击事件
    dayNightButton.addEventListener('click', toggleTheme);

    // 清除监听器以避免内存泄漏
    return () => dayNightButton.removeEventListener('click', toggleTheme);
  }, [isDarkTheme]);

  // 切换主题
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // 顶部标题栏内容
  return (
    <div className="header">
      <div className='header-left'>
    </div>
      <div className='header-right'>
        <button class='button' id='day-night'>
          {isDarkTheme?<svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0205 35.3535C30.0956 35.3535 35.0205 30.4286 35.0205 24.3535C35.0205 18.2784 30.0956 13.3535 24.0205 13.3535C17.9454 13.3535 13.0205 18.2784 13.0205 24.3535C13.0205 30.4286 17.9454 35.3535 24.0205 35.3535Z" fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round"/><path d="M38.9603 9.00977L36.5 11.4842" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M11.0674 36.7451L9.02051 38.8037" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M24 41.3533L24 44.3533" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M43.9998 23.3535L39.9998 23.3535" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M37.5324 36.3361L39.9998 38.8035" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0205 17.3535C20.1545 17.3535 17.0205 20.4875 17.0205 24.3535C17.0205 28.2195 20.1545 31.3535 24.0205 31.3535" fill="#ffffff"/><path d="M4.00019 24.3535L8.00019 24.3535" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M10.0444 9.00974L12.0972 11.0625" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M24 3.35371L24 7.35371" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/></svg>
          :<svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z" fill="#9b9b9b" stroke="#9b9b9b" stroke-width="4" stroke-linejoin="round"/></svg>
  }</button>
        <Link to={'/login'}>
        <button class='button usersignin'>signup/login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
