import { getText } from '../utils/getText.js';
console.log('Loading subjective_be_myself.js');
// src/pages/products/subjective_be_myself.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveBeMyselfComponent = dynamic(() => import('../components/SubjectiveBeMyselfComponent'), {
  ssr: false
});
const SubjectiveBeMyself = () => {
  console.log('Rendering SubjectiveBeMyself');
  console.log('Returning from SubjectiveBeMyself');
  return <div className={getText("subjective_be_myself.js_9_Y29udG")}>
            <div className={getText("subjective_be_myself.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_be_myself.js_17_Y29udG")}>
                <SubjectiveBeMyselfComponent />
            </div>
            <div className={getText("subjective_be_myself.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveBeMyself;