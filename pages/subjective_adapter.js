import { getText } from '../utils/getText.js';
console.log('Loading subjective_adapter.js');
// src/pages/products/subjective_adapter.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveAdapterComponent = dynamic(() => import('../components/SubjectiveAdapterComponent'), {
  ssr: false
});
const SubjectiveAdapter = () => {
  console.log('Rendering SubjectiveAdapter');
  console.log('Returning from SubjectiveAdapter');
  return <div className={getText("subjective_adapter.js_9_Y29udG")}>
            <div className={getText("subjective_adapter.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_adapter.js_17_Y29udG")}>
                <SubjectiveAdapterComponent />
            </div>
            <div className={getText("subjective_adapter.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveAdapter;