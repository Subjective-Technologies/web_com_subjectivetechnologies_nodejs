import { getText } from '../utils/getText.js';
console.log('Loading contact.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const ContactComponent = dynamic(() => import('../components/ContactComponent'), {
  ssr: false
});
const Contact = () => {
  console.log('Rendering Contact');
  console.log('Returning from Contact');
  return <div className={getText("contact.js_9_Y29udG")}>
            <div className={getText("contact.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("contact.js_17_Y29udG")}>
                <ContactComponent />
            </div>
            <div className={getText("contact.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default Contact;