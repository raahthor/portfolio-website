"use client";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/store/activeSection";
import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./home.module.css";

export default function HomePage() {
  const setActive = useActiveSection((s) => s.setActive);
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActive("home");
      }
    },
  });

  return (
    <section
      id="home"
      ref={ref}
      className={clsx(styles["main-home"], "section")}
    >
      <motion.div
        className={clsx(styles["code-snippet2"])}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
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
        Where Node.js meets late-night debugging and optimized solutions.
        Backend-focused developer building web applications, and SaaS platforms.
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
    </section>
  );
}
