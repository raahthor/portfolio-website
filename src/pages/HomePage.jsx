import clsx from "clsx";
import styles from "./homepage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={clsx(styles["code-snippet2"])}>&lt;main&gt;</div>

      <div className={clsx(styles["main-text"], "lm-main-text")}>
        <h2 className={clsx(styles["web"])}>Full-Stack</h2>
        <h2 className={clsx(styles["dev"])}>Developer</h2>
      </div>

      <p className={clsx(styles["paragraph"])}>
        👋 Hi, I'm Prashant Rathore – a full-stack web developer with a knack
        for creating seamless, responsive, and engaging digital experiences.
        Explore my skills and projects below!
      </p>

      <div className={clsx(styles["code-snippet2"])}>&lt;/main&gt;</div>

      <div className={clsx(styles["handles"])}>
        <a
          href="https://github.com/raahthor"
          target="_blank"
          className={clsx(styles["svg-link"], "hover-effect")}
        >
          <img src="/github.png" alt="github" />
        </a>
        <a
          href="https://linkedin.com/in/raahthor/"
          target="_blank"
          className={clsx(styles["svg-link"], "hover-effect")}
        >
          <img src="/linkedin-1.png" alt="linkedin" />
        </a>
        <a
          href="mailto:prashantrathore1435@gmail.com?subject=Hello!&body=I%20would%20like%20to%20discuss..."
          target="_blank"
          className={clsx(styles["svg-link"], "hover-effect")}
        >
          <img src="/mailme.png" alt="gmail" />
        </a>
        <div className={clsx(styles["vertical-line"])}></div>
      </div>
    </>
  );
}
