import { getText } from '../utils/getText.js';
console.log('Loading subjective_domotics.js');
// src/pages/products/subjective_domotics.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveDomoticsComponent = dynamic(() => import('../components/SubjectiveDomoticsComponent'), {
  ssr: false
});
const SubjectiveDomotics = () => {
  console.log('Rendering SubjectiveDomotics');
  console.log('Returning from SubjectiveDomotics');
  return <div className={getText("subjective_domotics.js_9_Y29udG")}>
            <div className={getText("subjective_domotics.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_domotics.js_17_Y29udG")}>
                <SubjectiveDomoticsComponent />
            </div>
            <div className={getText("subjective_domotics.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveDomotics;