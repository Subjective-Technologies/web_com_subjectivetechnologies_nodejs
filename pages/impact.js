console.log('Loading impact.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


const ImpactComponent = dynamic(() => import('../components/ImpactComponent'), {
  ssr: false,
});

const Home = () => {
console.log('Rendering Home');
console.log('Returning from Home');
  return (
    <div className="container">
      <div className="menu_container">
        <Menu />
      </div>
      <div className="animation_container">
        <ImpactComponent id="impact_react_page" />
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;