import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

const Footer = () => {
  const { locale, isGlobal } = useLocale();
  const prefix = isGlobal ? '' : `/${locale}`;

  return (
    <footer className="footer-wrapper section">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link to={`${prefix}/`} className="logo flex items-center gap-2" style={{ marginBottom: '1rem' }}>
              <Activity size={28} color="var(--color-primary)" />
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'white' }}>
                Chikungunya<span style={{ color: 'var(--color-primary)' }}>Relief</span>
              </span>
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '300px' }}>
              Specialized supplements to combat post-viral joint pain and help you reclaim your mobility after Chikungunya.
            </p>
          </div>

          <div className="footer-links">
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to={`${prefix}/`}>Home</Link>
              <Link to={`${prefix}/product`}>Our Supplement</Link>
              <Link to={`${prefix}/education`}>Chikungunya Info</Link>
              <Link to="#">FAQ</Link>
            </div>
          </div>

          <div className="footer-contact">
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <Mail size={16} color="var(--color-primary)" /> support@chikungunyarelief.com
              </div>
              <div className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <Phone size={16} color="var(--color-primary)" /> 1-800-RELIEF
              </div>
              <div className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--color-primary)" /> 123 Wellness Ave, Suite 100
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chikungunya Relief. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background-color: #0f172a; /* Very dark blue/slate */
          color: white;
          padding-top: 4rem;
          padding-bottom: 2rem;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-links a, .footer-bottom a {
          color: #94a3b8;
          text-decoration: none;
          transition: color var(--transition-fast);
          font-size: 0.95rem;
        }

        .footer-links a:hover, .footer-bottom a:hover {
          color: var(--color-primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid #1e293b;
          color: #64748b;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
