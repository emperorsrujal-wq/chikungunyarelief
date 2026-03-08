import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import ProblemSolution from '../components/ProblemSolution';
import ProductCard from '../components/ProductCard';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Chikungunya Joint Pain Relief | 100% Natural Fast Recovery</title>
                <meta name="description" content="Struggling with post-viral arthritis? Discover the #1 clinically formulated natural supplement to cure Chikungunya joint pain fast. 100% Drug-Free." />
            </Helmet>
            <Hero />
            <TrustBadges />
            <ProblemSolution />
            <ProductCard />
        </>
    );
};

export default Home;
