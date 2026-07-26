import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AchievementsPage from './pages/AchievementsPage'
import CertificatesPage from './pages/CertificatesPage'
import CodingPage from './pages/CodingPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ui/ScrollToTop'
import NotFoundPage from './pages/NotFoundPage'
import BackToTop from './components/ui/BackToTop'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#020818] text-[#f0f6ff] noise-bg">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/coding" element={<CodingPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
