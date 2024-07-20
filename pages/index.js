import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';

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
        <GoldenThinkerAnimation />
      </div>
    </div>
  );
};

export default Home;
