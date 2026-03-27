# Vercel + Supabase Setup

Since you've connected Supabase via Vercel, follow these steps:

## 1. Set Up Database Tables

Your Supabase database needs the tables. Go to your Supabase dashboard:

1. Open **SQL Editor** in Supabase
2. Copy the contents of `supabase-schema.sql`
3. Paste and click **Run**

This creates the tables with sample data.

## 2. Configure Local Development

For local development, create a `.env.local` file:

```bash
# Copy from Vercel dashboard or Supabase dashboard
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
```

**To get these values:**
- **From Vercel**: Project Settings → Environment Variables
- **From Supabase**: Project Settings → API → Project URL & anon key

## 3. Vercel Environment Variables

Make sure these are set in Vercel (should be automatic if you used Vercel integration):
- `SUPABASE_URL` or `VITE_SUPABASE_URL`
- `SUPABASE_ANON_KEY` or `VITE_SUPABASE_ANON_KEY`

The code now supports both naming conventions!

## 4. Test Locally

```bash
npm run dev
```

Check:
- Notice Board loads from database
- Faculty Directory shows faculty
- Event registration saves to database

## 5. Deploy

```bash
vercel --prod
```

Or push to your connected Git repository for automatic deployment.

## ✅ What's Working

- **NoticeBoard** - Fetches from `notices` table
- **FacultyDirectory** - Loads from `faculty` table
- **EventRegistrationForm** - Saves to `event_registrations` table

## Troubleshooting

**"Missing Supabase environment variables" error:**
1. Check `.env.local` exists with correct values
2. Restart dev server after adding variables
3. Verify variable names match (with `VITE_` prefix for Vite)

**Data not loading:**
1. Run `supabase-schema.sql` in Supabase SQL Editor
2. Check browser console for errors
3. Verify API keys are correct
