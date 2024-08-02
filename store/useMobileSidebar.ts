import { create } from "zustand";

type MobileSidebarState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useMobileSidebar = create<MobileSidebarState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
