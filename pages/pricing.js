import { getText } from '../utils/getText.js';
console.log('Loading investor.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const PricingComponent = dynamic(() => import('../components/PricingComponent'), {
  ssr: false
});
const Pricing = () => {
  console.log('Rendering Pricing');
  console.log('Returning from Pricing');
  return <div className={getText("pricing.js_9_Y29udG")}>
            <div className={getText("pricing.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("pricing.js_17_Y29udG")}>
                <PricingComponent />
            </div>
            <div className={getText("pricing.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default Pricing;