-- ============================================
-- SRAM Admin Portal - Database Setup (SAFE)
-- This script checks for existing tables before creating
-- Run this SQL in Supabase SQL Editor
-- ============================================

-- Create tables (only if they don't exist)
CREATE TABLE IF NOT EXISTS notices (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  file_url TEXT,
  visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS events (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date DATE NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  cover_image TEXT,
  visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS gallery (
  id BIGSERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  category TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS downloads (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  file_url TEXT NOT NULL,
  visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS teachers (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  department TEXT NOT NULL,
  qualification TEXT,
  email TEXT,
  phone TEXT,
  photo TEXT,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS banners (
  id BIGSERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption TEXT,
  link TEXT,
  order_num INTEGER DEFAULT 0,
  visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS fee_structure (
  id BIGSERIAL PRIMARY KEY,
  course TEXT NOT NULL,
  semester_year TEXT NOT NULL,
  tuition_fee NUMERIC(10,2),
  other_fees NUMERIC(10,2),
  total NUMERIC(10,2),
  note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS scholarships (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  eligibility TEXT,
  amount TEXT,
  deadline DATE,
  description TEXT,
  form_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sample_papers (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  course TEXT NOT NULL,
  subject TEXT NOT NULL,
  year TEXT NOT NULL,
  file_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE fee_structure ENABLE ROW LEVEL SECURITY;
ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE sample_papers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Authenticated users can do everything on notices" ON notices;
DROP POLICY IF EXISTS "Authenticated users can do everything on events" ON events;
DROP POLICY IF EXISTS "Authenticated users can do everything on gallery" ON gallery;
DROP POLICY IF EXISTS "Authenticated users can do everything on downloads" ON downloads;
DROP POLICY IF EXISTS "Authenticated users can do everything on teachers" ON teachers;
DROP POLICY IF EXISTS "Authenticated users can do everything on messages" ON messages;
DROP POLICY IF EXISTS "Authenticated users can do everything on banners" ON banners;
DROP POLICY IF EXISTS "Authenticated users can do everything on fee_structure" ON fee_structure;
DROP POLICY IF EXISTS "Authenticated users can do everything on scholarships" ON scholarships;
DROP POLICY IF EXISTS "Authenticated users can do everything on sample_papers" ON sample_papers;

DROP POLICY IF EXISTS "Public can read visible notices" ON notices;
DROP POLICY IF EXISTS "Public can read visible events" ON events;
DROP POLICY IF EXISTS "Public can read gallery" ON gallery;
DROP POLICY IF EXISTS "Public can read visible downloads" ON downloads;
DROP POLICY IF EXISTS "Public can read teachers" ON teachers;
DROP POLICY IF EXISTS "Public can insert messages" ON messages;
DROP POLICY IF EXISTS "Public can read visible banners" ON banners;
DROP POLICY IF EXISTS "Public can read fee_structure" ON fee_structure;
DROP POLICY IF EXISTS "Public can read scholarships" ON scholarships;
DROP POLICY IF EXISTS "Public can read sample_papers" ON sample_papers;

-- RLS Policies: Authenticated users have full CRUD access
CREATE POLICY "Authenticated users can do everything on notices" ON notices
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on events" ON events
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on gallery" ON gallery
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on downloads" ON downloads
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on teachers" ON teachers
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on messages" ON messages
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on banners" ON banners
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on fee_structure" ON fee_structure
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on scholarships" ON scholarships
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can do everything on sample_papers" ON sample_papers
  FOR ALL USING (auth.role() = 'authenticated');

-- Public read policies for visible content
CREATE POLICY "Public can read visible notices" ON notices
  FOR SELECT USING (visible = true);

CREATE POLICY "Public can read visible events" ON events
  FOR SELECT USING (visible = true);

CREATE POLICY "Public can read gallery" ON gallery
  FOR SELECT USING (true);

CREATE POLICY "Public can read visible downloads" ON downloads
  FOR SELECT USING (visible = true);

CREATE POLICY "Public can read teachers" ON teachers
  FOR SELECT USING (true);

CREATE POLICY "Public can insert messages" ON messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can read visible banners" ON banners
  FOR SELECT USING (visible = true);

CREATE POLICY "Public can read fee_structure" ON fee_structure
  FOR SELECT USING (true);

CREATE POLICY "Public can read scholarships" ON scholarships
  FOR SELECT USING (true);

CREATE POLICY "Public can read sample_papers" ON sample_papers
  FOR SELECT USING (true);

-- ============================================
-- SUCCESS! Tables and policies are ready.
-- ============================================
-- NEXT STEPS:
-- 1. Create Storage Bucket:
--    - Go to Storage in Supabase Dashboard
--    - Create bucket named "college"
--    - Make it PUBLIC
--
-- 2. Create Admin User:
--    - Go to Authentication → Users
--    - Click "Add user"
--    - Enter email and password
--
-- 3. Access Admin Portal:
--    - Navigate to: https://your-domain.com/admin/login
-- ============================================
