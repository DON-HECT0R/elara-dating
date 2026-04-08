import { createClient } from '@supabase/supabase-js'

const url  = import.meta.env.VITE_SUPABASE_URL  as string | undefined
const key  = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// Supabase client — null when env vars are not configured
export const supabase = url && key ? createClient(url, key) : null

export const APP_STORE_URL  = import.meta.env.VITE_APP_STORE_URL  as string | undefined
export const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL as string | undefined
