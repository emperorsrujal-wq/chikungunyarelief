import { Link, useLocation } from 'react-router-dom';
import { Activity, ShoppingCart, Info, Home } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

const Navbar = () => {
  const location = useLocation();
  const { locale, isGlobal } = useLocale();

  // Create the prefix (e.g., '/in' or '') to keep users in their current locale
  const prefix = isGlobal ? '' : `/${locale}`;

  const isActive = (path) => {
    // Handle root path specifically to avoid matching everything
    const fullPath = path === '/' ? (prefix || '/') : `${prefix}${path}`;
    return location.pathname === fullPath ? 'active-link' : '';
  };

  return (
    <header className="navbar-wrapper">
      <div className="container flex justify-between items-center" style={{ height: '80px' }}>
        <Link to={`${prefix}/`} className="logo flex items-center gap-2">
          <Activity size={32} color="var(--color-primary)" />
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-text-main)' }}>
            Chikungunya<span style={{ color: 'var(--color-primary)' }}>Relief</span>
          </span>
        </Link>

        <nav className="desktop-nav flex items-center gap-8">
          <Link to={`${prefix}/`} className={`nav-link flex items-center gap-2 ${isActive('/')}`}>
            <Home size={18} /> Home
          </Link>
          <Link to={`${prefix}/education`} className={`nav-link flex items-center gap-2 ${isActive('/education')}`}>
            <Info size={18} /> Education Hub
          </Link>
          <Link to={`${prefix}/product`} className="btn btn-primary flex items-center gap-2">
            <ShoppingCart size={18} /> Shop Now
          </Link>
        </nav>
      </div>

      <style>{`
        .navbar-wrapper {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: var(--shadow-sm);
        }
        
        .nav-link {
          color: var(--color-text-muted);
          font-weight: 500;
          transition: color var(--transition-fast);
        }
        
        .nav-link:hover, .active-link {
          color: var(--color-primary);
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
