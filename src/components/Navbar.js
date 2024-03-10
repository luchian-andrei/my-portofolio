import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [icon, setIcon] = useState(faBars);
  const [showMenu, setShowMenu] = useState(false);

  function handleIcon() {
    if (icon === faBars) {
      setIcon(faMinus);
    } else {
      setIcon(faBars);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Navbar">
      <div className="navbar-welcome">
        <img src="./images/helllo.gif" alt="hello" id="navbar-img" />
        <a href="#welcome">Welcome</a>
      </div>

      {width < 500 ? (
        <FontAwesomeIcon
          style={{ fontSize: "30px", marginRight: "30px" }}
          icon={icon}
          onClick={() => [setShowMenu(!showMenu), handleIcon()]}
        />
      ) : (
        <div className="navbar-buttons">
          <a href="#about-me" onClick={() => setShowMenu(false)}>
            About me
          </a>
          <a href="#projects">About my work</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      {showMenu ? (
        <div className="collapsable-menu">
          <ul>
            <li>
              <a
                href="#about-me"
                onClick={() => [setShowMenu(false), handleIcon()]}
              >
                About me
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#projects"
                onClick={() => [setShowMenu(false), handleIcon()]}
              >
                About my work
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#contact"
                onClick={() => [setShowMenu(false), handleIcon()]}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
