import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const DOMAIN = "https://chikungunyarelief.com";

const SEO = ({ title, description, schema }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Determine the base path without the locale prefix for alternating urls
    let basePath = currentPath;
    if (currentPath.startsWith('/in/') || currentPath === '/in') {
        basePath = currentPath.replace('/in', '') || '/';
    } else if (currentPath.startsWith('/us/') || currentPath === '/us') {
        basePath = currentPath.replace('/us', '') || '/';
    }

    if (!basePath.startsWith('/')) basePath = '/' + basePath;
    if (basePath.length > 1 && basePath.endsWith('/')) {
        basePath = basePath.slice(0, -1);
    }

    const canonicalUrl = `${DOMAIN}${currentPath === '/' ? '' : currentPath}`;

    // Ensure properly formatted URLs for hreflang links
    const urlIn = `${DOMAIN}/in${basePath === '/' ? '' : basePath}`;
    const urlUs = `${DOMAIN}/us${basePath === '/' ? '' : basePath}`;
    const urlGlobal = `${DOMAIN}${basePath === '/' ? '' : basePath}`;

    // Default clickbait hooks injected into every title if not explicitly provided
    const baseTitle = title || "Chikungunya Joint Pain Relief | 100% Natural Fast Recovery";
    // Ensure titles aren't too long, but always try to append a strong hook
    const finalTitle = baseTitle.includes("Fast Recovery") ? baseTitle : `${baseTitle} | Fast Recovery`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{finalTitle}</title>
            <meta name="description" content={description} />

            {/* Canonical URL for Technical SEO */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Hreflang Tags for International SEO Routing */}
            <link rel="alternate" hreflang="en-IN" href={urlIn} />
            <link rel="alternate" hreflang="en-US" href={urlUs} />
            <link rel="alternate" hreflang="x-default" href={urlGlobal} />

            {/* Open Graph Meta Tags for Social Sharing */}
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={description} />

            {/* Dynamic JSON-LD Schema defined per page */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
