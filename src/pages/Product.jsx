import TrustBadges from '../components/TrustBadges';
import ProductCard from '../components/ProductCard';
import { Star, ShieldCheck, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Product = () => {
    return (
        <div className="product-page">
            <Helmet>
                <title>Buy Chikungunya Relief Supplement | Stop Post-Viral Arthritis</title>
                <meta name="description" content="Get fast relief from chronic Chikungunya joint pain. Our 100% natural formula rebuilds cartilage and stops inflammation. Secure checkout & 60-day guarantee." />
            </Helmet>
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
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 className="flex items-center gap-2 mb-2" style={{ fontSize: '1.1rem' }}><CheckCircle color="var(--color-primary)" size={20} /> Harde (Haritaki)</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>A powerful Ayurvedic herb known for detoxifying the body and reducing joint inflammation.</p>
                        </div>
                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 className="flex items-center gap-2 mb-2" style={{ fontSize: '1.1rem' }}><CheckCircle color="var(--color-primary)" size={20} /> Asafoetida</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Contains anti-inflammatory properties that help relieve chronic pain and stiffness.</p>
                        </div>
                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 className="flex items-center gap-2 mb-2" style={{ fontSize: '1.1rem' }}><CheckCircle color="var(--color-primary)" size={20} /> Fenugreek</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Rich in antioxidants, helping to soothe swollen joints and improve mobility.</p>
                        </div>
                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 className="flex items-center gap-2 mb-2" style={{ fontSize: '1.1rem' }}><CheckCircle color="var(--color-primary)" size={20} /> Neem</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Natural blood purifier that cools the body and fights viral remnants in the joints.</p>
                        </div>
                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 className="flex items-center gap-2 mb-2" style={{ fontSize: '1.1rem' }}><CheckCircle color="var(--color-primary)" size={20} /> Ajwain</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Provides significant relief from arthritic pain and muscle spasms.</p>
                        </div>
                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 className="flex items-center gap-2 mb-2" style={{ fontSize: '1.1rem' }}><CheckCircle color="var(--color-primary)" size={20} /> Turmeric</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Nature's strongest anti-inflammatory, directly targeting post-viral swelling.</p>
                        </div>
                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 className="flex items-center gap-2 mb-2" style={{ fontSize: '1.1rem' }}><CheckCircle color="var(--color-primary)" size={20} /> Ginger Powder</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Blocks the formation of inflammatory compounds, easing joint discomfort.</p>
                        </div>
                        <div className="card" style={{ padding: '1.5rem' }}>
                            <h3 className="flex items-center gap-2 mb-2" style={{ fontSize: '1.1rem' }}><CheckCircle color="var(--color-primary)" size={20} /> Sanchar Powder</h3>
                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Rock salt rich in trace minerals that aids in recovery and balances electrolytes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ProductCard />
        </div>
    );
};

export default Product;
