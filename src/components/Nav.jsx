import { useCssVariables } from "@hooks/useCssVariables";
import { useNavStyle } from "@hooks/useNavStyle";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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

/**
 * * Navigation Bar
 * @component
 * @return {ReactNode} - The representation of Nav Bar UI Component
 */
const Nav = () => {
  const codewarColor = useCssVariables("--codewar");
  const MINWIDTH = parseInt(useCssVariables("--minWidth"));

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { isNavStyleChanged } = useNavStyle();

  const location = useLocation();

  useEffect(() => {
    console.log("render nav");
  });

  useEffect(() => {
    function handleWindowResize() {
      setIsMenuOpen(false);
      setWindowWidth(window.innerWidth);
    }
    window.onresize = handleWindowResize;
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.path, location.hash]);

  return (
    <nav
      className={isNavStyleChanged ? "nav__style--changed" : ""}
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
          <HashLink smooth to="/#landing" className="link">
            <h2 className="menu__logo disable-select">Yezarniko</h2>
          </HashLink>
          <span
            role="button"
            className="menu__collapse"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <OpenMenuIcon
              style={{ display: isMenuOpen ? "none" : "inline" }}
              color={isNavStyleChanged ? codewarColor : "white"}
            />
            <CloseMenuIcon
              style={{ display: isMenuOpen ? "inline" : "none" }}
              color={isNavStyleChanged ? codewarColor : "white"}
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
            <HashLink smooth to="/#skills" className="link">
              skills
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" className="link">
              projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contactMe" className="link">
              contact me
            </HashLink>
          </li>
          <li className="about-me">
            <Link to="/about" className="link">
              about me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
