import { getText } from '../utils/getText.js';
console.log('Loading subjective_advertising.js');
// src/pages/products/subjective_advertising.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveAdvertisingComponent = dynamic(() => import('../components/SubjectiveAdvertisingComponent'), {
  ssr: false
});
const SubjectiveAdvertising = () => {
  console.log('Rendering SubjectiveAdvertising');
  console.log('Returning from SubjectiveAdvertising');
  return <div className={getText("subjective_advertising.js_9_Y29udG")}>
            <div className={getText("subjective_advertising.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_advertising.js_17_Y29udG")}>
                <SubjectiveAdvertisingComponent />
            </div>
            <div className={getText("subjective_advertising.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveAdvertising;