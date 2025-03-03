import clsx from "clsx";
import styles from "./projectspage.module.css";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <>
      <motion.div
        className={clsx(styles["projects-title"], "lm-projects-title")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.div>

      <div className={clsx(styles["projects-container"])}>
        <motion.div
          className={clsx(styles["project-content"], "lm-project-content")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img src="/urlShortener.png" alt="URL Shortner Image" />
          <a
            href="https://github.com/raahthor/url-shortener"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full-stack URL shortener with tracking, built on the PERN stack.
          </a>
        </motion.div>
        <motion.div
          className={clsx(styles["project-content"], "lm-project-content")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="/tictactoe.png" alt="tic tac toe logo" />
          <a
            href="https://github.com/raahthor/Tic-Tac-Toe"
            target="_blank"
            rel="noopener noreferrer"
          >
            A basic command-line Tic-Tac-Toe Game built in C++.
          </a>
        </motion.div>
        <motion.div
          className={clsx(styles["project-content"], "lm-project-content")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p>To be added</p>
        </motion.div>
        <motion.div
          className={clsx(styles["project-content"], "lm-project-content")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>To be added</p>
        </motion.div>
      </div>
    </>
  );
}
