# 🎓 SRAM Admin Portal - Complete Setup Guide

## ✅ What's Been Built

A full-featured Admin Portal for Shri Ram Adarsh Mahavidyalaya at `/admin` route with:

### 📊 11 Management Modules
1. **Dashboard** - Statistics overview with unread message count
2. **Notices** - Manage notices with PDF attachments
3. **Events & Activities** - Event management with cover images (5 categories)
4. **Photo Gallery** - Image uploads with categories
5. **Download Center** - File management (6 categories)
6. **Faculty & Staff** - Teacher profiles with photos and ordering
7. **Messages Inbox** - Contact form submissions with read/unread status
8. **Homepage Banners** - Banner management with ordering
9. **Fee Structure** - Course-wise fee management
10. **Scholarships** - Scholarship info with application forms
11. **Sample Papers** - Academic papers by course/subject/year

### 🎨 Features
- ✅ Maroon theme (#8B1A1A) matching college branding
- ✅ Mobile responsive with collapsible sidebar
- ✅ Supabase Auth (email/password)
- ✅ Protected routes with session checks
- ✅ File uploads to Supabase Storage
- ✅ Visible/Hidden toggles for content
- ✅ Drag-to-reorder for faculty and banners
- ✅ Unread message badge in sidebar
- ✅ Real-time stats on dashboard

---

## 🚀 Setup Instructions

### Step 1: Run SQL in Supabase

1. Open Supabase Dashboard
2. Go to **SQL Editor**
3. Copy and paste the contents of `SUPABASE_ADMIN_SETUP.sql`
4. Click **Run**

This creates:
- 10 database tables
- Row Level Security (RLS) policies
- Public read access for visible content
- Full CRUD access for authenticated users

### Step 2: Create Storage Bucket

1. Go to **Storage** in Supabase Dashboard
2. Click **"Create a new bucket"**
3. Name: `college`
4. Make it **Public** ✅
5. Click **"Create bucket"**

### Step 3: Create Admin User

1. Go to **Authentication** → **Users**
2. Click **"Add user"**
3. Enter:
   - Email: `admin@sram.edu` (or your preferred email)
   - Password: (create a strong password)
4. Click **"Create user"**

### Step 4: Deploy to Vercel

Your existing Vercel deployment will automatically pick up the changes:

```bash
git add .
git commit -m "Add admin portal"
git push
```

Vercel will auto-deploy with the existing Supabase environment variables.

### Step 5: Access Admin Portal

1. Navigate to: `https://your-domain.vercel.app/admin/login`
2. Login with the credentials you created in Step 3
3. You'll be redirected to `/admin/dashboard`

---

## 📁 File Structure

```
src/
├── contexts/
│   └── AuthContext.tsx              # Supabase auth context
├── lib/
│   └── adminSupabase.ts             # Admin types & file upload helpers
├── components/
│   └── admin/
│       ├── AdminLayout.tsx          # Admin page layout wrapper
│       ├── AdminSidebar.tsx         # Sidebar navigation
│       └── ProtectedRoute.tsx       # Route protection HOC
└── pages/
    └── admin/
        ├── AdminLogin.tsx           # Login page
        ├── AdminDashboard.tsx       # Dashboard with stats
        ├── AdminNotices.tsx         # Notices management
        ├── AdminEvents.tsx          # Events management
        ├── AdminGallery.tsx         # Gallery management
        ├── AdminDownloads.tsx       # Downloads management
        ├── AdminFaculty.tsx         # Faculty management
        ├── AdminMessages.tsx        # Messages inbox
        ├── AdminBanners.tsx         # Banners management
        ├── AdminFeeStructure.tsx    # Fee structure management
        ├── AdminScholarships.tsx    # Scholarships management
        └── AdminSamplePapers.tsx    # Sample papers management
```

---

## 🔐 Security

- ✅ All admin routes protected with authentication
- ✅ RLS policies on all tables
- ✅ Authenticated users only can modify data
- ✅ Public users can only read visible content
- ✅ File upload validation
- ✅ Session-based authentication

---

## 📱 Mobile Responsive

- Collapsible sidebar on mobile
- Touch-friendly controls
- Optimized table layouts
- Responsive dialogs and forms

---

## 🎯 Usage Examples

### Adding a Notice
1. Go to `/admin/notices`
2. Click "Add Notice"
3. Fill in title, category, date, description
4. Upload PDF (optional)
5. Toggle visibility
6. Click "Create"

### Managing Faculty Order
1. Go to `/admin/faculty`
2. Use ↑↓ arrows to reorder
3. Changes save automatically

### Viewing Messages
1. Go to `/admin/messages`
2. Unread messages highlighted in blue
3. Click eye icon to view
4. Click mail icon to reply via email
5. Messages auto-mark as read when viewed

---

## 🔄 Integration with Existing Website

The admin portal is completely separate from your existing website code. To integrate the data:

### Example: Display Notices on Homepage

```tsx
import { supabase } from '@/lib/supabase';

const { data: notices } = await supabase
  .from('notices')
  .select('*')
  .eq('visible', true)
  .order('date', { ascending: false })
  .limit(5);
```

### Example: Display Events

```tsx
const { data: events } = await supabase
  .from('events')
  .select('*')
  .eq('visible', true)
  .order('date', { ascending: false });
```

### Example: Display Gallery

```tsx
const { data: images } = await supabase
  .from('gallery')
  .select('*')
  .order('created_at', { ascending: false });
```

---

## 🛠️ Troubleshooting

### Can't login?
- Check that you created a user in Supabase Authentication
- Verify Supabase environment variables are set in Vercel

### Files not uploading?
- Ensure the `college` bucket exists and is PUBLIC
- Check browser console for errors

### Tables not found?
- Run the SQL setup script in Supabase SQL Editor
- Check that all tables were created successfully

---

## 📞 Support

For issues or questions, check:
1. `ADMIN_PORTAL_README.md` - Detailed feature documentation
2. `SUPABASE_ADMIN_SETUP.sql` - Database setup script
3. Supabase Dashboard logs for errors

---

## ✨ Next Steps

1. ✅ Run SQL setup
2. ✅ Create storage bucket
3. ✅ Create admin user
4. ✅ Deploy to Vercel
5. ✅ Login and start managing content!

Your admin portal is ready to use! 🎉
