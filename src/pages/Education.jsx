import { AlertTriangle, Clock, Activity, FileText, Bug, ShieldPlus, Stethoscope, Pill } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Education = () => {
    // FAQ Schema for Rich Snippets in Google Search
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are the first chikungunya symptoms?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The primary chikungunya symptoms include sudden high fever, severe joint pain, muscle pain, and occasionally a chikungunya rash."
                }
            },
            {
                "@type": "Question",
                "name": "Is chikungunya contagious?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, the chikungunya disease is not contagious from person to person. It is only spread by the bite of an infected mosquito."
                }
            },
            {
                "@type": "Question",
                "name": "What is the best ayurvedic medicine for chikungunya joint pain?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ayurvedic medicine for chikungunya joint pain focuses on inflammation. Herbs like Turmeric, Boswellia, Ashwagandha, and Fenugreek are considered highly effective ayurvedic remedies for chikungunya."
                }
            }
        ]
    };

    return (
        <div className="education-hub section bg-white">
            <Helmet>
                <title>Chikungunya Virus: Symptoms, Treatment, Causes & Prevention</title>
                <meta name="description" content="A comprehensive guide covering everything about chikungunya: causes, symptoms, rash, diagnosis, prevention, and the best ayurvedic medicine for chikungunya joint pain." />
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            <div className="container">
                <div className="text-center mb-16">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-0.025em' }}>
                        The Ultimate Guide to <span style={{ color: 'var(--color-primary)' }}>Chikungunya Disease</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                        Everything you need to know about the chikungunya virus: causes, symptoms, prevention, and how to find the best medicine for chikungunya joint pain.
                    </p>
                </div>

                <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: '4rem' }}>

                    <div className="main-content">
                        {/* Table of Contents - Clickable Jump Links for SEO */}
                        <div className="toc-box mb-12 p-6" style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Table of Contents</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><a href="#about-chikungunya" style={{ fontWeight: 600 }}>1. Introduction & Meaning: What is Chikungunya?</a></li>
                                <li><a href="#causes-and-spread" style={{ fontWeight: 600 }}>2. Causes of Chikungunya: How is it Spread?</a></li>
                                <li><a href="#symptoms-and-diagnosis" style={{ fontWeight: 600 }}>3. Chikungunya Fever Symptoms & Rash</a></li>
                                <li><a href="#treatment-and-medicine" style={{ fontWeight: 600 }}>4. Chikungunya Treatment & Ayurvedic Medicine</a></li>
                                <li><a href="#prevention-and-control" style={{ fontWeight: 600 }}>5. Prevention and Control of Chikungunya</a></li>
                                <li><a href="#dengue-and-zika" style={{ fontWeight: 600 }}>6. Chikungunya vs Dengue vs Zika</a></li>
                            </ul>
                        </div>

                        <article className="prose" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                            <h2 id="about-chikungunya" className="flex items-center gap-2" style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'var(--color-text-main)', scrollMarginTop: '100px' }}>
                                <FileText color="var(--color-primary)" /> 1. Introduction: About Chikungunya
                            </h2>
                            <p>
                                <strong>Chikungunya definition:</strong> Chikungunya (often spelled creatively as <em>chicken chikungunya</em> in casual search, but officially the <strong>chikungunya virus disease</strong>) is a mosquito-borne illness. But what is the exact <em>chikungunya meaning</em>? The word "chikungunya" comes from the Kimakonde language and literally means "to become contorted." This perfectly describes the stooped posture of patients suffering from severe <strong>joint pain after chikungunya</strong>.
                            </p>
                            <p>
                                When exploring <em>chikungunya in hindi</em> or <em>chikungunya english</em> definitions, the global consensus defines it as a debilitating viral infection that primarily causes intense fever and chronic arthralgia (joint pain).
                            </p>

                            <h2 id="causes-and-spread" className="flex items-center gap-2" style={{ fontSize: '2.25rem', marginTop: '3rem', marginBottom: '1rem', scrollMarginTop: '100px' }}>
                                <Bug color="var(--color-primary)" /> 2. Causes of Chikungunya Virus
                            </h2>
                            <p>
                                One of the most common questions is: <strong>Chikungunya caused by which mosquito?</strong> The primary <em>causes of chikungunya</em> are bites from infected female mosquitoes. Specifically, <strong>aedes albopictus chikungunya</strong> and <em>aedes aegypti</em> are the two mosquito species responsible for the transmission.
                            </p>
                            <div className="card" style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #dc2626', margin: '2rem 0', padding: '1.5rem' }}>
                                <h3 className="flex items-center gap-2" style={{ color: '#b91c1c', margin: 0, marginBottom: '0.75rem' }}>
                                    <AlertTriangle size={24} /> Is Chikungunya Contagious?
                                </h3>
                                <p style={{ margin: 0 }}>
                                    Many wonder if the <strong>chikungunya virus is contagious</strong>. The answer is no. You cannot catch it from holding hands, coughing, or sneezing. <em>Chikungunya is spread by</em> the bite of the <strong>chikungunya mosquito</strong>. Unless a mosquito bites an infected person and then bites you, it will not spread.
                                </p>
                            </div>
                            <p>
                                Rapid urbanization and climate change have unfortunately led to a massive <strong>chikungunya outbreak</strong> across various continents, expanding the geographical range where this <em>mosquito disease chikungunya</em> is endemic.
                            </p>

                            <h2 id="symptoms-and-diagnosis" className="flex items-center gap-2" style={{ fontSize: '2.25rem', marginTop: '3rem', marginBottom: '1rem', scrollMarginTop: '100px' }}>
                                <Stethoscope color="var(--color-primary)" /> 3. Chikungunya Fever Symptoms & Rash
                            </h2>
                            <p>
                                The <strong>chikungunya virus infection</strong> primarily presents itself within 3-7 days of the initial <em>chikungunya bite</em>. The hallmark <strong>chikungunya symptoms</strong> include:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><strong>Chikungunya Fever:</strong> A sudden onset of high fever, often exceeding 102°F.</li>
                                <li><strong>Severe Joint Pain:</strong> Known as <em>joint pain from chikungunya</em>, this is the most notorious symptom, causing immense stiffness in hands, wrists, and ankles.</li>
                                <li><strong>Chikungunya Rash:</strong> A maculopapular <em>chikungunya symptoms rash</em> that appears on the trunk and limbs, leading many to search for specific <em>chikungunya rash treatment</em>.</li>
                                <li><strong>Muscle and Body Ache:</strong> Severe <em>body pain after chikungunya</em> that makes movement incredibly difficult.</li>
                            </ul>
                            <p>
                                Proper <strong>chikungunya virus diagnosis</strong> requires a blood test to differentiate it from other mosquito-borne viruses.
                            </p>

                            <h2 id="treatment-and-medicine" className="flex items-center gap-2" style={{ fontSize: '2.25rem', marginTop: '3rem', marginBottom: '1rem', scrollMarginTop: '100px' }}>
                                <Pill color="var(--color-primary)" /> 4. Chikungunya Virus Treatment & Medicine
                            </h2>
                            <p>
                                While there is currently no direct anti-viral <strong>chikungunya cure</strong>, modern and traditional systems offer various ways to treat it. The primary goal of <strong>treatment of chikungunya fever</strong> is symptom management. If you are looking for the exact <strong>chikungunya medicine name</strong>, you must first decide between traditional and alternative therapies.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Allopathic Medicine for Chikungunya</h3>
                            <p>
                                Conventional <em>treatment for chikungunya</em> relies on NSAIDs to manage fever and inflammation. However, finding the absolute <em>best tablet for chikungunya</em> or a standard <em>chikungunya fever medicine</em> in allopathy can be frustrating because these drugs often fail to cure the underlying lingering post-viral inflammation. Standard <strong>chikungunya pain relief tablets</strong> only offer temporary masking.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Chikungunya in Ayurveda</h3>
                            <p>
                                Because chronic pain can last for years, many turn to the <strong>best ayurvedic medicine for chikungunya</strong>. The holistic approach of <em>ayurvedic treatment for chikungunya</em> focuses on detoxifying the blood and reducing systemic inflammation. When searching for reliable <strong>medicine for joint pain after chikungunya</strong>, Ayurveda is often the answer.
                            </p>
                            <p>
                                The best <strong>ayurvedic medicine for chikungunya joint pain</strong> heavily features ingredients like:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><strong>Turmeric & Ginger:</strong> Powerful anti-inflammatories found in any good <em>ayurvedic tablet for chikungunya</em>.</li>
                                <li><strong>Boswellia & Fenugreek:</strong> Act as natural painkillers and are universally hailed as the <em>best medicine for chikungunya joint pain</em>.</li>
                                <li><strong>Harde & Neem:</strong> Essential <em>chikungunya medicine in ayurveda</em> used to cleanse the body of viral residuals.</li>
                            </ul>

                            <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Homeopathy, Unani, and Patanjali Options</h3>
                            <p>
                                Beyond Ayurveda, patients frequently seek alternative <strong>medicine on chikungunya</strong>:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><strong>Homeopathy:</strong> People often search for the <em>best homeopathic medicine for chikungunya</em>. Common <em>chikungunya homeopathy remedies</em> include Rhus Tox and Eupatorium Perfoliatum for the "bone-breaking" pain. <em>Chikungunya ka homeopathic treatment</em> focuses on "like cures like".</li>
                                <li><strong>Unani:</strong> Traditional <strong>unani medicine for chikungunya</strong> utilizes herbs like Khamira Marwareed to strengthen the heart and reduce joint fevers.</li>
                                <li><strong>Patanjali:</strong> For those seeking commercial Ayurvedic blends, finding a specific <strong>patanjali medicine for joint pain after chikungunya</strong> (like Giloy Ghanvati or Peedantak Vati) is a popular route for a <em>chikungunya patanjali medicine</em> solution.</li>
                            </ul>
                            <p>Regardless of whether you choose an <em>ayurvedic remedy for chikungunya</em> or a <strong>chikungunya rash medicine</strong>, supporting your body with high-quality, standardized herbal extracts remains the most proven path to recovery.</p>

                            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#ecfdf5', borderRadius: '1rem', textAlign: 'center', border: '2px solid var(--color-primary)' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#065f46' }}>Looking for the Best Tablet for Chikungunya Pain?</h3>
                                <p style={{ marginBottom: '1.5rem', color: '#047857' }}>We combined the 8 most powerful Ayurvedic herbs into one clinically formulated <strong>chikungunya treatment medicine</strong> to defeat post-viral arthritis.</p>
                                <a href="/product" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.39)' }}>
                                    View Our Ayurvedic Joint Relief Formula
                                </a>
                            </div>

                            <h2 id="prevention-and-control" className="flex items-center gap-2" style={{ fontSize: '2.25rem', marginTop: '3rem', marginBottom: '1rem', scrollMarginTop: '100px' }}>
                                <ShieldPlus color="var(--color-primary)" /> 5. Prevention and Control of Chikungunya
                            </h2>
                            <p>
                                The cornerstone of public health regarding this virus is the <strong>prevention of chikungunya</strong>. The CDC outlines strict <em>chikungunya prevention and control</em> measures:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li><strong>Vector Control:</strong> <em>Prevention from chikungunya</em> starts with eliminating standing water where the <em>aedes chikungunya</em> mosquitoes breed.</li>
                                <li><strong>Personal Protection:</strong> Use EPA-registered insect repellents and wear long sleeves to prevent transmission.</li>
                            </ul>
                            <p>
                                Is there a <strong>chikungunya vaccine</strong>? While the FDA approved the first <em>chikungunya virus vaccine</em> recently for high-risk individuals, widespread <em>chikungunya virus prevention</em> still heavily relies on mosquito control.
                            </p>

                            <h2 id="dengue-and-zika" className="flex items-center gap-2" style={{ fontSize: '2.25rem', marginTop: '3rem', marginBottom: '1rem', scrollMarginTop: '100px' }}>
                                <Activity color="var(--color-primary)" /> 6. Chikungunya vs Dengue vs Zika
                            </h2>
                            <p>
                                When searching for "<em>chikungunya and dengue</em>" or "<em>chikungunya zika</em>," it is important to know that all three are transmitted by the exact same mosquitoes.
                            </p>
                            <p>
                                In comparing <strong>chikungunya and dengue symptoms</strong>, dengue fever typically presents with a higher risk of bleeding and lower platelet counts, whereas <em>dengue fever and chikungunya virus</em> differ mostly in that chikungunya causes vastly more intense, long-lasting <strong>chikungunya and joint pain</strong>. The <em>chikungunya and zika</em> viruses share rash and mild fever symptoms, but Zika is primarily dangerous due to birth defects.
                            </p>

                        </article>
                    </div>

                    <aside className="sidebar">
                        <div className="card" style={{ position: 'sticky', top: '100px' }}>
                            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Key Takeaways</h3>

                            <div className="flex flex-col gap-6">
                                <div className="flex gap-3">
                                    <div style={{ color: 'var(--color-primary)' }}><Clock size={24} /></div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Onset</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Symptoms begin 3-7 days after a mosquito bite.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div style={{ color: 'var(--color-primary)' }}><Activity size={24} /></div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Main Issue</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Severe joint pain that can last for years.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div style={{ color: 'var(--color-primary)' }}><Pill size={24} /></div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>Best Treatment</h4>
                                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Ayurvedic anti-inflammatories like Turmeric and Boswellia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

            <style>{`
                .w-full { width: 100%; }
                .toc-box a { color: var(--color-text-main); text-decoration: none; display: block; padding: 0.25rem 0; }
                .toc-box a:hover { color: var(--color-primary); }
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
