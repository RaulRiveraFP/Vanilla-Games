import { createClient } from '@supabase/supabase-js'
// Creando la conexión con supabase
const supabaseUrl = 'https://iptfrufzwzfwuapvfyrn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwdGZydWZ6d3pmd3VhcHZmeXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDg0OTcsImV4cCI6MjAyMzQyNDQ5N30.UydoircvwWJfaMoNj-2q9dd6VMKkv764PWTO7htLLEs'

// exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
