
// Navbar.jsx (Tailwind-converted)

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import imglogo from "../../img/logo.png";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (

    <nav className={`navbar flex justify-between items-center rounded-[30px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 z-10 px-4 py-3 shadow fixed top-0 left-0 right-0 ${navActive ? "active" : ""}`}>
      <div className="flex items-center">
        <img className="h-10 w-30" src={imglogo} alt="Logo" />
      </div>
      <a onClick={toggleNav} className={`nav__hamburger ${navActive ? "active" : ""}`}>
        <span className="block h-1 w-6 bg-black mb-1"></span>
        <span className="block h-1 w-6 bg-black mb-1"></span>
        <span className="block h-1 w-6 bg-black mb-1"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""} lg:flex lg:items-center`}>
        <ul className="flex flex-col lg:flex-row lg:items-center gap-4">
          <li className="py-1 lg:py-0">
            <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">Home</Link>
          </li>
          <li className="py-1 lg:py-0">
            <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar--content">Portfolio</Link>
          </li>
          <li className="py-1 lg:py-0">
            <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="mySkills" className="navbar--content">Skills</Link>
          </li>
          <li className="py-1 lg:py-0">
            <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">About Me</Link>
          </li>
        </ul>
      </div>
      <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-outline-primary ml-4">Contact Me</Link>
    </nav>
  );
}

export default Navbar;

