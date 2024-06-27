// pages/sign_in.js
import React from 'react';
import dynamic from 'next/dynamic';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SignInComponent = dynamic(() => import('../components/SignInComponent'), {
  ssr: false,
});

const SignIn = () => {
  return (
    <div className="container">
      <div className="menu_container">
        <Menu />
      </div>
      <div className="content_container">
        <SignInComponent />
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
