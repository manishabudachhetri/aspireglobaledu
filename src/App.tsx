
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/home/Header';
// Home components
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import Destination from './components/home/Destination';
import OurClasses from './components/home/Classes';
import WorkingProcess from './components/home/WorkingProcess';
import TestimonialsSection from './components/home/TestimonialsSection';
import CTASection from './components/home/CTASection';
import Blog from './components/home/Blog';
import PartnersSection from './components/home/PartnersSection';
import FooterSection from './components/home/FooterSection';

// Pages
import About from './pages/Aboutus';
import Services from './pages/Services';
import PreparationClass from './pages/PreparationClass';
import Contact from './pages/Contact';
import VisaGranted from './pages/VisaGranted';
import Gallery from './pages/Gallery';
import Blogg from './pages/Blogg';
import AbroadStudy from './pages/AbroadStudy';

// Service pages
import CareerCounseling from './pages/services/CareerCounseling';
import VisaAssistance from './pages/services/VisaAssistance';
import TestPreparation from './pages/services/TestPreparation';
import StudyAbroad from './pages/services/StudyAbroad';
import AdmissionGuide from './pages/services/AdmissionGuide';
import Insurance from './pages/services/Insurance';

// Test Preparation pages
import GRE from './pages/preparation/GRE';
import GMAT from './pages/preparation/GMAT';
import SAT from './pages/preparation/SAT';
import TOEFL from './pages/preparation/TOEFL';
import PTE from './pages/preparation/PTE';
import IELTS from './pages/preparation/IELTS';

// Country specific pages
import Malta from './pages/AbroadStudy/Malta';
import UAE from './pages/AbroadStudy/UAE';
import UK from './pages/AbroadStudy/UK';
import Australia from './pages/AbroadStudy/Australia';

// Blog pages
import Careeropp from './pages/Blogg/careeropp';
import FreeCourses from './pages/Blogg/FreeCourses';
import GuidetoAus from './pages/Blogg/GuidetoAus';
import Ieltsprep from './pages/Blogg/Ieltsprep';
import Scholaropp from './pages/Blogg/Scholaropp';
import StudentLife from './pages/Blogg/StudentLife';
import TopUni from './pages/Blogg/TopUni';
import SOP from './pages/Blogg/SOP';
import Studentvisa from './pages/Blogg/studentvisa';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
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
                <FooterSection />
              </main>
            } />
            
            {/* Main Routes */}
            <Route path="/abroad-study" element={<AbroadStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/preparation class" element={<PreparationClass />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/visagranted" element={<VisaGranted />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blogg />} />

            {/* Service Routes */}
            <Route path="/services/career-counseling" element={<CareerCounseling />} />
            <Route path="/services/visa-assistance" element={<VisaAssistance />} />
            <Route path="/services/test-preparation" element={<TestPreparation />} />
            <Route path="/services/study-abroad" element={<StudyAbroad />} />
            <Route path="/services/admission-guide" element={<AdmissionGuide />} />
            <Route path="/services/insurance" element={<Insurance />} />

            {/* Test Preparation Routes */}
            <Route path="/preparation/gre" element={<GRE />} />
            <Route path="/preparation/gmat" element={<GMAT />} />
            <Route path="/preparation/sat" element={<SAT />} />
            <Route path="/preparation/toefl" element={<TOEFL />} />
            <Route path="/preparation/pte" element={<PTE />} />
            <Route path="/preparation/ielts" element={<IELTS />} />

            {/* Study Abroad Routes */}
            <Route path="/abroad-study/malta" element={<Malta />} />
            <Route path="/abroad-study/uae" element={<UAE />} />
            <Route path="/abroad-study/uk" element={<UK />} />
            <Route path="/abroad-study/australia" element={<Australia />} />

            {/* Blog Routes */}
            <Route path="/blog/career-opportunities" element={<Careeropp />} />
            <Route path="/blog/free-courses" element={<FreeCourses />} />
            <Route path="/blog/guide-to-australia" element={<GuidetoAus />} />
            <Route path="/blog/ielts-preparation" element={<Ieltsprep />} />
            <Route path="/blog/scholarship-canada" element={<Scholaropp />} />
            <Route path="/blog/student-life-uk" element={<StudentLife />} />
            <Route path="/blog/top-universities-usa" element={<TopUni />} />
            <Route path="/blog/how-to-write-sop" element={<SOP />} />
            <Route path="/blog/student-visa-guide" element={<Studentvisa />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;





