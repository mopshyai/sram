# Supabase Setup Guide for SRAM College Website

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in your project details:
   - Name: SRAM College
   - Database Password: (choose a strong password)
   - Region: (choose closest to your users)
4. Wait for the project to be created (takes ~2 minutes)

## 2. Set Up Database Tables

1. In your Supabase dashboard, go to the **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `supabase-schema.sql` file
4. Click "Run" to execute the SQL

This will create:
- `notices` table - for notice board announcements
- `faculty` table - for faculty directory
- `event_registrations` table - for event registration submissions
- Row Level Security policies for public read access
- Sample data for notices and faculty

## 3. Get Your API Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

## 4. Configure Environment Variables

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

3. **Important**: Never commit `.env` to git. It's already in `.gitignore`

## 5. Test the Connection

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your browser and check:
   - Notice Board should load data from Supabase
   - Faculty Directory should display faculty from database
   - Event Registration form should save to database

## 6. Verify Data in Supabase

1. Go to **Table Editor** in Supabase dashboard
2. Check the tables:
   - `notices` - should have 8 sample notices
   - `faculty` - should have 8 faculty members
   - `event_registrations` - will populate when users register

## Features Implemented

### ✅ Notice Board
- Fetches notices from Supabase `notices` table
- Real-time updates when data changes
- Displays by category (admission, exam, event, general, urgent)
- Shows "NEW" badge for recent notices

### ✅ Faculty Directory
- Loads faculty from Supabase `faculty` table
- Filter by department
- Displays contact information
- Profile images and qualifications

### ✅ Event Registration
- Saves registrations to `event_registrations` table
- Form validation with Zod
- Success/error handling
- Email confirmation message

## Database Schema

### notices
```sql
- id (bigint, primary key)
- title (text)
- date (text)
- category (text: admission|exam|event|general|urgent)
- is_new (boolean)
- link (text, optional)
- created_at (timestamp)
```

### faculty
```sql
- id (bigint, primary key)
- name (text)
- designation (text)
- department (text)
- qualification (text)
- experience (text)
- image (text, URL)
- email (text, unique)
- phone (text, optional)
- created_at (timestamp)
```

### event_registrations
```sql
- id (bigint, primary key)
- event_title (text)
- event_date (text)
- full_name (text)
- email (text)
- phone (text)
- department (text)
- year_of_study (text)
- additional_info (text, optional)
- created_at (timestamp)
```

## Security

- Row Level Security (RLS) is enabled on all tables
- Public can read notices and faculty
- Anyone can submit event registrations
- Only authenticated users can modify data
- API keys are stored in environment variables

## Adding More Data

### Add a Notice
```sql
INSERT INTO notices (title, date, category, is_new, link)
VALUES ('Your Notice Title', 'Date', 'category', true, '/link');
```

### Add Faculty Member
```sql
INSERT INTO faculty (name, designation, department, qualification, experience, image, email)
VALUES ('Name', 'Designation', 'department', 'Qualification', 'Experience', 'image-url', 'email@example.com');
```

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure `.env` file exists in project root
- Check that variable names start with `VITE_`
- Restart dev server after adding environment variables

### Data not loading
- Check browser console for errors
- Verify Supabase project is active
- Check API keys are correct
- Verify tables exist in Supabase dashboard

### Registration not saving
- Check `event_registrations` table exists
- Verify RLS policies allow inserts
- Check browser console for error messages

## Next Steps

1. **Add Authentication**: Implement admin login to manage content
2. **Real-time Updates**: Use Supabase subscriptions for live data
3. **File Storage**: Use Supabase Storage for faculty images
4. **Email Notifications**: Send confirmation emails on registration
5. **Analytics**: Track page views and registrations

## Support

For issues with:
- Supabase: [https://supabase.com/docs](https://supabase.com/docs)
- This project: Check the code comments and console logs
