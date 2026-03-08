import { AlertCircle, Leaf, Shield, Zap } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section className="section bg-white" id="how-it-works">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Doesn't The Pain Stop?</h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Chikungunya isn't just a fever. For up to 40% of patients, the virus triggers a prolonged immune response that attacks the joints months—or even years—after the initial infection.
                    </p>
                </div>

                <div className="ps-grid">
                    {/* The Problem Card */}
                    <div className="card problem-card">
                        <div className="icon-wrapper bg-red">
                            <AlertCircle size={32} color="#dc2626" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Post-Viral Arthritis</h3>
                        <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                            <li><strong>Severe Morning Stiffness:</strong> Difficulty moving joints after waking up.</li>
                            <li><strong>Symmetrical Pain:</strong> Affects both hands, wrists, or ankles simultaneously.</li>
                            <li><strong>Chronic Inflammation:</strong> The immune system remains "switched on", attacking healthy tissue.</li>
                            <li><strong>Ineffective Painkillers:</strong> Standard NSAIDs often fail to provide long-term relief without side effects.</li>
                        </ul>
                    </div>

                    {/* The Solution Card */}
                    <div className="card solution-card">
                        <div className="icon-wrapper bg-green">
                            <Leaf size={32} color="var(--color-primary)" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>The Natural Intervention</h3>
                        <ul className="feature-list" style={{ marginTop: '1.5rem' }}>
                            <li><strong><Shield size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} color="var(--color-primary)" /> Immune Modulation:</strong> Calms the overactive immune response rather than just masking the pain.</li>
                            <li><strong><Zap size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} color="var(--color-primary)" /> Cartilage Repair:</strong> Supplies essential building blocks to repair joint damage.</li>
                            <li><strong><Leaf size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} color="var(--color-primary)" /> Deep Anti-Inflammatory:</strong> Utilizes potent botanical extracts proven to reduce viral-induced swelling.</li>
                            <li><strong>100% Drug-Free:</strong> Safe for long-term daily use without damaging your stomach.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
        .ps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }

        .problem-card {
          border-top: 4px solid #fecaca; /* Red border top */
          background: linear-gradient(to bottom, #fef2f2 0%, #ffffff 20%);
        }

        .solution-card {
          border-top: 4px solid var(--color-primary);
          background: linear-gradient(to bottom, #ecfdf5 0%, #ffffff 20%);
          box-shadow: 0 20px 25px -5px rgb(16 185 129 / 0.1), 0 8px 10px -6px rgb(16 185 129 / 0.1);
          transform: translateY(-8px);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bg-red { background-color: #fee2e2; }
        .bg-green { background-color: #d1fae5; }

        .feature-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-col;
          gap: 1.25rem;
        }

        .feature-list li {
          color: var(--color-text-main);
          line-height: 1.5;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }

        .feature-list li strong {
          color: #0f172a;
          margin-bottom: 0.2rem;
        }

        @media (max-width: 768px) {
          .ps-grid { grid-template-columns: 1fr; }
          .solution-card { transform: none; }
        }
      `}</style>
        </section>
    );
};

export default ProblemSolution;
