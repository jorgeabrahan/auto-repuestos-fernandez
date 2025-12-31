import type { AuthError, User } from "@supabase/supabase-js";
import { supabase } from "../config/supabase";
import type { AppUser } from "../lib/types/db.responses.types";

export class ServiceAuth {
  static async getUser(): Promise<{
    ok: boolean;
    data: { user: User; appUser: AppUser } | null;
    error: string | null;
  }> {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error || user == null) throw error;
      const resAppUser = await supabase
        .from("app_users")
        .select("*, organizations(*)")
        .eq("auth_user_id", user.id)
        .maybeSingle();
      if (resAppUser.error || resAppUser.data == null) throw resAppUser.error;
      return {
        ok: true,
        data: {
          user,
          appUser: resAppUser.data,
        },
        error: error,
      };
    } catch (error) {
      const fallbackError = "Ocurrió un error al obtener el usuario.";
      return {
        ok: false,
        data: null,
        error: (error as AuthError)?.message ?? fallbackError,
      };
    }
  }

  static async signIn(
    email: string,
    password: string,
  ): Promise<{
    ok: boolean;
    data: { user: User; appUser: AppUser } | null;
    error: string | null;
  }> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      const resAppUser = await supabase
        .from("app_users")
        .select("*, organizations(*)")
        .eq("auth_user_id", data.user.id)
        .maybeSingle();
      if (resAppUser.error || resAppUser.data == null) throw resAppUser.error;
      return {
        ok: true,
        data: {
          user: data.user,
          appUser: resAppUser.data,
        },
        error: null,
      };
    } catch (error) {
      const fallbackError = "Ocurrió un error al iniciar sesión.";
      return {
        ok: false,
        data: null,
        error: (error as AuthError)?.message ?? fallbackError,
      };
    }
  }

  static async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return {
        ok: true,
        data: null,
        error: null,
      };
    } catch (error) {
      const fallbackError = "Ocurrió un error al cerrar sesión.";
      return {
        ok: false,
        data: null,
        error: (error as AuthError)?.message ?? fallbackError,
      };
    }
  }
}
