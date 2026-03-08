import { Check, ShoppingCart, Star } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { useCart } from '../context/CartContext';

const ProductCard = () => {
  const { currency, isIndia } = useLocale();
  const { addToCart } = useCart();

  // Dynamic pricing based on region
  const pricingData = {
    starter: {
      price: isIndia ? '3,499' : '49',
    },
    recovery: {
      price: isIndia ? '2,999' : '39',
      total: isIndia ? '8,997' : '117',
      originalTotal: isIndia ? '10,497' : '147',
      savings: isIndia ? '1,500' : '30',
    },
    longTerm: {
      price: isIndia ? '2,499' : '29',
      savings: isIndia ? '6,000' : '120',
    }
  };

  const products = {
    starter: { id: 'starter', name: "Starter Package", description: "1 Bottle (30 Day Supply)", priceIn: 3499, priceUs: 49 },
    recovery: { id: 'recovery', name: "Recovery Package", description: "3 Bottles (90 Day Supply)", priceIn: 2999, priceUs: 39 },
    longTerm: { id: 'longterm', name: "Long-Term Relief", description: "6 Bottles (180 Day Supply)", priceIn: 2499, priceUs: 29 }
  };

  return (
    <section className="section" style={{ backgroundColor: '#f8fafc' }} id="shop">
      <div className="container">
        <div className="text-center mb-12">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get the Best Tablet for Chikungunya</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Choose the ayurvedic package that's right for you. The most trusted medicine for chikungunya joint pain. All orders include free shipping and a 60-day guarantee.
          </p>
        </div>

        <div className="pricing-grid">

          {/* 1 Bottle Package */}
          <div className="card pricing-card text-center">
            <h3 className="package-title">Starter Package</h3>
            <p className="package-subtitle">1 Bottle (30 Day Supply)</p>
            <div className="price-tag">
              <span className="currency">{currency}</span>
              <span className="amount">{pricingData.starter.price}</span>
              <span className="period">/bottle</span>
            </div>
            <ul className="benefits-list text-left">
              <li><Check size={18} color="var(--color-primary)" /> Basic joint support</li>
              <li><Check size={18} color="var(--color-primary)" /> Standard shipping</li>
              <li className="disabled"><Check size={18} color="#cbd5e1" /> Free bonus materials</li>
            </ul>
            <button
              onClick={() => addToCart(products.starter)}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>

          {/* 3 Bottle Package (Popular) */}
          <div className="card pricing-card popular text-center">
            <div className="popular-badge">Most Popular • Save {currency}{pricingData.recovery.savings}</div>
            <h3 className="package-title">Recovery Package</h3>
            <p className="package-subtitle">3 Bottles (90 Day Supply)</p>
            <div className="price-tag">
              <span className="currency">{currency}</span>
              <span className="amount">{pricingData.recovery.price}</span>
              <span className="period">/bottle</span>
            </div>
            <p style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>Total: {currency}{pricingData.recovery.originalTotal}</p>
            <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Total: {currency}{pricingData.recovery.total}</p>

            <ul className="benefits-list text-left">
              <li><Check size={18} color="var(--color-primary)" /> Deep inflammation relief</li>
              <li><Check size={18} color="var(--color-primary)" /> Free express shipping</li>
              <li><Check size={18} color="var(--color-primary)" /> 2 Free Health eBooks</li>
            </ul>
            <button
              onClick={() => addToCart(products.recovery)}
              className="btn btn-accent w-full flex items-center justify-center gap-2" style={{ padding: '1rem', fontSize: '1.1rem' }}
            >
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </div>

          {/* 6 Bottle Package */}
          <div className="card pricing-card text-center">
            <div className="save-badge">Save {currency}{pricingData.longTerm.savings}</div>
            <h3 className="package-title">Long-Term Relief</h3>
            <p className="package-subtitle">6 Bottles (180 Day Supply)</p>
            <div className="price-tag">
              <span className="currency">{currency}</span>
              <span className="amount">{pricingData.longTerm.price}</span>
              <span className="period">/bottle</span>
            </div>
            <ul className="benefits-list text-left">
              <li><Check size={18} color="var(--color-primary)" /> Complete cartilage repair</li>
              <li><Check size={18} color="var(--color-primary)" /> Free express shipping</li>
              <li><Check size={18} color="var(--color-primary)" /> 2 Free Health eBooks</li>
            </ul>
            <button
              onClick={() => addToCart(products.longTerm)}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>

        </div>

        {/* Guarantee Banner */}
        <div className="guarantee-banner text-center mt-12">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Star fill="#f59e0b" color="#f59e0b" size={24} />
            <h4 style={{ fontSize: '1.25rem', margin: 0 }}>60-Day Ironclad Guarantee</h4>
            <Star fill="#f59e0b" color="#f59e0b" size={24} />
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            If you don't experience a noticeable reduction in joint stiffness and pain within 60 days, we'll refund every penny. No questions asked.
          </p>
        </div>
      </div>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-card {
          position: relative;
          padding: 3rem 2rem;
          transition: transform var(--transition-normal);
        }

        .pricing-card.popular {
          border: 2px solid var(--color-primary);
          transform: scale(1.05);
          box-shadow: var(--shadow-lg);
          z-index: 10;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--color-primary);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: bold;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .save-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: #fef3c7;
          color: #d97706;
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
          font-weight: bold;
          font-size: 0.75rem;
        }

        .package-title {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .package-subtitle {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .price-tag {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .price-tag .currency {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 0.5rem;
        }

        .price-tag .amount {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          color: var(--color-text-main);
        }

        .price-tag .period {
          color: var(--color-text-muted);
          margin-top: 2.5rem;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
        }

        .benefits-list li.disabled {
          text-decoration: line-through;
          color: #94a3b8;
        }

        .w-full {
          width: 100%;
        }

        .guarantee-banner {
          background-color: white;
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          padding: 2rem;
          max-width: 800px;
          margin: 3rem auto 0;
          box-shadow: var(--shadow-sm);
        }

        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          .pricing-card.popular {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductCard;
