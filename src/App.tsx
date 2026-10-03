import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Training from './components/Training';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdmissionForm from './components/AdmissionForm';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Tools from './components/Tools';
import ToolPage from './components/ToolPage';
import InfoPage from './components/InfoPage';

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // BlogPost handles its own scroll on slug change; skip double-scroll there.
    if (!pathname.startsWith('/blog/')) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admission" element={<AdmissionForm />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/:slug" element={<ToolPage />} />
            {/* Trust pages: /about, /contact, /privacy, /terms — unknown slugs redirect home */}
            <Route path="/:slug" element={<InfoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
