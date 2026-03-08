import React from 'react';

const TrustBadges = () => {
    return (
        <section className="section py-8 border-y" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container">
                <p className="text-center" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>
                    Formulated according to clinical standards
                </p>

                <div className="badges-container flex justify-center items-center gap-8 flex-wrap">
                    <div className="badge-item flex flex-col items-center">
                        <div className="icon-circle">🌿</div>
                        <span className="badge-text">100% Natural</span>
                    </div>
                    <div className="badge-item flex flex-col items-center">
                        <div className="icon-circle">🔬</div>
                        <span className="badge-text">Lab Tested</span>
                    </div>
                    <div className="badge-item flex flex-col items-center">
                        <div className="icon-circle">🇺🇸</div>
                        <span className="badge-text">Made in USA</span>
                    </div>
                    <div className="badge-item flex flex-col items-center">
                        <div className="icon-circle">🚫</div>
                        <span className="badge-text">Non-GMO</span>
                    </div>
                    <div className="badge-item flex flex-col items-center">
                        <div className="icon-circle">💊</div>
                        <span className="badge-text">GMP Certified</span>
                    </div>
                </div>
            </div>

            <style>{`
        .py-8 { padding-top: 3rem; padding-bottom: 3rem; }
        
        .badge-item {
          text-align: center;
          min-width: 120px;
        }

        .icon-circle {
          width: 56px;
          height: 56px;
          background-color: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #475569;
        }

        .badge-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-main);
        }

        @media (max-width: 640px) {
          .badges-container {
            gap: 1.5rem;
          }
          .badge-item {
            min-width: 100px;
          }
        }
      `}</style>
        </section>
    );
};

export default TrustBadges;
