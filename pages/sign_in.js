import { getText } from '../utils/getText.js';
console.log('Loading sign_in.js');
// pages/sign_in.js
import React from 'react';
import dynamic from 'next/dynamic';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SignInComponent = dynamic(() => import('../components/SignInComponent'), {
  ssr: false
});
const SignIn = () => {
  console.log('Rendering SignIn');
  console.log('Returning from SignIn');
  return <div className={getText("sign_in.js_9_Y29udG")}>
      <div className={getText("sign_in.js_14_bWVudV")}>
        <Menu />
      </div>
      <div className={getText("sign_in.js_17_Y29udG")}>
        <SignInComponent />
      </div>
      <div className={getText("sign_in.js_16_Zm9vdG")}>
        <Footer />
      </div>
    </div>;
};
export default SignIn;