import { create } from "zustand";

interface LandingStore {
  sideMenuOpen: boolean;
  toggleSideMenuOpen: () => void;
  closeSideMenu: () => void;
}

const useLandingStore = create<LandingStore>((set) => ({
  sideMenuOpen: false,
  toggleSideMenuOpen: () =>
    set((state) => ({ sideMenuOpen: !state.sideMenuOpen })),
    closeSideMenu: () => set({ sideMenuOpen: false }),
}));

export default useLandingStore;
