import { getText } from '../utils/getText.js';
console.log('Loading subjective_instant_job_finder.js');
// src/pages/products/subjective_instant_job_finder.js
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveInstantJobFinderComponent = dynamic(() => import('../components/SubjectiveInstantJobFinderComponent'), {
  ssr: false
});
const SubjectiveInstantJobFinder = () => {
  console.log('Rendering SubjectiveInstantJobFinder');
  console.log('Returning from SubjectiveInstantJobFinder');
  return <div className={getText("subjective_instant_job_finder.js_9_Y29udG")}>
            <div className={getText("subjective_instant_job_finder.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("subjective_instant_job_finder.js_17_Y29udG")}>
                <SubjectiveInstantJobFinderComponent />
            </div>
            <div className={getText("subjective_instant_job_finder.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default SubjectiveInstantJobFinder;