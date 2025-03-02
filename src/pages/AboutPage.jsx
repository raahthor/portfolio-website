import clsx from "clsx";
import styles from "./aboutpage.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={clsx(styles["aboutMe"], "lm-aboutMe")}>About Me</div>
      <div className={clsx(styles["myPicture"])}>
        <img src="/download.jpg" />
      </div>
      <div className={clsx(styles["aboutMeContent"])}>
        Hey there! I'm Prashant Rathore, a passionate full stack web developer
        with a knack for problem-solving and an appreciation for good design.
        While I'm still in the early stages of my journey, I'm actively building
        my skills to strengthen both frontend and backend expertise. In the
        future, I plan to expand my knowledge in AI/ML to integrate smart
        solutions into my Projects. When I'm not coding, you'll likely find me
        listening to music, gaming, or at the gym. I'm excited to connect with
        other tech enthusiasts — let's grow together!
      </div>
    </>
  );
}
