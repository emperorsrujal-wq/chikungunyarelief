import { Helmet } from 'react-helmet-async';

const DOMAIN = "https://chikungunyarelief.com";

const SEO = ({ title, description, path, schema }) => {
    const canonicalUrl = `${DOMAIN}${path}`;

    // Default clickbait hooks injected into every title if not explicitly provided
    const baseTitle = title || "Chikungunya Joint Pain Relief | 100% Natural Fast Recovery";
    // Ensure titles aren't too long, but always try to append a strong hook
    const finalTitle = baseTitle.includes("Fast Recovery") ? baseTitle : `${baseTitle} | Fast Recovery`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{finalTitle}</title>
            <meta name="description" content={description} />

            {/* Canonical URL for Technical SEO (Prevents duplicate content) */}
            <link rel="canonical" href={canonicalUrl} />

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
