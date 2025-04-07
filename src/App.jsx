import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Products from './pages/Products'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'
import TMA from './pages/services/TMA'
import TrafficManagement from './pages/services/TrafficManagement'
import RoadMarking from './pages/services/RoadMarking'
import SafetyAudit from './pages/services/SafetyAudit'
import TDPDesign from './pages/services/TDPDesign'
import TrafficSignage from './pages/services/TrafficSignage'
import Barriers from './pages/services/Barriers'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/services/tma" element={<TMA />} />
            <Route path="/services/traffic-management" element={<TrafficManagement />} />
            <Route path="/services/road-marking" element={<RoadMarking />} />
            <Route path="/services/tdp-design" element={<TDPDesign />} />
            <Route path="/services/traffic-signage" element={<TrafficSignage />} />
            <Route path="/services/safety-audit" element={<SafetyAudit />} />
            <Route path="/services/barriers" element={<Barriers />} />



            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App