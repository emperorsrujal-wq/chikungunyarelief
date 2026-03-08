import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Education from './pages/Education';
import NotFound from './pages/NotFound';

import { LocaleProvider } from './context/LocaleContext';
import { CartProvider } from './context/CartContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Extracted routes to reuse across different locales
const GlobalRoutes = () => (
  <>
    <Route index element={<Home />} />
    <Route path="product" element={<Product />} />
    <Route path="education" element={<Education />} />
  </>
);

// Inner wrapping component so Providers can access Router context
const AppContent = () => {
  return (
    <LocaleProvider>
      <CartProvider>
        <ScrollToTop />
        <div className="app-container flex flex-col min-h-screen relative overflow-x-hidden">
          <Navbar />

          <CartDrawer />

          <main className="flex-grow">
            <Routes>
              {/* Global Routes */}
              <Route path="/">
                <GlobalRoutes />
              </Route>

              {/* Indian Routes */}
              <Route path="/in">
                <GlobalRoutes />
              </Route>

              {/* US Routes */}
              <Route path="/us">
                <GlobalRoutes />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>

        <style>{`
          .min-h-screen { min-height: 100vh; }
          .flex-grow { flex-grow: 1; }
          .overflow-x-hidden { overflow-x: hidden; }
        `}</style>
      </CartProvider>
    </LocaleProvider>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
