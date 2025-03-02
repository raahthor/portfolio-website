import clsx from "clsx";
import styles from "./projectspage.module.css";

export default function ProjectsPage() {
  return (
    <>
      <div className={clsx(styles["projects-title"], "lm-projects-title")}>
        Projects
      </div>

      <div className={clsx(styles["projects-container"])}>
        <div className={clsx(styles["project-content"], "lm-project-content")}>
          <img src="/urlShortener.png" alt="URL Shortner Image" />
          <a
            href="https://github.com/raahthor/url-shortener"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full-stack URL shortener with tracking, built on the PERN stack.
          </a>
        </div>
        <div className={clsx(styles["project-content"], "lm-project-content")}>
          <img src="/tictactoe.png" alt="tic tac toe logo" />
          <a
            href="https://github.com/raahthor/Tic-Tac-Toe"
            target="_blank"
            rel="noopener noreferrer"
          >
            A basic command-line Tic-Tac-Toe Game built in C++.
          </a>
        </div>
        <div className={clsx(styles["project-content"], "lm-project-content")}>
          <p>To be added</p>
        </div>
        <div className={clsx(styles["project-content"], "lm-project-content")}>
          <p>To be added</p>
        </div>
      </div>
    </>
  );
}
