import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabaseClient: any;

if (supabaseUrl && supabaseAnonKey) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.warn('Backend Supabase credentials missing. Ranking features will be disabled.');
    // Dummy client to prevent crashes while calling methods
    supabaseClient = {
        from: () => ({
            select: () => ({
                order: () => ({
                    limit: () => Promise.resolve({ data: [], error: null })
                })
            })
        })
    };
}

export const supabase = supabaseClient;
