import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import clsx from "clsx";

export default function NavBar() {
  const [isPfpOpen, setIsPfpOpen] = useState(false);
  const [isThemeChange, setIsThemeChange] = useState(false);

  function changeTheme() {
    setIsThemeChange(!isThemeChange);
  }

  useEffect(() => {
    const rootDiv = document.querySelector("#root");
    if (rootDiv) {
      rootDiv.classList.toggle("light-mode",isThemeChange);
    }
  }, [isThemeChange]);

  return (
    <>
      <nav className={clsx(styles["nav-bar"], "lm-nav")}>
        <button
          className={clsx(styles["profile-icon"], "hover-effect")}
          onClick={() => setIsPfpOpen(true)}
        ></button>
        <div
          className={clsx(
            styles["theme-toggle"],
            "hover-effect",
            isThemeChange && styles["moon-toggle"]
          )}
          type="button"
          onClick={changeTheme}
        ></div>
      </nav>
      <div
        onClick={() => setIsPfpOpen(false)}
        className={clsx(styles["pfp"], isPfpOpen && styles["pfp-opened"])}
      >
        <p>Click or tap anywhere to close!</p>
        <img src="/profileicon.jpg" alt="profile image opened" />
      </div>
    </>
  );
}
