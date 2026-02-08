

## Plan: Create Dedicated Faculty Page with Full Listings and Search

### Overview
Create a new `/faculty` page with comprehensive faculty listings, featuring search functionality, department filters, and detailed profile cards. The page will follow the existing design patterns used in `Departments.tsx` and `About.tsx`.

### Files to Create/Modify

---

### 1. Create `src/pages/Faculty.tsx` (New File)

A dedicated page with the following features:

**Header Section:**
- Hero banner with maroon gradient (matching other pages)
- Page title "Our Faculty" with descriptive subtitle
- Statistics bar showing total faculty count, departments, and experience

**Search & Filter Section:**
- Search input with icon for filtering by name, designation, or qualification
- Department filter pills (All, Education, Law, Pharmacy, Arts & Science, Commerce)
- Results count indicator

**Faculty Grid:**
- Responsive grid layout (1 col mobile, 2 col tablet, 3-4 col desktop)
- Enhanced faculty cards with:
  - Profile image with hover zoom effect
  - Name, designation, department badge
  - Qualification and experience
  - Email and phone contact
  - Specialization/subjects taught (new field)
  - "View Profile" button for future expansion

**Empty State:**
- Friendly message when no results match search/filter

**Call-to-Action Section:**
- Link to Departments page
- Link to Contact for inquiries

---

### 2. Expand Faculty Data

Create a more comprehensive faculty dataset with additional fields:

```typescript
interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  subjects: string[];
  image: string;
  email: string;
  phone?: string;
}
```

Add more faculty members (12-16 total) across all departments for a realistic listing.

---

### 3. Modify `src/App.tsx`

Add route for the new Faculty page:
- Import Faculty component
- Add `<Route path="/faculty" element={<Faculty />} />`

---

### 4. Modify `src/components/layout/Header.tsx`

Add Faculty link to navigation:
- Add "Faculty" under the "About" dropdown menu
- Path: `/faculty`

---

### 5. Update `src/components/FacultyDirectory.tsx` (Homepage Component)

Update the "View All" button to link to `/faculty` instead of `/departments`.

---

### Page Layout Structure

```text
+----------------------------------------------------------+
|                    HERO SECTION                           |
|  "Our Faculty" - Meet our dedicated faculty members       |
+----------------------------------------------------------+
|  [50+ Faculty]  [6 Departments]  [500+ Years Combined]    |
+----------------------------------------------------------+
|                                                           |
|  [Search icon] Search faculty by name...                  |
|                                                           |
|  [All] [Education] [Law] [Pharmacy] [Arts] [Commerce]     |
|                                                           |
|  Showing X of Y faculty members                           |
+----------------------------------------------------------+
|                                                           |
|  +--------+  +--------+  +--------+  +--------+          |
|  | Photo  |  | Photo  |  | Photo  |  | Photo  |          |
|  | Name   |  | Name   |  | Name   |  | Name   |          |
|  | Dept   |  | Dept   |  | Dept   |  | Dept   |          |
|  | Quals  |  | Quals  |  | Quals  |  | Quals  |          |
|  | Email  |  | Email  |  | Email  |  | Email  |          |
|  +--------+  +--------+  +--------+  +--------+          |
|                                                           |
+----------------------------------------------------------+
|              CTA: Contact Department Heads                |
+----------------------------------------------------------+
```

---

### Technical Details

**Search Implementation:**
- Client-side filtering using `useState`
- Debounced search input (optional, simple filter for now)
- Case-insensitive matching on name, designation, qualification, and specialization

**Filter Logic:**
```typescript
const filteredFaculty = facultyData.filter(f => {
  const matchesDepartment = activeFilter === "all" || f.department === activeFilter;
  const matchesSearch = searchQuery === "" || 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.specialization.toLowerCase().includes(searchQuery.toLowerCase());
  return matchesDepartment && matchesSearch;
});
```

**Styling:**
- Uses existing Tailwind classes and shadcn/ui components
- Follows academic color palette (maroon, navy, gold)
- Mobile-first responsive design
- Animations: `animate-fade-in` with staggered delays

**Components Used:**
- Layout, Card, Button, Input (from shadcn/ui)
- Lucide icons: Search, GraduationCap, Mail, Phone, Users, etc.

