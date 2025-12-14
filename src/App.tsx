import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Collection from "./pages/Collection";
import PieceDetail from "./pages/PieceDetail";
import House from "./pages/House";
import Method from "./pages/Method";
import Atelier from "./pages/Atelier";
import Inquiry from "./pages/Inquiry";
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
          <Route path="/collection" element={<Collection />} />
          <Route path="/piece/:slug" element={<PieceDetail />} />
          <Route path="/house" element={<House />} />
          <Route path="/method" element={<Method />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
