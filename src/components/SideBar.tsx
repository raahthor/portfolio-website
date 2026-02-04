"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "./sidebar.module.css";
import { SectionName, useActiveSection } from "@/store/activeSection";

export default function SideBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const active = useActiveSection((state) => state.active);
  const setActive = useActiveSection((state) => state.setActive);

  const sections: SectionName[] = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  function handleNavigation(section: SectionName) {
    setMenuOpen(false);
    setActive(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
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
                  active === section && styles["clicked"],
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
