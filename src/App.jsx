import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import styles from "./app.module.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const sectionOptions = { threshold: 0.5 };

  const { ref: homeRef, inView: homeInView } = useInView(sectionOptions);
  const { ref: aboutRef, inView: aboutInView } = useInView(sectionOptions);
  const { ref: skillsRef, inView: skillsInView } = useInView(sectionOptions);
  const { ref: projectsRef, inView: projectsInView } =
    useInView(sectionOptions);
  const { ref: contactRef, inView: contactInView } = useInView(sectionOptions);

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (skillsInView) setActiveSection("skills");
    else if (projectsInView) setActiveSection("projects");
    else if (contactInView) setActiveSection("contact");
  }, [homeInView, aboutInView, skillsInView, projectsInView, contactInView]);

  return (
    <>
      <NavBar />
      <SideBar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <main>
        <section id="home" ref={homeRef} className={clsx(styles["main-home"])}>
          <HomePage />
        </section>
        <section
          id="about"
          ref={aboutRef}
          className={clsx(styles["main-about"])}
        >
          <AboutPage />
        </section>
        <section
          id="skills"
          ref={skillsRef}
          className={clsx(styles["main-skills"])}
        >
          <SkillsPage />
        </section>
        <section
          id="projects"
          ref={projectsRef}
          className={clsx(styles["main-projects"])}
        >
          <ProjectsPage />
        </section>
        <section
          id="contact"
          ref={contactRef}
          className={clsx(styles["main-contact"])}
        >
          <ContactPage />
        </section>
      </main>
    </>
  );
}

export default App;
