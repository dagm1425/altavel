import { BrowserRouter, Route, Routes } from 'react-router'
import { SiteLayout } from '@/components/site-layout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import HowWeWork from '@/pages/HowWeWork'
import About from '@/pages/About'
import Careers from '@/pages/Careers'
import Contact from '@/pages/Contact'
import Legal from '@/pages/Legal'
import NotFound from '@/pages/NotFound'

// Shared by the browser app and the build-time prerender (src/entry-server.jsx).
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Legal page="privacy" />} />
        <Route path="/terms" element={<Legal page="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
