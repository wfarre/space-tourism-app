import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

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
          <li className="navbar__item">
            <Link href={"/"} legacyBehavior>
              <a className="navbar__item__title">
                <span className="navbar__item__id">00</span>Home
              </a>
            </Link>
          </li>
          <li className="navbar__item">
            <Link href={"/destination"} legacyBehavior>
              <a className="navbar__item__title">
                <span className="navbar__item__id">01</span>Destination
              </a>
            </Link>
          </li>
          <li className="navbar__item">
            <Link href={"/crew"} legacyBehavior>
              <a className="navbar__item__title">
                <span className="navbar__item__id">02</span>Crew
              </a>
            </Link>
          </li>
          <li className="navbar__item">
            <Link href={"/technology"} legacyBehavior>
              <a className="navbar__item__title">
                <span className="navbar__item__id">03</span>Technology
              </a>
            </Link>
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
