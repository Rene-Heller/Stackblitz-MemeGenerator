import { createClient } from '@supabase/supabase-js';
// import { SUPABASE_ANON_KEY, SUPABASE_URL } from '.env';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// const supabaseUrl = SUPABASE_URL;
// const supabaseKey = SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
