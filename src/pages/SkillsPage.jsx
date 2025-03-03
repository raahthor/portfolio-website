import clsx from "clsx";
import styles from "./skillspage.module.css";
import {motion} from "framer-motion"

const languages = [
  {
    src: "/cpplogo.png",
    name: "C++",
  },
  {
    src: "/jslogo.png",
    name: "JavaScript",
  },
  {
    src: "/htmllogo.png",
    name: "HTML",
  },
  {
    src: "/csslogo.png",
    name: "CSS",
  },
];
const frameworks = [
  {
    src: "/jsIconGreen.svg",
    name: "NodeJs",
  },
  {
    src: "/reactjs.png",
    name: "ReactJS",
  },
  {
    src: "/express.png",
    name: "ExpressJS",
  },
  {
    src: "/tailwindlogo.svg",
    name: "Tailwind CSS",
  },
];
const others = [
  {
    src: "/mongodb.svg",
    name: "MongoDB",
  },
  {
    src: "/elephant.png",
    name: "PostgreSQL",
  },
  {
    src: "gitlogo.png",
    name: "Git",
  },
  {
    src: "/postman.png",
    name: "Postman",
  },
  {
    src: "/figmalogo.png",
    name: "Figma",
  },
];

export default function SkillsPage() {
  return (
    <>
      <motion.div className={clsx(styles["skills-title"], "lm-skills-title")}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      viewport={{ once: true }}>
        Skills
      </motion.div>

      <motion.div className={clsx(styles["languages"], styles["skills-container"])}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.5 }}
      viewport={{ once: true }}>
        <h3 className={clsx(styles["skill-con-title"], "lm-skill-con-title")}>
          Languages
        </h3>
        <div className={clsx(styles["skill-content"])}>
          {languages.map((item, index) => (
            <div
              key={index}
              className={clsx(styles["skill-logos"], "lm-skill-logos")}
            >
              <img src={item.src} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
          ))}
          <div className={clsx(styles["skill-logos"], "lm-skill-logos")}></div>
        </div>
      </motion.div>

      <motion.div className={clsx(styles["frameworks"], styles["skills-container"])}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      viewport={{ once: true }}>
        <h3 className={clsx(styles["skill-con-title"], "lm-skill-con-title")}>
          Frameworks & Libraries
        </h3>
        <div className={clsx(styles["skill-content"])}>
          {frameworks.map((item, index) => (
            <div
              key={index}
              className={clsx(styles["skill-logos"], "lm-skill-logos")}
            >
              <img src={item.src} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className={clsx(styles["others"], styles["skills-container"])}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, delay: 0.7 }}
      viewport={{ once: true }}>
        <h3 className={clsx(styles["skill-con-title"], "lm-skill-con-title")}>
          Others
        </h3>
        <div className={clsx(styles["skill-content"])}>
          {others.map((item, index) => (
            <div
              key={index}
              className={clsx(styles["skill-logos"], "lm-skill-logos")}
            >
              <img src={item.src} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
          ))}
          <div className={clsx(styles["skill-logos"], "lm-skill-logos")}></div>
        </div>
      </motion.div>
    </>
  );
}
