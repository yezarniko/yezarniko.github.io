import React, { useEffect, useState } from "react";
import { useCssVariables } from "@hooks/useCssVariables";

function OpenMenuIcon({ color, style }) {
  return (
    <svg
      {...{ style }}
      id="open-menu"
      className="menu__button"
      width="35"
      height="15"
      viewBox="0 0 49 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="17" y1="9" x2="48" y2="9" stroke={color} strokeWidth="2" />
      <path d="M4 1L48 1" stroke={color} strokeWidth="2" />
      <line y1="19" x2="48.0416" y2="19" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function CloseMenuIcon({ color, style }) {
  return (
    <svg
      {...{ style }}
      id="close-menu"
      className="menu__button"
      width="25"
      height="25"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="menu">
        <path
          id="Line 10"
          d="M1 25.4707L27 0.81884"
          stroke={color}
          strokeWidth="2"
        />
        <path
          id="Line 9"
          d="M1 0.81884L28.0005 26.597"
          stroke={color}
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

const Nav = ({ isNavScrolled }) => {
  const codewarColor = useCssVariables("--codewar");
  const MINWIDTH = parseInt(useCssVariables("--minWidth"));

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setIsMenuOpen(false);
      setWindowWidth(window.innerWidth);
    }
    window.onresize = handleWindowResize;
  }, []);

  return (
    <nav
      className={isNavScrolled ? "nav--scrolled" : ""}
      style={{
        backdropFilter: `blur(${isMenuOpen ? "20px" : "10px"})`,
        borderRadius: isMenuOpen ? "0 0 2em 2em" : "0 0 0 0",
      }}
    >
      <div
        className="menu"
        style={isMenuOpen ? { maxHeight: "42vh" } : { height: "100%" }}
      >
        <div className="menu__top-bar">
          <a href="#landing-page">
            <h2 className="menu__logo disable-select">Yezarniko</h2>
          </a>
          <span
            role="button"
            className="menu__collapse"
            onClick={(e) => setIsMenuOpen(!isMenuOpen)}
          >
            <OpenMenuIcon
              style={{ display: isMenuOpen ? "none" : "inline" }}
              color={isNavScrolled ? codewarColor : "white"}
            />
            <CloseMenuIcon
              style={{ display: isMenuOpen ? "inline" : "none" }}
              color={isNavScrolled ? codewarColor : "white"}
            />
          </span>
        </div>

        <ul
          className="menu__expand"
          style={{
            display: isMenuOpen || windowWidth > MINWIDTH ? "flex" : "none",
            marginBottom: isMenuOpen ? "1.5em" : "0em",
          }}
        >
          <li>
            <a href="#skills-page">skills</a>
          </li>
          <li>
            <a href="#projects-page">projects</a>
          </li>
          <li>
            <a href="#contactMe-page">contact me</a>
          </li>
          <li className="about-me">
            <a href="./about-me.html" target="_blank" rel="noopener noreferrer">
              about me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
