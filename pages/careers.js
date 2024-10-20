import { getText } from '../utils/getText.js';
console.log('Loading careers.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const CareersComponent = dynamic(() => import('../components/CareersComponent'), {
  ssr: false
});
const Careers = () => {
  console.log('Rendering Careers');
  console.log('Returning from Careers');
  return <div className={getText("careers.js_9_Y29udG")}>
            <div className={getText("careers.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("careers.js_17_Y29udG")}>
                <CareersComponent />
            </div>
            <div className={getText("careers.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default Careers;