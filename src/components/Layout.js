import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRevealOnScroll } from './useRevealOnScroll';

function Layout() {
  const location = useLocation();

  // Re-run scroll reveal on every route change
  useRevealOnScroll();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="layout">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;