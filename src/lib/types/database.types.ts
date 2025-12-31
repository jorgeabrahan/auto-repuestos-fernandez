export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      app_users: {
        Row: {
          auth_user_id: string
          can_manage_docs: boolean
          can_manage_inventory: boolean
          created_at: string
          id: number
          is_admin: boolean
          organization_id: number
          updated_at: string
        }
        Insert: {
          auth_user_id: string
          can_manage_docs?: boolean
          can_manage_inventory?: boolean
          created_at?: string
          id?: number
          is_admin?: boolean
          organization_id: number
          updated_at?: string
        }
        Update: {
          auth_user_id?: string
          can_manage_docs?: boolean
          can_manage_inventory?: boolean
          created_at?: string
          id?: number
          is_admin?: boolean
          organization_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "app_users_organization_id_fkey1"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      cai_ranges: {
        Row: {
          cai: string
          created_at: string
          expires_at: string
          id: number
          is_active: boolean
          is_current: boolean
          next_invoice_number: string
          organization_id: number
          range_end: string
          range_start: string
          updated_at: string
        }
        Insert: {
          cai: string
          created_at?: string
          expires_at: string
          id?: number
          is_active?: boolean
          is_current?: boolean
          next_invoice_number: string
          organization_id: number
          range_end: string
          range_start: string
          updated_at?: string
        }
        Update: {
          cai?: string
          created_at?: string
          expires_at?: string
          id?: number
          is_active?: boolean
          is_current?: boolean
          next_invoice_number?: string
          organization_id?: number
          range_end?: string
          range_start?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cai_ranges_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      document_items: {
        Row: {
          created_at: string
          document_id: number
          historical_title: string
          historical_unit_price: number
          id: number
          inventory_item_id: number
          quantity: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          document_id: number
          historical_title: string
          historical_unit_price: number
          id?: number
          inventory_item_id: number
          quantity: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          document_id?: number
          historical_title?: string
          historical_unit_price?: number
          id?: number
          inventory_item_id?: number
          quantity?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_items_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_totals"
            referencedColumns: ["document_id"]
          },
          {
            foreignKeyName: "document_items_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_items_inventory_item_id_fkey"
            columns: ["inventory_item_id"]
            isOneToOne: false
            referencedRelation: "inventory_items"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          cai_range_id: number | null
          created_at: string
          customer_name: string | null
          customer_rtn: string | null
          id: number
          invoice_issued_at: string | null
          invoice_number: number | null
          organization_id: number
          status: string
          updated_at: string
        }
        Insert: {
          cai_range_id?: number | null
          created_at?: string
          customer_name?: string | null
          customer_rtn?: string | null
          id?: number
          invoice_issued_at?: string | null
          invoice_number?: number | null
          organization_id: number
          status: string
          updated_at?: string
        }
        Update: {
          cai_range_id?: number | null
          created_at?: string
          customer_name?: string | null
          customer_rtn?: string | null
          id?: number
          invoice_issued_at?: string | null
          invoice_number?: number | null
          organization_id?: number
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_cai_range_id_fkey"
            columns: ["cai_range_id"]
            isOneToOne: false
            referencedRelation: "cai_ranges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_items: {
        Row: {
          created_at: string
          id: number
          organization_id: number
          part_number: string
          stock_quantity: number
          title: string
          unit_price: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          organization_id: number
          part_number: string
          stock_quantity?: number
          title: string
          unit_price: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          organization_id?: number
          part_number?: string
          stock_quantity?: number
          title?: string
          unit_price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_items_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      document_totals: {
        Row: {
          document_id: number | null
          subtotal: number | null
          tax_15: number | null
          total: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
