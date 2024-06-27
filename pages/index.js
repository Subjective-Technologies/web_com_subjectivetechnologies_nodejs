import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


const GoldenThinkerAnimation = dynamic(() => import('../components/GoldenThinkerAnimation'), {
  ssr: false,
});

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'chatway';
    script.async = true;
    script.src = 'https://cdn.chatway.app/widget.js?id=YQ6FHjhSbw3V';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container">
      <div className="menu_container">
        <Menu />
      </div>
      <div className="animation_container">
        <GoldenThinkerAnimation id="three_canvas" />
      </div>
{/*       <div className="footer_container">
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
