import { getText } from '../utils/getText.js';
console.log('Loading subjective_semantizer.js');
// src/pages/products/subjective_semantizer.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveSemantizerComponent = dynamic(() => import('../components/SubjectiveSemantizerComponent'), {
  ssr: false
});
const SubjectiveSemantizer = () => {
  console.log('Rendering SubjectiveSemantizer');
  console.log('Returning from SubjectiveSemantizer');
  return <div className={getText("subjective_semantizer.js_9_Y29udG")}>
            <div className={getText("subjective_semantizer.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_semantizer.js_17_Y29udG")}>
                <SubjectiveSemantizerComponent />
            </div>
            <div className={getText("subjective_semantizer.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveSemantizer;