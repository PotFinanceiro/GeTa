import { createClient } from '@supabase/supabase-js';

// Pegando as chaves do config.js
const supabaseUrl = window.APP_CONFIG.SUPABASE_URL;
const supabaseAnonKey = window.APP_CONFIG.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Criando o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
