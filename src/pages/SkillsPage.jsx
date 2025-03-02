import clsx from "clsx";
import styles from "./skillspage.module.css";

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
      <div className={clsx(styles["skills-title"], "lm-skills-title")}>
        Skills
      </div>

      <div className={clsx(styles["languages"], styles["skills-container"])}>
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
      </div>

      <div className={clsx(styles["frameworks"], styles["skills-container"])}>
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
      </div>

      <div className={clsx(styles["others"], styles["skills-container"])}>
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
      </div>
    </>
  );
}
