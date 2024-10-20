import { getText } from '../utils/getText.js';
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const DownloadComponent = dynamic(() => import('../components/DownloadComponent'), {
  ssr: false
});
const Download = () => {
  return <div className={getText("download.js_9_Y29udG")}>
            <div className={getText("download.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("download.js_17_Y29udG")}>
                <DownloadComponent />
            </div>
            <div className={getText("download.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default Download;