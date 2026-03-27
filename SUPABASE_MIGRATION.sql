-- ============================================
-- SRAM Admin Portal - Add Missing Columns
-- Run this FIRST to update existing tables
-- ============================================

-- Add missing columns to existing tables
ALTER TABLE notices ADD COLUMN IF NOT EXISTS visible BOOLEAN DEFAULT true;
ALTER TABLE notices ADD COLUMN IF NOT EXISTS file_url TEXT;
ALTER TABLE notices ADD COLUMN IF NOT EXISTS description TEXT;

ALTER TABLE events ADD COLUMN IF NOT EXISTS visible BOOLEAN DEFAULT true;
ALTER TABLE events ADD COLUMN IF NOT EXISTS cover_image TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS description TEXT;

ALTER TABLE downloads ADD COLUMN IF NOT EXISTS visible BOOLEAN DEFAULT true;

-- Now create the new tables that don't exist yet
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

-- Enable Row Level Security on all tables
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

-- Drop all existing policies to avoid conflicts
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public'
              AND tablename IN ('notices', 'events', 'gallery', 'downloads', 'teachers',
                               'messages', 'banners', 'fee_structure', 'scholarships', 'sample_papers'))
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS "Authenticated users can do everything on ' || r.tablename || '" ON ' || r.tablename;
        EXECUTE 'DROP POLICY IF EXISTS "Public can read visible ' || r.tablename || '" ON ' || r.tablename;
        EXECUTE 'DROP POLICY IF EXISTS "Public can read ' || r.tablename || '" ON ' || r.tablename;
        EXECUTE 'DROP POLICY IF EXISTS "Public can insert ' || r.tablename || '" ON ' || r.tablename;
    END LOOP;
END $$;

-- Create RLS Policies: Authenticated users have full CRUD access
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
-- ✅ MIGRATION COMPLETE!
-- ============================================
-- Your existing data is preserved.
-- New columns and tables have been added.
-- All RLS policies are configured.
--
-- NEXT STEPS:
-- 1. Create Storage Bucket "college" (PUBLIC)
-- 2. Create Admin User in Authentication
-- 3. Access: https://your-domain.com/admin/login
-- ============================================
