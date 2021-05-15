import "./Header.css";
import logo from "../../img/siyah_.png";
import React, { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={isNavOpen ? "nav-open" : ""}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="#home"
              className="nav__link"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Home
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#services"
              className="nav__link"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              My Servics
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#about"
              className="nav__link"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              About me
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#work"
              className="nav__link"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
