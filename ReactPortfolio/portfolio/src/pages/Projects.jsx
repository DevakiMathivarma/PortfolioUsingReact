// src/pages/Projects.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  // SHOW GRID ONLY WHEN showAll === true
  const [showAll, setShowAll] = useState(false);
  // visible list used for the grid (only when showAll)
  const visible = showAll ? projects : [];

  // responsive columns (inline-only approach)
  const getColsForWidth = (w) => (w >= 900 ? 3 : w >= 600 ? 2 : 1);
  const [cols, setCols] = useState(() => (typeof window !== "undefined" ? getColsForWidth(window.innerWidth) : 3));
  useEffect(() => {
    const onResize = () => setCols(getColsForWidth(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ---------- preview carousel variables (unchanged) ----------
  const eventImages = [
    "/event1.PNG",
    "/event2.PNG",
    "/event3.PNG",
    "/event4.PNG",
    "/event5.PNG",
  ];
  const groceryImages = [
    "/grhome.PNG",
    "/grshop.PNG",
    "/grshopping.PNG",
    "/graccount.PNG",
    "/grtrack.PNG",
  ];
  const pepperfryImages = [
    "/p1.PNG",
    "/p2.PNG",
    "/p3.PNG",
    "/p4.PNG",
    "/p5.PNG",
  ];

  const [currentCarousel, setCurrentCarousel] = useState("event");
  const [eventIndex, setEventIndex] = useState(0);
  const [groceryIndex, setGroceryIndex] = useState(0);
  const [pepperIndex, setPepperIndex] = useState(0);
  const carouselRef = useRef(null);

  // ===== FIXED showCarousel: set state first, then scroll after render =====
  const showCarousel = (type) => {
    // set which carousel to show
    setCurrentCarousel(type);

    // wait for DOM to reflect the new class before scrolling
    // requestAnimationFrame ensures we wait until browser paints,
    // small timeout helps ensure CSS display has applied.
    requestAnimationFrame(() => {
      setTimeout(() => {
        carouselRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 40);
    });
  };
  // ======================================================================

  const nextImage = (type) => {
    if (type === "event") setEventIndex((i) => (i + 1) % eventImages.length);
    if (type === "grocery") setGroceryIndex((i) => (i + 1) % groceryImages.length);
    if (type === "pepperfry") setPepperIndex((i) => (i + 1) % pepperfryImages.length);
  };

  const prevImage = (type) => {
    if (type === "event") setEventIndex((i) => (i - 1 + eventImages.length) % eventImages.length);
    if (type === "grocery") setGroceryIndex((i) => (i - 1 + groceryImages.length) % groceryImages.length);
    if (type === "pepperfry") setPepperIndex((i) => (i - 1 + pepperfryImages.length) % pepperfryImages.length);
  };

  const getCurrentImage = (type) => {
    if (type === "event") return eventImages[eventIndex];
    if (type === "grocery") return groceryImages[groceryIndex];
    return pepperfryImages[pepperIndex];
  };

  // ---------- Hover overlay + modal logic (unchanged) ----------
  const [hoveredId, setHoveredId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [modalSlideIndex, setModalSlideIndex] = useState(0);

  const openProjectModal = (project) => {
    setActiveProject(project);
    setModalSlideIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveProject(null);
    setModalSlideIndex(0);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);

  const getProjectImages = (p) => {
    if (!p) return [];
    if (Array.isArray(p.images) && p.images.length) return p.images;
    if (p.image) return [p.image];
    return [];
  };

  const modalNext = () => {
    const imgs = getProjectImages(activeProject);
    if (!imgs.length) return;
    setModalSlideIndex((i) => (i + 1) % imgs.length);
  };
  const modalPrev = () => {
    const imgs = getProjectImages(activeProject);
    if (!imgs.length) return;
    setModalSlideIndex((i) => (i - 1 + imgs.length) % imgs.length);
  };

  // Framer motion variants
  const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  const modalVariants = { hidden: { y: 30, opacity: 0, scale: 0.98 }, visible: { y: 0, opacity: 1, scale: 1 } };
  const imageFade = { hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } };

  return (
    <section id="portfolio">
      <div className="about-title">
        <h1 className="background-text">PORTFOLIO</h1>
        <h2 className="main-heading">
          My Work <span className="underline" />
        </h2>
      </div>

      {/* quick nav buttons that scroll to the preview carousel */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 20 }} className="button-container">
        <button type="button" onClick={() => showCarousel("event")} aria-label="Show Event Planner carousel">
          Event Planner
        </button>
        <button type="button" onClick={() => showCarousel("grocery")} aria-label="Show Grocery carousel">
          Grocery Website
        </button>
        <button type="button" onClick={() => showCarousel("pepperfry")} aria-label="Show Pepperfry Website">
          Pepperfry Website
        </button>
      </div>

      {/* Carousel + details (unchanged) */}
      <div className="carousel-project-container" ref={carouselRef}>
        <section className="carousel-section" aria-label="Project carousels">
          <div id="event-carousel" className={`carousel ${currentCarousel === "event" ? "visible" : ""}`} aria-hidden={currentCarousel !== "event"}>
            <div className="carousel-wrapper">
              <button className="nav-btn" onClick={() => prevImage("event")} aria-label="Previous event image">
                &#10094;
              </button>
              <img id="event-image" src={getCurrentImage("event")} alt="Event project screenshot" loading="lazy" />
              <button className="nav-btn" onClick={() => nextImage("event")} aria-label="Next event image">
                &#10095;
              </button>
            </div>
          </div>

          <div id="grocery-carousel" className={`carousel ${currentCarousel === "grocery" ? "visible" : ""}`} aria-hidden={currentCarousel !== "grocery"}>
            <div className="carousel-wrapper">
              <button className="nav-btn" onClick={() => prevImage("grocery")} aria-label="Previous grocery image">
                &#10094;
              </button>
              <img id="grocery-image" src={getCurrentImage("grocery")} alt="Grocery project screenshot" loading="lazy" />
              <button className="nav-btn" onClick={() => nextImage("grocery")} aria-label="Next grocery image">
                &#10095;
              </button>
            </div>
          </div>

          <div id="pepperfry-carousel" className={`carousel ${currentCarousel === "pepperfry" ? "visible" : ""}`} aria-hidden={currentCarousel !== "pepperfry"}>
            <div className="carousel-wrapper">
              <button className="nav-btn" onClick={() => prevImage("pepperfry")} aria-label="Previous pepperfry image">
                &#10094;
              </button>
              <img id="pepperfry-image" src={getCurrentImage("pepperfry")} alt="Pepperfry project screenshot" loading="lazy" />
              <button className="nav-btn" onClick={() => nextImage("pepperfry")} aria-label="Next pepperfry image">
                &#10095;
              </button>
            </div>
          </div>
        </section>

        <section className="project-details" aria-live="polite">
          <div id="event-details" className={`details ${currentCarousel === "event" ? "visible" : ""}`}>
            <h3>Event Planner Project</h3>
            <p>Event Planner project for managing weddings, conferences, and parties. Streamlined tools for bookings, vendors, and scheduling.</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
            <p><strong>Industry:</strong> Event Planning</p>
            <p><strong>URL:</strong> <a href="https://devakimathivarma.github.io/Event-planner/index.html">www.eventplanner.com</a></p>
          </div>

          <div id="grocery-details" className={`details ${currentCarousel === "grocery" ? "visible" : ""}`}>
            <h3>Grocery Website Project</h3>
            <p>Fully responsive grocery e-commerce site featuring dynamic cart, filtering system, and product listings using localStorage.</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
            <p><strong>Industry:</strong> E-commerce</p>
            <p><strong>URL:</strong> <a href="https://devakimathivarma.github.io/Grocery-Website/">www.grocerymart.com</a></p>
          </div>

          <div id="pepperfry-details" className={`details ${currentCarousel === "pepperfry" ? "visible" : ""}`}>
            <h3>Pepperfry Website Clone</h3>
            <p>Clone of a single page popular furniture brand Pepperfry with product slider, categories.</p>
            <p><strong>Technologies:</strong> HTML, CSS, JS</p>
            <p><strong>Industry:</strong> Furniture E-commerce</p>
            <p><strong>URL:</strong> <a href="https://devakimathivarma.github.io/pepperfry/">www.pepperfryclone.com</a></p>
          </div>
        </section>
      </div>

      {/* Projects grid (rendered only when showAll === true) */}
      <div style={{ marginTop: 20 }}>
        

        {/* If showAll is true -> render grid, otherwise hide grid */}
        {showAll && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: 20,
              maxWidth: 1200,
              margin: "0 auto 24px",
              padding: "0 16px",
              boxSizing: "border-box",
            }}
          >
            {visible.map((p) => (
              <div
                key={p.id}
                className="project-tile"
                style={{
                  position: "relative",
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={Array.isArray(p.images) && p.images.length ? p.images[0] : p.image}
                  alt={p.title}
                  style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                  loading="lazy"
                />

                {/* overlay */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: hoveredId === p.id ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 16,
                    transition: "background 220ms ease",
                  }}
                >
                  <div style={{ opacity: hoveredId === p.id ? 1 : 0, transform: hoveredId === p.id ? "translateY(0)" : "translateY(8px)", transition: "all 220ms ease", textAlign: "center" }}>
                    <div style={{ marginBottom: 10, fontWeight: 700 }}>{p.title}</div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 12 }}>
                      {p.tech && p.tech.map((t) => (
                        <span key={t} style={{ background: "rgba(255,255,255,0.12)", padding: "6px 8px", borderRadius: 6, fontSize: 12 }}>{t}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal(p)}
                      style={{
                        background: "#10c98f",
                        color: "#fff",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: 20,
                        cursor: "pointer",
                        boxShadow: "0 6px 18px rgba(16,201,143,0.18)",
                      }}
                    >
                      View Project
                    </button>
                  </div>
                </div>

                <div style={{ padding: 12 }}>
                  <h3 style={{ margin: 0, fontSize: 16 }}>{p.title}</h3>
                  <p style={{ margin: "8px 0 0", color: "#444", fontSize: 14, lineHeight: 1.3 }}>
                    {p.description?.slice(0, 100)}{p.description && p.description.length > 100 ? "..." : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Show more / Show fewer button ALWAYS visible */}
        <div style={{ textAlign: "center", marginTop: 18 }}>
          {!showAll ? (
            <button onClick={() => setShowAll(true)} className="btn" aria-label="Show more projects">Show more projects</button>
          ) : (
            <button onClick={() => setShowAll(false)} className="btn" aria-label="Show fewer projects">Show fewer</button>
          )}
        </div>
      </div>

      {/* Modal (unchanged) */}
      <AnimatePresence>
        {modalOpen && activeProject && (
          <motion.div
            className="project-modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 2000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} details`}
          >
            <motion.div
              className="project-modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.36, ease: "easeOut" }}
              style={{
                background: "#fff",
                width: "min(1100px, 96%)",
                maxHeight: "90vh",
                borderRadius: 12,
                overflow: "hidden",
                display: "flex",
                gap: 0,
                boxShadow: "0 20px 50px rgba(2,6,23,0.2)",
              }}
            >
              <div style={{ flex: 1, minWidth: 320, background: "#f7f7f8", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button onClick={modalPrev} aria-label="Previous image" style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", zIndex: 5, background: "rgba(0,0,0,0.45)", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 6, cursor: "pointer" }}>&#10094;</button>
                <div style={{ width: "100%", padding: 18, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <motion.img
                    key={modalSlideIndex + "-" + (activeProject?.id || "p")}
                    src={getProjectImages(activeProject)[modalSlideIndex] || getProjectImages(activeProject)[0]}
                    alt={activeProject.title}
                    initial="hidden"
                    animate="visible"
                    variants={imageFade}
                    transition={{ duration: 0.36 }}
                    style={{ width: "100%", height: "auto", maxHeight: "72vh", objectFit: "cover", borderRadius: 8 }}
                    loading="lazy"
                  />
                </div>
                <button onClick={modalNext} aria-label="Next image" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", zIndex: 5, background: "rgba(0,0,0,0.45)", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 6, cursor: "pointer" }}>&#10095;</button>

                <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
                  {getProjectImages(activeProject).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalSlideIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        border: "none",
                        background: idx === modalSlideIndex ? "#10c98f" : "rgba(255,255,255,0.6)",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div style={{ width: 420, padding: 22, overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 12 }}>
                  <h2 style={{ margin: 0 }}>{activeProject.title}</h2>
                  <button onClick={closeModal} aria-label="Close project modal" style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: 20 }}>✕</button>
                </div>

                <p style={{ color: "#333", marginTop: 10 }}>{activeProject.description}</p>

                <div style={{ marginTop: 12 }}>
                  <strong>Technologies:</strong>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                    {(activeProject.tech || []).map((t) => (
                      <span key={t} style={{ background: "#f3f3f3", padding: "6px 8px", borderRadius: 6, fontSize: 13 }}>{t}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 12 }}>
                  <strong>Industry:</strong>
                  <div style={{ marginTop: 6 }}>{activeProject.industry || "General"}</div>
                </div>

                {activeProject.url && (
                  <div style={{ marginTop: 14 }}>
                    <strong>URL:</strong>{" "}
                    <a href={activeProject.url} target="_blank" rel="noreferrer" style={{ color: "#10c98f" }}>
                      {activeProject.url}
                    </a>
                  </div>
                )}

                {activeProject.details && (
                  <div style={{ marginTop: 12 }}>
                    <strong>Details:</strong>
                    <p style={{ marginTop: 6 }}>{activeProject.details}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
