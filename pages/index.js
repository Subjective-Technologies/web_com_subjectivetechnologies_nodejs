import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const ThreeCanvas = dynamic(() => import('../components/ThreeCanvas'), {
  ssr: false,
});

const Home = () => {
    return (
        <div>
            <Menu />
            <ThreeCanvas id="three_canvas"/>
            <Footer />
        </div>
    );
};

export default Home;
