import type { Tables } from "./database.types";

export type AppUser = Tables<"app_users"> & {
  organizations: Tables<"organizations">;
};
