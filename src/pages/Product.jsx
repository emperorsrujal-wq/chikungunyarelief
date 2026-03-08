import TrustBadges from '../components/TrustBadges';
import ProductCard from '../components/ProductCard';
import { Star, ShieldCheck, CheckCircle } from 'lucide-react';

const Product = () => {
    return (
        <div className="product-page">
            <section className="section bg-white" style={{ paddingBottom: '2rem' }}>
                <div className="container flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#ecfdf5', color: '#047857' }}>
                        <ShieldCheck size={16} /> 100% Secure Checkout
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1rem', maxWidth: '800px' }}>
                        The Scientifically Proven Formula for <span style={{ color: 'var(--color-primary)' }}>Chikungunya Joint Relief</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', marginBottom: '2rem' }}>
                        Don't let post-viral arthritis control your life. Rebuild cartilage and soothe inflammation naturally.
                    </p>
                    <div className="flex gap-4 mb-8" style={{ color: '#f59e0b' }}>
                        <Star fill="#f59e0b" /> <Star fill="#f59e0b" /> <Star fill="#f59e0b" /> <Star fill="#f59e0b" /> <Star fill="#f59e0b" />
                        <span style={{ color: 'var(--color-text-main)', fontWeight: 'bold' }}>4.9/5 from 1,200+ Reviews</span>
                    </div>
                </div>
            </section>

            <TrustBadges />

            {/* Ingredient Highlight */}
            <section className="section" style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: '2.5rem' }}>What's Inside?</h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>Only clinically backed natural ingredients.</p>
                    </div>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="card">
                            <h3 className="flex items-center gap-2 mb-2"><CheckCircle color="var(--color-primary)" /> Curcumin Phytosome</h3>
                            <p>Highly bioavailable anti-inflammatory extract that targets viral-induced swelling in the joints better than standard turmeric.</p>
                        </div>
                        <div className="card">
                            <h3 className="flex items-center gap-2 mb-2"><CheckCircle color="var(--color-primary)" /> Boswellia Serrata</h3>
                            <p>A powerful resin proven to inhibit the specific enzymes (5-LOX) that cause pain in post-viral arthritis.</p>
                        </div>
                        <div className="card">
                            <h3 className="flex items-center gap-2 mb-2"><CheckCircle color="var(--color-primary)" /> Type II Collagen</h3>
                            <p>Provides the direct building blocks necessary to repair the synovial fluid and cartilage attacked by the immune system.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ProductCard />
        </div>
    );
};

export default Product;
