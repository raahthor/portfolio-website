import { useState, useEffect } from "react";
import styles from "./sidebar.module.css";
import clsx from "clsx";

export default function SideBar({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "skills", "projects", "contact"];

  function handleNavigation(section) {
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
          menuOpen && styles["open"]
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
                onClick={(ev) => handleNavigation(ev, section)}
                className={clsx(
                  "hover-effect",
                  activeSection === section && styles["clicked"]
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
