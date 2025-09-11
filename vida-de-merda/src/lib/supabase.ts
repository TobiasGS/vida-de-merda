import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sadehqajqbjudckhsusr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZGVocWFqcWJqdWRja2hzdXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MDc0OTcsImV4cCI6MjA3MTE4MzQ5N30.etOHthFoKGOP354xT0U3GpjlbAc5MSTugR2O_vwuJ_E'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Post = {
  id: string
  content: string
  created_at: string
  is_approved: boolean
  category_id?: string
  likes_count?: number
  is_featured?: boolean
}