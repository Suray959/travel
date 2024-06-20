import React, { useState } from 'react';
import style from '../Header/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style.body}>
      <div className={style.navbar}>
        <div className="headline">
          <ul className={style.head}>
            <h2><strong>SRY</strong> TRAVEL</h2>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/popular">Popular destinations</Link></li>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/sign">Sign up</Link></li>
          </ul>
        </div>
      </div>

      <div className={style.icon} onClick={toggleSidebar}>
        ☰
      </div>
      <div className={`${style.sidebar} ${isSidebarOpen ? style.sidebarOpen : ''}`}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/popular">Popular destinations</Link></li>
          <li><Link to="/">About us</Link></li>
          <li><Link to="/sign">Sign up</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
