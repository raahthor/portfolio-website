"use client";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/store/activeSection";
import clsx from "clsx";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export default function AboutPage() {
  const setActive = useActiveSection((s) => s.setActive);
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setActive("about");
      }
    },
  });

  return (
    <section
      id="about"
      ref={ref}
      className={clsx(styles["main-about"], "section")}
    >
      <motion.div
        className={clsx(styles["aboutMe"], "lm-aboutMe")}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.div>
      <motion.div
        className={clsx(styles["myPicture"])}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img src="/download.jpg" />
      </motion.div>
      <motion.div
        className={clsx(styles["aboutMeContent"])}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Hey there! I'm Prashant Rathore, a passionate full stack web developer
        with a knack for problem-solving and an appreciation for good design.
        While I'm still in the early stages of my journey, I'm actively building
        my skills to strengthen both frontend and backend expertise. In the
        future, I plan to expand my knowledge in AI/ML to integrate smart
        solutions into my Projects. When I'm not coding, you'll likely find me
        listening to music, gaming, or at the gym. I'm excited to connect with
        other tech enthusiasts — let's grow together!
      </motion.div>
    </section>
  );
}
