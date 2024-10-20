import { getText } from '../utils/getText.js';
console.log('Loading sign_up.js');
import React from 'react';
import dynamic from 'next/dynamic';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SignUpComponent = dynamic(() => import('../components/SignUpComponent'), {
  ssr: false
});
const SignUp = () => {
  console.log('Rendering SignUp');
  console.log('Returning from SignUp');
  return <div className={getText("sign_up.js_9_Y29udG")}>
      <div className={getText("sign_up.js_14_bWVudV")}>
        <Menu />
      </div>
      <div className={getText("sign_up.js_17_Y29udG")}>
        <SignUpComponent />
      </div>
      <div className={getText("sign_up.js_16_Zm9vdG")}>
        <Footer />
      </div>
    </div>;
};
export default SignUp;