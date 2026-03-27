import { supabase } from './supabase';

// Admin-specific database types
export interface AdminNotice {
  id?: number;
  title: string;
  category: string;
  description?: string;
  date: string;
  file_url?: string;
  visible: boolean;
  created_at?: string;
}

export interface AdminEvent {
  id?: number;
  title: string;
  date: string;
  category: string;
  description?: string;
  cover_image?: string;
  visible: boolean;
  created_at?: string;
}

export interface GalleryImage {
  id?: number;
  url: string;
  category: string;
  caption?: string;
  created_at?: string;
}

export interface Download {
  id?: number;
  title: string;
  category: string;
  file_url: string;
  visible: boolean;
  created_at?: string;
}

export interface Teacher {
  id?: number;
  name: string;
  designation: string;
  department: string;
  qualification?: string;
  email?: string;
  phone?: string;
  photo?: string;
  order_num: number;
  created_at?: string;
}

export interface Message {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  read: boolean;
  created_at?: string;
}

export interface Banner {
  id?: number;
  image_url: string;
  caption?: string;
  link?: string;
  order_num: number;
  visible: boolean;
  created_at?: string;
}

export interface FeeStructure {
  id?: number;
  course: string;
  semester_year: string;
  tuition_fee?: number;
  other_fees?: number;
  total?: number;
  note?: string;
  created_at?: string;
}

export interface Scholarship {
  id?: number;
  title: string;
  eligibility?: string;
  amount?: string;
  deadline?: string;
  description?: string;
  form_url?: string;
  created_at?: string;
}

export interface SamplePaper {
  id?: number;
  title: string;
  course: string;
  subject: string;
  year: string;
  file_url: string;
  created_at?: string;
}

// File upload helper
export const uploadFile = async (file: File, folder: string = '') => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('college')
    .upload(fileName, file);

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from('college')
    .getPublicUrl(fileName);

  return publicUrl;
};

// Delete file helper
export const deleteFile = async (url: string) => {
  const path = url.split('/college/')[1];
  if (!path) return;

  await supabase.storage.from('college').remove([path]);
};

export { supabase };
