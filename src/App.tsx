
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DoctorsPage from "./pages/DoctorsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import ContactPage from "./pages/ContactPage";
import DoctorDetailsPage from "./pages/DoctorDetailsPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import MedicalRecordsPage from "./pages/MedicalRecordsPage";
import VideoConsultationPage from "./pages/VideoConsultationPage";
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
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/doctor-details" element={<DoctorDetailsPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/medical-records" element={<MedicalRecordsPage />} />
          <Route path="/video-consultation" element={<VideoConsultationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
