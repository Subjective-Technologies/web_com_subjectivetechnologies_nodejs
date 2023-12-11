// pages/index.js
import React from 'react';
import Menu from '../components/Menu';
import ThreeCanvas from '../components/ThreeCanvas';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <Menu />
            <ThreeCanvas />
            <Footer />
        </div>
    );
};

export default Home;
