import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section text-center">
      <div className="container flex flex-col items-center">

        {/* Trust Badge / Eyebrow */}
        <div className="hero-badge flex items-center gap-2 mb-4">
          <ShieldCheck size={16} color="var(--color-primary)" />
          <span>100% Natural • Fast Relief • Clinically Studied Ingredients</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          The Best Ayurvedic Medicine for <br />
          <span style={{ color: 'var(--color-primary)' }}>Chikungunya Joint Pain</span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subtitle">
          Struggling with lingering body pain after chikungunya? Our 100% natural chikungunya treatment medicine targets viral-induced inflammation so you can reclaim your active life.
        </p>

        {/* Call to Actions */}
        <div className="flex gap-4" style={{ marginTop: '2rem' }}>
          <Link to="/product" className="btn btn-primary btn-lg flex items-center gap-2">
            Get Relief Today <ArrowRight size={20} />
          </Link>
          <Link to="/education" className="btn btn-outline btn-lg flex items-center gap-2">
            <Activity size={20} /> Learn How It Works
          </Link>
        </div>

        {/* Social Proof / Numbers under CTA */}
        <div className="hero-stats flex gap-8">
          <div className="stat-item text-center">
            <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', margin: 0 }}>10k+</h3>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Patients Relieved</span>
          </div>
          <div className="stat-item text-center">
            <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', margin: 0 }}>4.8/5</h3>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Average Rating</span>
          </div>
          <div className="stat-item text-center">
            <div className="flex justify-center" style={{ color: '#f59e0b', fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '0.2rem' }}>★★★★★</div>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Verified Reviews</span>
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-badge {
          background-color: #ecfdf5;
          color: var(--color-primary-dark);
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.85rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid #d1fae5;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          margin-bottom: 1.5rem;
          max-width: 800px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          max-width: 600px;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }

        .btn-outline {
          background-color: transparent;
          color: var(--color-text-main);
          border: 2px solid var(--color-border);
        }

        .btn-outline:hover {
          border-color: var(--color-text-main);
          background-color: var(--color-surface);
        }

        .hero-stats {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--color-border);
          width: 100%;
          max-width: 600px;
          justify-content: space-around;
        }

        @media (max-width: 640px) {
          .hero-section { padding: 4rem 0; }
          .hero-stats { flex-direction: column; gap: 2rem; align-items: center; }
          .flex.gap-4 { flex-direction: column; width: 100%; padding: 0 1rem; }
          .btn-lg { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
