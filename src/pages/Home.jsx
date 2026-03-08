import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import ProblemSolution from '../components/ProblemSolution';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Chikungunya Joint Pain Relief | 100% Natural Fast Recovery"
                description="Struggling with post-viral arthritis? Discover the #1 clinically formulated natural supplement to cure Chikungunya joint pain fast. 100% Drug-Free."
                path="/"
            />
            <Hero />
            <TrustBadges />
            <ProblemSolution />
            <ProductCard />
        </>
    );
};

export default Home;
