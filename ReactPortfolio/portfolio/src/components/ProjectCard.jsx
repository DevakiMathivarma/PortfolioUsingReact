import React from "react";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ translateY: -6, boxShadow: "0 12px 30px rgba(2,6,23,0.12)" }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
        <img src={project.image} alt={project.title} loading="lazy" className={styles.image} />
        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.description}</p>
          <div className={styles.tags}>
            {project.tech.map((t) => (<span key={t} className={styles.tag}>{t}</span>))}
          </div>
        </div>
      </a>
    </motion.article>
  );
}
