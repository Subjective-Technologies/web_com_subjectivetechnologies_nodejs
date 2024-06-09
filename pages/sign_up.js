import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SignUpComponent = dynamic(() => import('../components/SignUpComponent'), {
  ssr: false,
});

const SignUp = () => {
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
