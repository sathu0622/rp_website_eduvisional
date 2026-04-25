import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Domain from "./pages/Domain";
import Milestones from "./pages/Milestones";
import Documents from "./pages/Documents";
import Presentations from "./pages/Presentations";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f8fe", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .hidden { display: none !important; }
        @media (min-width: 768px) {
          .hidden.md\\:flex { display: flex !important; }
          .hidden.md\\:block { display: block !important; }
        }
        @media (max-width: 767px) {
          .md\\:hidden { display: none !important; }
          .project-overview { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus { border-color: #1e6fba !important; box-shadow: 0 0 0 3px rgba(30,111,186,0.12); }
        a:hover { opacity: 0.85; }
        button:hover { opacity: 0.9; }
      `}</style>
      <Navbar />
      <div style={{ paddingTop: 68 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
