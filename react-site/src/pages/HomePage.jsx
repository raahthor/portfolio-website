import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./homepage.module.css";

export default function HomePage() {
  return (
    <>
      <motion.div
        className={clsx(styles["code-snippet2"])}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2}}
        viewport={{ once: true }}
      >
        &lt;main&gt;
      </motion.div>

      <motion.div
        className={clsx(styles["main-text"], "lm-main-text")}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className={clsx(styles["web"])}>Full-Stack</h2>
        <h2 className={clsx(styles["dev"])}>Developer</h2>
      </motion.div>

      <motion.p
        className={clsx(styles["paragraph"])}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Hi, I'm Prashant Rathore – a full-stack web developer with a knack
        for creating seamless, responsive, and engaging digital experiences.
        Explore my skills and projects below!
      </motion.p>

      <motion.div
        className={clsx(styles["code-snippet2"])}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        &lt;/main&gt;
      </motion.div>

      <motion.div
        className={clsx(styles["handles"])}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </>
  );
}
