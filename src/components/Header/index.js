import React from "react";
import "./index.css";


const Navbar = () => {
  return (
    <>
      <header className="header ">
        <nav className="d-flex justify-content-between container">
          <li><a className="nav-brands " href="/"><img className='nav-logos mb-1' src="./images/get-app-icon.png" alt="logo" />Get the App</a></li>
          <ul className="d-flex justify-content-between">
            <li><a href="/" className="nav-links">Investor Relations</a></li>
            <li><a href="/" className="nav-links">Add restaurant</a></li>
            <li><a href="/" className="nav-links">Log in</a></li>
            <li><a href="/" className="nav-links">Sign up</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;