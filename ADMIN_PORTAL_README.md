# Admin Portal Setup Guide

## 1. Run SQL in Supabase

Go to your Supabase Dashboard → SQL Editor and run the SQL provided above to create all tables and RLS policies.

## 2. Create Storage Bucket

1. Go to Supabase Dashboard → Storage
2. Click "Create a new bucket"
3. Name: `college`
4. Make it **Public**
5. Click "Create bucket"

## 3. Create Admin User

In Supabase Dashboard → Authentication → Users:
1. Click "Add user"
2. Enter email and password for your admin account
3. Click "Create user"

## 4. Access Admin Portal

1. Navigate to: `https://your-domain.com/admin/login`
2. Login with the credentials you created
3. You'll be redirected to the dashboard

## Admin Portal Features

### Dashboard (`/admin/dashboard`)
- Overview statistics for all content types
- Unread messages count

### Notices (`/admin/notices`)
- Add/edit/delete notices
- Upload PDF attachments
- Toggle visibility
- Categorize notices

### Events & Activities (`/admin/events`)
- Manage events with cover images
- Categories: Cultural, Sports, Academic, NCC-NSS, Other
- Toggle visibility

### Photo Gallery (`/admin/gallery`)
- Upload images with categories
- Add captions
- Delete images

### Download Center (`/admin/downloads`)
- Upload PDFs/documents
- Categories: Form, Syllabus, Prospectus, Admit Card, Result, Timetable
- Toggle visibility

### Faculty & Staff (`/admin/faculty`)
- Add/edit faculty members
- Upload photos
- Set display order (drag to reorder)
- Contact information

### Messages Inbox (`/admin/messages`)
- View contact form submissions
- Mark as read/unread
- Reply via email (mailto link)
- Delete messages
- Unread count badge in sidebar

### Homepage Banners (`/admin/banners`)
- Upload banner images
- Add captions and links
- Set display order
- Toggle visibility

### Fee Structure (`/admin/fee-structure`)
- Add course-wise fees
- Auto-calculate totals
- Add notes

### Scholarships (`/admin/scholarships`)
- Manage scholarship information
- Upload application forms
- Set deadlines

### Sample Papers (`/admin/sample-papers`)
- Upload papers by course/subject/year
- Organize by academic year

## File Upload

All files are stored in Supabase Storage bucket `college` with the following structure:
- `/notices/` - Notice attachments
- `/events/` - Event cover images
- `/gallery/` - Gallery photos
- `/downloads/` - Downloadable files
- `/faculty/` - Faculty photos
- `/banners/` - Homepage banners
- `/scholarships/` - Scholarship forms
- `/sample-papers/` - Sample paper PDFs

## Security

- All admin routes are protected with authentication
- RLS policies ensure only authenticated users can modify data
- Public users can only read visible content
- File uploads are validated on the client side

## Mobile Responsive

The admin portal is fully responsive with:
- Collapsible sidebar on mobile
- Touch-friendly controls
- Optimized layouts for all screen sizes

## Theme

The admin portal uses the college's maroon theme (#8B1A1A) throughout the interface.
