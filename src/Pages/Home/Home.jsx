import React from 'react';
import Banner from '../../Components/Banner/Banner';
import StaticSection from '../../Components/staticSection/StaticSection';
import TrendingApps from '../../Components/trendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner />
            <StaticSection />
            <TrendingApps />
        </div>
    );
};

export default Home;