import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admissions from "./pages/Admissions";
import Departments from "./pages/Departments";
import Facilities from "./pages/Facilities";
import NccNss from "./pages/NccNss";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import ChairmanMessage from "./pages/ChairmanMessage";
import MissionVision from "./pages/MissionVision";
import AntiRagging from "./pages/AntiRagging";
import CodeOfConduct from "./pages/CodeOfConduct";
import MandatoryDisclosure from "./pages/MandatoryDisclosure";
import Events from "./pages/Events";
import Results from "./pages/Results";
import Timetable from "./pages/Timetable";
import Scholarships from "./pages/Scholarships";
import Alumni from "./pages/Alumni";
import Placements from "./pages/Placements";
import Attendance from "./pages/Attendance";
import AcademicCalendar from "./pages/AcademicCalendar";
import Library from "./pages/Library";
import Research from "./pages/Research";
import FeeStructure from "./pages/FeeStructure";
import Prospectus from "./pages/Prospectus";
import Faculty from "./pages/Faculty";
import FacultyProfile from "./pages/FacultyProfile";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNotices from "./pages/admin/AdminNotices";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminGallery from "./pages/admin/AdminGallery";
import AdminDownloads from "./pages/admin/AdminDownloads";
import AdminFaculty from "./pages/admin/AdminFaculty";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminBanners from "./pages/admin/AdminBanners";
import AdminFeeStructure from "./pages/admin/AdminFeeStructure";
import AdminScholarships from "./pages/admin/AdminScholarships";
import AdminSamplePapers from "./pages/admin/AdminSamplePapers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/ncc-nss" element={<NccNss />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/chairman-message" element={<ChairmanMessage />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/anti-ragging" element={<AntiRagging />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
              <Route path="/events" element={<Events />} />
              <Route path="/results" element={<Results />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/academic-calendar" element={<AcademicCalendar />} />
              <Route path="/library" element={<Library />} />
              <Route path="/research" element={<Research />} />
              <Route path="/fee-structure" element={<FeeStructure />} />
              <Route path="/prospectus" element={<Prospectus />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/faculty/:id" element={<FacultyProfile />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              <Route path="/admin/notices" element={<ProtectedRoute><AdminNotices /></ProtectedRoute>} />
              <Route path="/admin/events" element={<ProtectedRoute><AdminEvents /></ProtectedRoute>} />
              <Route path="/admin/gallery" element={<ProtectedRoute><AdminGallery /></ProtectedRoute>} />
              <Route path="/admin/downloads" element={<ProtectedRoute><AdminDownloads /></ProtectedRoute>} />
              <Route path="/admin/faculty" element={<ProtectedRoute><AdminFaculty /></ProtectedRoute>} />
              <Route path="/admin/messages" element={<ProtectedRoute><AdminMessages /></ProtectedRoute>} />
              <Route path="/admin/banners" element={<ProtectedRoute><AdminBanners /></ProtectedRoute>} />
              <Route path="/admin/fee-structure" element={<ProtectedRoute><AdminFeeStructure /></ProtectedRoute>} />
              <Route path="/admin/scholarships" element={<ProtectedRoute><AdminScholarships /></ProtectedRoute>} />
              <Route path="/admin/sample-papers" element={<ProtectedRoute><AdminSamplePapers /></ProtectedRoute>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
