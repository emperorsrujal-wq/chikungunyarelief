import { Link } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="section min-h-[60vh] flex items-center justify-center bg-gray-50 text-center">
            <Helmet>
                <title>Page Not Found | Chikungunya Relief</title>
                {/* Critical for technical SEO: Tells Google NOT to index broken pages */}
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div className="container">
                <h1 style={{ fontSize: '6rem', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: 800 }}>404</h1>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <a href="/" className="btn btn-primary inline-flex items-center gap-2">
                    <Home size={20} /> Return to Homepage
                </a>
            </div>
        </div>
    );
};

export default NotFound;
