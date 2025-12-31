import type { User } from "@supabase/supabase-js";
import { create } from "zustand";
import type { AppUser } from "../lib/types/db.responses.types";

type Store = {
  user: User | null;
  appUser: AppUser | null;
  setSession: ({ user, appUser }: { user: User; appUser: AppUser }) => void;
  clearSession: () => void;
};

const useSessionStore = create<Store>()((set) => ({
  user: null,
  appUser: null,
  setSession: ({ user, appUser }) => set({ user, appUser }),
  clearSession: () => set({ user: null, appUser: null }),
}));

export default useSessionStore;
