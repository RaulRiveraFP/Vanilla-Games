import { createClient } from '@supabase/supabase-js'
// Creando la conexión con supabase
const supabaseUrl = 'https://snyzfvtempkxddfgrfji.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNueXpmdnRlbXBreGRkZmdyZmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyODE0ODYsImV4cCI6MTk5ODg1NzQ4Nn0.5Q9IBst3l-ohFkaC2MARtfSHe_X-BPCJLDzeHdt8RVY'

// exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
