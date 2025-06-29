import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type RSVPData = {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  attendance: 'yes' | 'no'
  plusOne: boolean
  plusOneName?: string
  dietaryRestrictions?: string
  mealPreference?: string
  songRequest?: string
  specialAccommodations?: string
  message?: string
  createdAt?: string
}