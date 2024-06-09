import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const SubjectiveThermoCurrencyComponent = dynamic(() => import('../components/SubjectiveThermoCurrencyComponent'), {
    ssr: false,
  });
  
  const SubjectiveThermoCurrency = () => {
      return (
          <div className="container">
              <div className="menu_container">
                  <Menu />
              </div>
              <div className="content_container">
                  <SubjectiveThermoCurrencyComponent />
              </div>
              <div className="footer_container">
                  <Footer />
              </div>
          </div>
      );
  };
  
  export default SubjectiveThermoCurrency;