// pages/index.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const GoldenThinkerAnimation = dynamic(() => import('../components/GoldenThinkerAnimation'), {
  ssr: false,
});

const Home = () => {
    return (
        <div className="container">
            <div className="menu_container">
                <Menu />
            </div>
            <div className="animation_container">
                <GoldenThinkerAnimation id="three_canvas"/>
            </div>
            <div className="footer_container">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
