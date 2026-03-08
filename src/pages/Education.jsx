import { AlertTriangle, Clock, Activity, FileText } from 'lucide-react';

const Education = () => {
    return (
        <div className="education-hub section bg-white">
            <div className="container">

                <div className="text-center mb-16">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Understanding <span style={{ color: 'var(--color-primary)' }}>Chikungunya</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Your complete guide to the virus, its lingering side effects, and why the joint pain lasts so long.
                    </p>
                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem' }}>

                    <div className="main-content">
                        <article className="prose" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>What is Chikungunya?</h2>
                            <p>
                                Chikungunya is a viral disease transmitted to humans by infected mosquitoes. The name itself comes from the Kimakonde language, meaning "to become contorted," describing the stooped appearance of sufferers due to severe joint pain (arthralgia).
                            </p>

                            <div className="card" style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #dc2626', margin: '2rem 0', padding: '1.5rem' }}>
                                <h3 className="flex items-center gap-2" style={{ color: '#b91c1c', margin: 0, marginBottom: '0.5rem' }}>
                                    <AlertTriangle size={24} /> The Acute Phase vs. The Chronic Phase
                                </h3>
                                <p style={{ margin: 0 }}>
                                    While the initial fever typically resolves in a week, the devastating reality is that up to 40% of patients develop chronic, debilitating joint pain that can last for months or even years. This is known as post-Chikungunya chronic inflammatory rheumatism (pCHIKV-CIR).
                                </p>
                            </div>

                            <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>Why Does the Joint Pain Linger?</h2>
                            <p>
                                Scientists believe the virus triggers an aggressive immune system response. Long after the active virus is cleared from the blood, viral RNA fragments may remain trapped in the joints (synovial tissue).
                            </p>
                            <p>
                                This causes the immune system to continually attack the joint space, leading to chronic inflammation, morning stiffness, and pain identical to rheumatoid arthritis. Since this is an immune-driven inflammatory loop, standard over-the-counter pain killers often provide little to no relief.
                            </p>

                            <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>Managing the Symptoms</h2>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><strong>Rest during acute phases:</strong> Avoid heavy lifting when joints are inflamed.</li>
                                <li><strong>Cold therapy:</strong> Ice packs can reduce acute swelling.</li>
                                <li><strong>Targeted supplementation:</strong> Using ingredients that calm the overactive immune response rather than just masking the pain.</li>
                            </ul>
                        </article>
                    </div>

                    <aside className="sidebar">
                        <div className="card" style={{ position: 'sticky', top: '100px' }}>
                            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Key Facts</h3>

                            <div className="flex flex-col gap-6">
                                <div className="flex gap-3">
                                    <div style={{ color: 'var(--color-primary)' }}><Clock size={24} /></div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Incubation Period</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Typically 3 to 7 days after the mosquito bite.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div style={{ color: 'var(--color-primary)' }}><Activity size={24} /></div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Primary Symptoms</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Sudden fever and severe joint pain, often in hands and feet.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div style={{ color: 'var(--color-primary)' }}><FileText size={24} /></div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Chronic Risk</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Affects ~40% of patients, higher risk in older adults.</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                                <a href="/product" className="btn btn-primary w-full flex items-center justify-center text-center">
                                    Discover Our Relief Formula
                                </a>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

            <style>{`
        .w-full { width: 100%; }
        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr !important;
          }
          aside {
            margin-top: 3rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Education;
