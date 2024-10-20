import { getText } from '../utils/getText.js';
console.log('Loading scientific_research.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ScientificResearchComponent from '../components/ScientificResearchComponent';
const Home = () => {
  console.log('Rendering Home');
  console.log('Returning from Home');
  return <div className={getText("scientific_research.js_9_Y29udG")}>
      <div className={getText("scientific_research.js_14_bWVudV")}>
        <Menu />
      </div>
      <div className={getText("scientific_research.js_19_YW5pbW")}>
        <ScientificResearchComponent id={getText("scientific_research.js_17_aW1wYW")} />
      </div>
      <div className={getText("scientific_research.js_16_Zm9vdG")}>
        <Footer />
      </div>
    </div>;
};
export default Home;