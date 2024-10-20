import { getText } from '../utils/getText.js';
console.log('Loading subjective_formate.js');
// src/pages/products/subjective_formate.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveForMateComponent = dynamic(() => import('../components/SubjectiveForMateComponent'), {
  ssr: false
});
const SubjectiveForMate = () => {
  console.log('Rendering SubjectiveForMate');
  console.log('Returning from SubjectiveForMate');
  return <div className={getText("subjective_formate.js_9_Y29udG")}>
            <div className={getText("subjective_formate.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_formate.js_17_Y29udG")}>
                <SubjectiveForMateComponent />
            </div>
            <div className={getText("subjective_formate.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveForMate;