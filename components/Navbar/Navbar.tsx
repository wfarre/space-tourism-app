import React from "react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="logo-wrapper">
        <Image
          className="image"
          src="/assets/shared/logo.svg"
          alt="logo"
          width={48}
          height={48}
        ></Image>
        {/* <Logo /> */}
      </div>
      <div className={isOpen ? "navbar-wrapper" : "navbar-wrapper hide"}>
        <ul className="navbar">
          <li className="navbar--item">
            <a>
              <span className="navbar--item--id">00</span>Home
            </a>
          </li>
          <li className="navbar--item">
            <a>
              <span className="navbar--item--id">01</span>Destination
            </a>
          </li>
          <li className="navbar--item">
            <a>
              <span className="navbar--item--id">02</span>Crew
            </a>
          </li>
          <li className="navbar--item">
            <a>
              <span className="navbar--item--id">03</span>Technology
            </a>
          </li>
        </ul>
      </div>

      <div className="hamburger-btn-wrapper" onClick={handleClick}>
        <Image
          // onClick={setIsOpen(!isOpen)}
          src="/assets/shared/icon-hamburger.svg"
          alt="open menu"
          width={40}
          height={40}
          className={
            isOpen
              ? "button button--hamburger hide"
              : "button button--hamburger"
          }
        />
        <Image
          src="/assets/shared/icon-close.svg"
          alt="open menu"
          width={40}
          height={40}
          className={
            isOpen ? "button button--close" : "button button--close hide"
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
