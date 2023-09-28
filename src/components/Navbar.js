import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav className="navbar">
          <div className="logo">
            <span>Portfolio</span>
          </div>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#section-about">About</a>
            </li>
            <li>
              <a href="#section-skills">Projects</a>
            </li>
            <li>
              <a href="#section-contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
  )
}
