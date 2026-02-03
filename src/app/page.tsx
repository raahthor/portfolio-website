"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

import styles from "./page.module.css";

import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ParticlesBG from "@/components/ParticlesBg";

import { Analytics } from "@vercel/analytics/react";

type SectionName = "home" | "about" | "skills" | "projects" | "contact" | "";

export default function Page() {
  const [activeSection, setActiveSection] = useState<SectionName>("");

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
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <ParticlesBG />

      <main className={clsx(styles["main"])}>
        <section
          id="home"
          ref={homeRef}
          className={clsx(styles["main-home"], styles.section)}
        >
          <HomeSection />
        </section>

        <section
          id="about"
          ref={aboutRef}
          className={clsx(styles["main-about"], styles.section)}
        >
          <AboutSection />
        </section>

        <section
          id="skills"
          ref={skillsRef}
          className={clsx(styles["main-skills"], styles.section)}
        >
          <SkillsSection />
        </section>

        <section
          id="projects"
          ref={projectsRef}
          className={clsx(styles["main-projects"], styles.section)}
        >
          <ProjectsSection />
        </section>

        <section
          id="contact"
          ref={contactRef}
          className={clsx(styles["main-contact"], styles.section)}
        >
          <ContactSection />
        </section>
      </main>

      <Analytics />
    </>
  );
}
