import { getText } from '../utils/getText.js';
console.log('Loading subjective_logistics.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveLogisticsComponent = dynamic(() => import('../components/SubjectiveLogisticsComponent'), {
  ssr: false
});
const SubjectiveLogistics = () => {
  console.log('Rendering SubjectiveLogistics');
  console.log('Returning from SubjectiveLogistics');
  return <div className={getText("subjective_logistics.js_9_Y29udG")}>
            <div className={getText("subjective_logistics.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_logistics.js_17_Y29udG")}>
                <SubjectiveLogisticsComponent />
            </div>
            <div className={getText("subjective_logistics.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveLogistics;