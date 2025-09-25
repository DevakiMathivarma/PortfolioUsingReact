// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

/**
 * Header component that includes the top bar + sidebar in one component.
 * Uses original CSS classes: .sidebar, .profile, .nav-links, .menu-toggle, etc.
 *
 * No Tailwind used here.
 */
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // show controls whether the sidebar is visible
  const [show, setShow] = useState(() => {
    // visible by default on wider screens
    if (typeof window !== "undefined") {
      return window.innerWidth > 480;
    }
    return true;
  });

  // Keep track of mobile toggle button state (for aria)
  const [menuOpen, setMenuOpen] = useState(false);

  // Close sidebar on small screens when route changes
  useEffect(() => {
    if (window.innerWidth <= 480) {
      setShow(false);
      setMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  // Update `show` state when resizing the window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For in-page anchors: navigate to "/" with hash so Layout scrolls to section
  const handleAnchorClick = (ev, targetId) => {
    ev.preventDefault();
    // navigate to the root with the hash, Layout will handle scrolling
    navigate("/#" + targetId, { replace: false });
    // close sidebar on mobile after clicking
    if (window.innerWidth <= 480) {
      setShow(false);
      setMenuOpen(false);
    }
  };

  // NavLink click handler for route links on mobile: close sidebar
  const handleRouteClick = () => {
    if (window.innerWidth <= 480) {
      setShow(false);
      setMenuOpen(false);
    }
  };

  // Toggle function for the mobile menu button
  const toggleSidebar = () => {
    const next = !show;
    setShow(next);
    setMenuOpen(next);
  };

  return (
    <>
      {/* top header bar */}
      <header className="site-header" role="banner" aria-label="Header">
        <div className="header-inner">
          <div className="brand">
            <NavLink
              to="/"
              onClick={() => {
                // ensure sidebar closed on mobile
                if (window.innerWidth <= 480) {
                  setShow(false);
                  setMenuOpen(false);
                }
              }}
              aria-label="Home"
              className="brand-link"
            >
            
            </NavLink>
            <span className="subtitle"> </span>
          </div>

          {/* desktop top navigation (optional duplicate of sidebar links) */}
          <nav className="desktop-nav" role="navigation" aria-label="Top navigation">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>

            <a href="#about" onClick={(e) => handleAnchorClick(e, "about")}>
              About
            </a>

            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              Projects
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </nav>

          {/* mobile toggle button */}
          <div className="mobile-toggle">
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-controls="sidebar"
              aria-expanded={menuOpen}
              onClick={toggleSidebar}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar included inside same component */}
      <aside
        id="sidebar"
        className={`sidebar ${show ? "show" : ""}`}
        aria-hidden={!show}
        aria-label="Primary"
      >
        <div className="profile">
          <img src="/devaki.jpeg" alt="Devaki" />
          <h2>Devaki Mathivarma</h2>
          <h4>A Python Full Stack Developer</h4>
        </div>

        <nav className="nav-links" role="navigation" aria-label="Sidebar navigation">
          <NavLink
            to="/"
            end
            onClick={handleRouteClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <a href="#about" onClick={(e) => handleAnchorClick(e, "about")}>
            About Me
          </a>

          <a href="#resume" onClick={(e) => handleAnchorClick(e, "resume")}>
            Resume
          </a>

          <NavLink to="/projects" onClick={handleRouteClick} className={({ isActive }) => (isActive ? "active" : "")}>
            Portfolio
          </NavLink>

          <NavLink to="/contact" onClick={handleRouteClick} className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>

        <div className="social-icons" aria-hidden>
          <a href="https://github.com/devakimathivarma" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </aside>
    </>
  );
}
