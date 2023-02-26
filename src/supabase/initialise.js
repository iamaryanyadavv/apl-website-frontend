import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rpvwedchkbnncluljqrv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdndlZGNoa2JubmNsdWxqcXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTY3NDMsImV4cCI6MTk5Mjk5Mjc0M30.btYn4ZujNlubpkmH6YbV_M5r9nWBqgBMPYvSAZ5Cc7s'
export const supabase = createClient(supabaseUrl, supabaseKey)