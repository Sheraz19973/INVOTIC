import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Training from './components/Training';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Route-level code splitting: each page loads its JS only when visited.
// This keeps the initial bundle small (better LCP / TBT / Speed Index).
const AdmissionForm = lazy(() => import('./components/AdmissionForm'));
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Tools = lazy(() => import('./components/Tools'));
const ToolPage = lazy(() => import('./components/ToolPage'));
const InfoPage = lazy(() => import('./components/InfoPage'));

function PageLoader() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen flex items-center justify-center">
      <div className="text-gray-500 text-sm tracking-widest uppercase">Loading…</div>
    </div>
  );
}

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
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
