// src/Layout.jsx
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

/*
  Layout renders the whole single-scroll page: Home (About, Resume, Skills), Projects, Contact.
  It listens to location changes and scrolls to the correct section:
    - pathname "/projects" -> scroll to #portfolio
    - pathname "/contact"  -> scroll to #contact
    - pathname "/" or hash "#about" -> scroll to #about
  Works for direct links and in-app navigation.
*/

export default function Layout() {
  const location = useLocation();
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);

  // utility: smooth scroll to element by id or ref
  const scrollToId = (idOrRef) => {
    const el =
      typeof idOrRef === "string"
        ? document.getElementById(idOrRef)
        : idOrRef?.current || null;
    if (el) {
      // small timeout to allow rendering / layout in SPA navigation
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }
  };

  useEffect(() => {
    // If URL includes a hash like /#about or /#resume, prefer that
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      scrollToId(targetId);
      return;
    }

    // Otherwise, switch on pathname
    const path = location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/projects") {
      // scroll to portfolio section
      scrollToId(portfolioRef);
    } else if (path === "/contact") {
      scrollToId(contactRef);
    } else if (path === "/about") {
      scrollToId("about");
    } else {
      // default: scroll to top (Home)
      scrollToId(topRef);
    }
    // re-run on every location change
  }, [location]);

  return (
    <>
      <Header />
      <main ref={topRef} className="main-content" id="main-content" role="main">
        {/* Home contains About / Resume / Skills (keeps the same ids) */}
        <Home />

        {/* Portfolio section (wrap Projects with an id/ref so Layout can scroll to it) */}
        <section id="portfolio" ref={portfolioRef} aria-labelledby="portfolio-title">
          <Projects />
        </section>

        {/* Contact section (wrap so we can scroll to it directly) */}
        <section id="contact" ref={contactRef} aria-labelledby="contact-title">
          <Contact />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
