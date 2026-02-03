"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "./sidebar.module.css";

type Section = "home" | "about" | "skills" | "projects" | "contact";

type SideBarProps = {
  activeSection: Section | "";
  setActiveSection: React.Dispatch<React.SetStateAction<Section | "">>;
};

export default function SideBar({
  activeSection,
  setActiveSection,
}: SideBarProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const sections: Section[] = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  function handleNavigation(section: Section) {
    setMenuOpen(false);
    setActiveSection(section);
  }

  return (
    <>
      <button
        id="menu-icon"
        className={clsx(styles["menu-icon"], "hover-effect")}
        onClick={() => setMenuOpen(!menuOpen)}
      ></button>

      <aside
        className={clsx(
          styles["side-bar"],
          "lm-side-bar",
          menuOpen && styles["open"],
        )}
      >
        <div className={styles.profile}>
          <div className={styles["code-snippet1"]}>&lt;div&gt;</div>
          <div className={styles["profile-text"]}>
            Driven by Logic, Powered by Creativity.
          </div>
          <div className={styles["code-snippet1"]}>&lt;/div&gt;</div>
        </div>
        <ul>
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => handleNavigation(section)}
                className={clsx(
                  "hover-effect",
                  activeSection === section && styles["clicked"],
                )}
              >
                .{section}()
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setMenuOpen(false)}
          className={clsx(styles["overlay"], menuOpen && styles["show"])}
        ></div>
      </aside>
    </>
  );
}
