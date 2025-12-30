import { create } from "zustand";

interface Store {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
}

const useSidebarStore = create<Store>((set) => ({
  isMobileSidebarOpen: false,
  toggleMobileSidebar: () =>
    set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
}));

export default useSidebarStore;
