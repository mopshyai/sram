

## Plan: Update All Year References from 2025-26 to 2026-27

### Scope
Update all academic year references across the entire website. This involves changing:
- **"2025-26" → "2026-27"** (admission session references)
- **"2024-25" → "2025-26"** (syllabus, prospectus, exam schedules)
- **"2025" → "2026"** in event dates and admission deadlines
- **"2024" → "2025"** in academic calendar months and event dates
- **"© 2025" → "© 2026"** in footer

### Files to Modify (11 files)

1. **`src/pages/Index.tsx`** — "Admissions 2025-26" → "Admissions 2026-27", ticker text, event dates bumped by 1 year

2. **`src/pages/Admissions.tsx`** — Hero title "2025-26" → "2026-27", important dates (Dec 2024→Dec 2025, July 2025→July 2026, Aug 2025→Aug 2026)

3. **`src/pages/AcademicCalendar.tsx`** — Title "2024-25" → "2025-26", all month headers and dates bumped by 1 year (July 2024→July 2025, etc.)

4. **`src/pages/Events.tsx`** — All event dates bumped by 1 year (Jan 2025→Jan 2026, Dec 2024→Dec 2025, etc.)

5. **`src/pages/Timetable.tsx`** — Exam schedule dates bumped by 1 year (March 2025→March 2026, etc.)

6. **`src/pages/Downloads.tsx`** — Syllabus names "2024-25" → "2025-26", exam schedule "2024-25" → "2025-26"

7. **`src/pages/Prospectus.tsx`** — "Prospectus 2024-25" → "Prospectus 2025-26"

8. **`src/pages/Results.tsx`** — Any year references bumped by 1 year

9. **`src/pages/Scholarships.tsx`** — Any year references bumped by 1 year

10. **`src/components/layout/Footer.tsx`** — "© 2025" → "© 2026"

11. **`src/components/NoticeBoard.tsx`** — Any year references in announcements bumped by 1 year

### Approach
Systematic find-and-replace across all files, replacing every instance of year references while preserving formatting and context. No structural changes—purely text updates.

