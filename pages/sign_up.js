console.log('Loading sign_up.js');
import React from 'react';
import dynamic from 'next/dynamic';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SignUpComponent = dynamic(() => import('../components/SignUpComponent'), {
  ssr: false,
});

const SignUp = () => {
console.log('Rendering SignUp');
console.log('Returning from SignUp');
  return (
    <div className="container">
      <div className="menu_container">
        <Menu />
      </div>
      <div className="content_container">
        <SignUpComponent />
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
