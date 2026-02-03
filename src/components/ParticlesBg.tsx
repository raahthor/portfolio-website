"use client";

import clsx from "clsx";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

import styles from "./particlebg.module.css";

export default function ParticlesBG() {
  const particlesInit = async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  };

  return (
    <Particles
      className={clsx(styles["tsparticles"])}
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 100, density: { enable: true, value_area: 1000 } },
          color: { value: ["#8c52ff", "#b266ff", "#a855f7"] },
          shape: { type: "" },
          // opacity: {
          //   value: 0.3,
          //   random: true,
          //   anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
          // },
          // size: {
          //   value: 10,
          //   random: true,
          //   anim: { enable: true, speed: 3, size_min: 2, sync: false },
          // },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            attract: { enable: true, rotateX: 2000, rotateY: 2000 },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#8c52ff",
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            // repulse: { distance: 100, duration: 0.4 },
            // bubble: { distance: 150, size: 20, duration: 1, opacity: 0.5 },
            grab: {
              distance: 140,
              links: {
                opacity: 1,
                color: "#8c52ff",
              },
            },
            push: { quantity: 4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
