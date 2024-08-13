import { create } from "zustand";

type MobileSidebarState = {
  isOpen: boolean;
  setIsOpen: () => void;
  close: () => void;
};

export const useMobileSidebar = create<MobileSidebarState>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));
