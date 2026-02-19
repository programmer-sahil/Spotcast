import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img src={data.logo} alt="Spotcast" />
        </div>

        {/* Desktop links */}
        <nav className="nav-links">
          <a href="/services">SERVICES</a>
          <a href="/contact">CONTACT</a>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <a href="/services" onClick={() => setOpen(false)}>SERVICES</a>
          <a href="/contact" onClick={() => setOpen(false)}>CONTACT</a>
        </div>
      )}
    </header>
  );
}
