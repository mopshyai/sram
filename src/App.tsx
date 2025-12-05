import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Downloads from "./pages/Downloads";
import ChairmanMessage from "./pages/ChairmanMessage";
import MissionVision from "./pages/MissionVision";
import AntiRagging from "./pages/AntiRagging";
import CodeOfConduct from "./pages/CodeOfConduct";
import MandatoryDisclosure from "./pages/MandatoryDisclosure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/chairman-message" element={<ChairmanMessage />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/anti-ragging" element={<AntiRagging />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
