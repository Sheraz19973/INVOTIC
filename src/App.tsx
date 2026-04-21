import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Training from './components/Training';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdmissionForm from './components/AdmissionForm';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Training />
      <WhyUs />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admission" element={<AdmissionForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
