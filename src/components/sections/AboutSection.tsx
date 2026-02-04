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
        Hey! I'm Prashant - a backend-focused developer who lives in that sweet
        spot between coffee-fueled problem-solving and production-ready code. I
        build multi-tenant SaaS platforms and web applications using Node.js,
        Next.js, and whatever tool gets the job done right. From designing
        secure systems with OAuth and JWT to implementing role-based access
        control, I focus on writing code that's scalable, maintainable, and
        actually works in production. When I'm not deep in terminal windows or
        wrestling with Docker containers, you'll find me gaming, lifting
        weights, or falling down rabbit holes of new tech.
      </motion.div>
    </section>
  );
}
