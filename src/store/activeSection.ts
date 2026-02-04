"use client";
import { create } from "zustand";

export type SectionName = "home" | "about" | "skills" | "projects" | "contact";
type ActiveSectionStore = {
  active: SectionName;
  setActive: (section: SectionName) => void;
};
export const useActiveSection = create<ActiveSectionStore>((set) => ({
  active: "home",
  setActive: (active) => set({ active }),
}));