import { getText } from '../utils/getText.js';
console.log('Loading impact.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const ImpactComponent = dynamic(() => import('../components/ImpactComponent'), {
  ssr: false
});
const Home = () => {
  console.log('Rendering Home');
  console.log('Returning from Home');
  return <div className={getText("impact.js_9_Y29udG")}>
      <div className={getText("impact.js_14_bWVudV")}>
        <Menu />
      </div>
      <div className={getText("impact.js_19_YW5pbW")}>
        <ImpactComponent id={getText("impact.js_17_aW1wYW")} />
      </div>
      <div className={getText("impact.js_16_Zm9vdG")}>
        <Footer />
      </div>
    </div>;
};
export default Home;