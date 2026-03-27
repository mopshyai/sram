-- Create tables for SRAM College website

-- Notices table
CREATE TABLE notices (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('admission', 'exam', 'event', 'general', 'urgent')),
  is_new BOOLEAN DEFAULT true,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Faculty table
CREATE TABLE faculty (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  department TEXT NOT NULL,
  qualification TEXT NOT NULL,
  experience TEXT NOT NULL,
  image TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Event registrations table
CREATE TABLE event_registrations (
  id BIGSERIAL PRIMARY KEY,
  event_title TEXT NOT NULL,
  event_date TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  department TEXT NOT NULL,
  year_of_study TEXT NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- Policies for notices (public read, authenticated write)
CREATE POLICY "Public can view notices" ON notices
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert notices" ON notices
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update notices" ON notices
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Policies for faculty (public read, authenticated write)
CREATE POLICY "Public can view faculty" ON faculty
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert faculty" ON faculty
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update faculty" ON faculty
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Policies for event registrations (anyone can insert, authenticated can read)
CREATE POLICY "Anyone can register for events" ON event_registrations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view registrations" ON event_registrations
  FOR SELECT USING (auth.role() = 'authenticated');

-- Insert sample data for notices
INSERT INTO notices (title, date, category, is_new, link) VALUES
  ('Admissions Open for Session 2026-27 - Apply Now', 'Jan 2026', 'admission', true, '/admissions'),
  ('D.Pharma Admission - BTE Code 1708', 'Jan 2026', 'admission', true, '/admissions'),
  ('Last Date for Fee Submission Extended to 31st Jan', '20 Jan 2026', 'urgent', true, null),
  ('Annual Day Celebration on 15th February 2026', '15 Jan 2026', 'event', true, '/events'),
  ('Mid-Term Exam Schedule Released - Download Now', '10 Jan 2026', 'exam', false, '/downloads'),
  ('Free Education for Orphan Students - Apply', 'Ongoing', 'general', false, '/admissions'),
  ('NCC & NSS Enrollment Open for New Batches', '2026', 'general', false, '/ncc-nss'),
  ('Guest Lecture on NEP 2020 by Dr. R.K. Sharma', '5 Feb 2026', 'event', false, '/events');

-- Insert sample data for faculty
INSERT INTO faculty (name, designation, department, qualification, experience, image, email) VALUES
  ('Dr. Rajesh Kumar Sharma', 'Principal & HOD', 'education', 'Ph.D., M.Ed., B.Ed.', '25+ Years', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face', 'principal@sram.edu.in'),
  ('Prof. Sunita Verma', 'Associate Professor', 'arts', 'M.A., Ph.D. (Hindi)', '18 Years', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face', 'sunita.v@sram.edu.in'),
  ('Dr. Amit Singh', 'Assistant Professor', 'law', 'LL.M., Ph.D.', '12 Years', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', 'amit.singh@sram.edu.in'),
  ('Dr. Priya Agarwal', 'HOD - Pharmacy', 'pharmacy', 'M.Pharm, Ph.D.', '15 Years', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face', 'priya.a@sram.edu.in'),
  ('Prof. Vikram Yadav', 'Associate Professor', 'commerce', 'M.Com, MBA, NET', '14 Years', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face', 'vikram.y@sram.edu.in'),
  ('Dr. Meena Kumari', 'Assistant Professor', 'education', 'M.Ed., Ph.D.', '10 Years', 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face', 'meena.k@sram.edu.in'),
  ('Prof. Ramesh Chandra', 'Senior Lecturer', 'arts', 'M.Sc. (Physics), B.Ed.', '20 Years', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face', 'ramesh.c@sram.edu.in'),
  ('Dr. Kavita Mishra', 'Assistant Professor', 'law', 'LL.B., LL.M.', '8 Years', 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face', 'kavita.m@sram.edu.in');

