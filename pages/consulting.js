import { getText } from '../utils/getText.js';
console.log('Loading consulting.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const ConsultingComponent = dynamic(() => import('../components/ConsultingComponent'), {
  ssr: false
});
const Consulting = () => {
  console.log('Rendering Consulting');
  console.log('Returning from Consulting');
  return <div className={getText("consulting.js_9_Y29udG")}>
            <div className={getText("consulting.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("consulting.js_17_Y29udG")}>
                <ConsultingComponent />
            </div>
            <div className={getText("consulting.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default Consulting;