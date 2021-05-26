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
              Anasayfa
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#services"
              className="nav__link"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Uğraşlarım
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#about"
              className="nav__link"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Hakkımda
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#work"
              className="nav__link"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Projelerim
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
