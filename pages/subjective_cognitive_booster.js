import { getText } from '../utils/getText.js';
console.log('Loading subjective_cognitive_booster.js');
// src/pages/products/subjective_cognitive_booster.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveCognitiveBoosterComponent = dynamic(() => import('../components/SubjectiveCognitiveBoosterComponent'), {
  ssr: false
});
const SubjectiveCognitiveBooster = () => {
  console.log('Rendering SubjectiveCognitiveBooster');
  console.log('Returning from SubjectiveCognitiveBooster');
  return <div className={getText("subjective_cognitive_booster.js_9_Y29udG")}>
            <div className={getText("subjective_cognitive_booster.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_cognitive_booster.js_17_Y29udG")}>
                <SubjectiveCognitiveBoosterComponent />
            </div>
            <div className={getText("subjective_cognitive_booster.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveCognitiveBooster;