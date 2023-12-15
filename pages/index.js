import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const GoldenThinkerAnimation = dynamic(() => import('../components/GoldenThinkerAnimation'), {
  ssr: false,
});

const Home = () => {
    return (
        <div>
            <Menu />
            <GoldenThinkerAnimation id="three_canvas"/>
            <Footer />
        </div>
    );
};

export default Home;
