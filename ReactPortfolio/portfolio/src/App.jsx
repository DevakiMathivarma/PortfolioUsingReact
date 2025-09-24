// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <Routes>
      {/* All top-level paths render the same base Layout which contains all sections.
          Layout handles scrolling to the right section when pathname changes. */}
      <Route path="/" element={<Layout />} />
      <Route path="/projects" element={<Layout />} />
      <Route path="/contact" element={<Layout />} />
      <Route path="/about" element={<Layout />} />
      {/* fallback to Layout for unknown routes */}
      <Route path="*" element={<Layout />} />
    </Routes>
  );
}
