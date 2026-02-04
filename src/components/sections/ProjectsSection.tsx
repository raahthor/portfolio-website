"use client";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/store/activeSection";
import clsx from "clsx";
import styles from "./projects.module.css";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const setActive = useActiveSection((s) => s.setActive);
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActive("projects");
      }
    },
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={clsx(styles["main-projects"], "section")}
    >
      <motion.div
        className={clsx(styles["projects-title"], "lm-projects-title")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.div>

      <div className={clsx(styles["projects-container"])}>
        <motion.div
          className={clsx(styles["project-content"], "lm-project-content")}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="/bug-tracker.png" alt="Bug Tracker UI Image" />
          <a
            href="https://github.com/raahthor/bugTracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            BugTracker is a lightweight application for issue and project
            tracking. Designed as a simplified Jira, it enables users to create,
            prioritize, and manage tasks or bugs within collaborative projects.
          </a>
        </motion.div>
        <motion.div
          className={clsx(styles["project-content"], "lm-project-content")}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/raahthor/url-shortener"
            target="_blank"
            rel="noopener noreferrer"
          >
            A full-stack URL shortener built with the PERN stack, enabling users
            to shorten URLs, track clicks.
          </a>
          <img src="/urlShortener.png" alt="URL Shortner Image" />
        </motion.div>
      </div>
    </section>
  );
}
