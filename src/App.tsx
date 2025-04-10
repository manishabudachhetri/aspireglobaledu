
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/home/Header';
import Services from './pages/Services';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import CTASection from './components/home/CTASection';
import PartnersSection from './components/home/PartnersSection';
import FooterSection from './components/home/FooterSection';
import AboutSection from './components/home/AboutSection';
import Destination from './components/home/Destination';
import OurClasses from './components/home/Classes';
import WorkingProcess from './components/home/WorkingProcess';
import Blog from './components/home/Blog';
import Aboutus from './pages/Aboutus';
import CareerCounseling from './pages/services/CareerCounseling';
import VisaAssistance from './pages/services/VisaAssistance';
import TestPreparation from './pages/services/TestPreparation';
import StudyAbroad from './pages/services/StudyAbroad';
import AdmissionGuide from './pages/services/AdmissionGuide';
import Insurance from './pages/services/Insurance';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <Destination />
              <OurClasses />
              <WorkingProcess />
              <TestimonialsSection />
              <CTASection />
              <Blog />
              <PartnersSection />
            </main>
          } />
          <Route 
            path="/about" 
            element={<Aboutus />} 
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/services/career-counseling"
            element={<CareerCounseling />}
          />
          <Route
            path="/services/visa-assistance"
            element={<VisaAssistance />}
          />
          <Route
            path="/services/test-preparation"
            element={<TestPreparation />}
          />
          <Route
            path="/services/study-abroad"
            element={<StudyAbroad />}
          />
          <Route
            path="/services/admission-guide"
            element={<AdmissionGuide />}
          />
          <Route
            path="/services/insurance"
            element={<Insurance />}
          />
        </Routes>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
















