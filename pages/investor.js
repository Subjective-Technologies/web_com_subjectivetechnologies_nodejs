import { getText } from '../utils/getText.js';
console.log('Loading investor.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const InvestorComponent = dynamic(() => import('../components/InvestorComponent'), {
  ssr: false
});
const Investors = () => {
  console.log('Rendering Investors');
  console.log('Returning from Investors');
  return <div className={getText("investor.js_9_Y29udG")}>
            <div className={getText("investor.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("investor.js_17_Y29udG")}>
                <InvestorComponent />
            </div>
            <div className={getText("investor.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default Investors;