// pages/index.js
import React from 'react';
import Menu from '../components/Menu';
import ThreeCanvas from '../components/ThreeCanvas';
import Footer from '../components/Footer';



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
