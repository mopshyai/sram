import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
