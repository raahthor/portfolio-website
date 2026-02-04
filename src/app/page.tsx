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

export default function Page() {
  return (
    <>
      <NavBar />
      <SideBar />

      <ParticlesBG />

      <main className={styles.main}>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Analytics />
    </>
  );
}
