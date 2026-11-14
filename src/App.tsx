import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsShowcase from './components/ProductsShowcase';
import { usePageSeo } from './hooks/usePageSeo';
import { pageSeo } from './data/pageSeo';

// Route-level code splitting: each page loads its JS only when visited.
// This keeps the initial bundle small (better LCP / TBT / Speed Index).
const Blog = lazy(() => import('./components/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Tools = lazy(() => import('./components/Tools'));
const ToolPage = lazy(() => import('./components/ToolPage'));
const InfoPage = lazy(() => import('./components/InfoPage'));
const NotFound = lazy(() => import('./components/NotFound'));
const Products = lazy(() => import('./components/Products'));
const ProductPage = lazy(() => import('./components/ProductPage'));

function PageLoader() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen flex items-center justify-center">
      <div className="text-gray-500 text-sm tracking-widest uppercase">Loading…</div>
    </div>
  );
}

function HomePage() {
  usePageSeo(pageSeo.home.title, pageSeo.home.description, '/');
  return (
    <>
      <Hero />
      <Services />
      <ProductsShowcase />
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

/** Tells the motion layer (public/invotic-motion.js) that React has taken over the prerendered HTML. */
function HydratedSignal() {
  useEffect(() => {
    (window as unknown as { __invoticHydrated?: boolean }).__invoticHydrated = true;
    window.dispatchEvent(new Event('invotic:hydrated'));
  }, []);
  return null;
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

/** The whole site without a router: the browser wraps it in BrowserRouter, the build-time
 *  prerender (src/entry-server.tsx) in StaticRouter, so the HTML Google sees is the real page. */
export function AppShell() {
  return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/:slug" element={<ToolPage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductPage />} />
              {/* Trust pages: /about, /contact, /privacy, /terms — unknown slugs show the 404 page */}
              <Route path="/:slug" element={<InfoPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* inside Suspense: fires only after the page content itself has hydrated */}
            <HydratedSignal />
          </Suspense>
        </main>
        <Footer />
      </div>
  );
}
