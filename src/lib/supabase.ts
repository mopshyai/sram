import { createClient } from '@supabase/supabase-js';

// Support both Vercel and local environment variable naming
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.VITE_SUPABASE_PROJECT_URL ||
  import.meta.env.SUPABASE_URL;

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_KEY ||
  import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file or Vercel environment settings.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Notice {
  id: number;
  title: string;
  date: string;
  category: 'admission' | 'exam' | 'event' | 'general' | 'urgent';
  is_new: boolean;
  link?: string;
  created_at?: string;
}

export interface Faculty {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  image: string;
  email: string;
  phone?: string;
  created_at?: string;
}

export interface EventRegistration {
  id?: number;
  event_title: string;
  event_date: string;
  full_name: string;
  email: string;
  phone: string;
  department: string;
  year_of_study: string;
  additional_info?: string;
  created_at?: string;
}
