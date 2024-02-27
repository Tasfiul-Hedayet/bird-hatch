"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarActive(!isNavBarActive);
  };

  return (
    <div>
      <header>
        <div className="logo">
          {" "}
          <Link href="/">
            Knudson Farm
          </Link>
        </div>
        <div className="hamburger" onClick={toggleNavBar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-bar ${isNavBarActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/weight">Create Weight</Link>
            </li>
            <li>
              <Link href="/Bird_Tracker">Bird</Link>
            </li>
            <li>
              <Link href="/Hatch_Tracker">Hatch</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
