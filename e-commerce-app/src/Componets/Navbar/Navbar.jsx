import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = ["shop", "mens", "womens", "kids"];

  return (
    <nav className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className={isMobile ? "nav-menu-mobile" : "nav-menu"}>
        {menuItems.map((item, idx) => (
          <li
            className={menu === item ? "active" : ""}
            key={idx}
            onClick={() => {
              setMenu(item);
              setIsMobile(false);
            }}
          >
            <Link to={`/${item === "shop" ? "" : item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button className="glow-button">Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">0</div>

        <div className="menu-toggle" onClick={() => setIsMobile(!isMobile)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
