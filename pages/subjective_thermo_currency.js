import { getText } from '../utils/getText.js';
console.log('Loading subjective_thermo_currency.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const SubjectiveThermoCurrencyComponent = dynamic(() => import('../components/SubjectiveThermoCurrencyComponent'), {
  ssr: false
});
const SubjectiveThermoCurrency = () => {
  return <div className={getText("subjective_thermo_currency.js_9_Y29udG")}>
              <div className={getText("subjective_thermo_currency.js_14_bWVudV")}>
                  <Menu />
              </div>
              <div className={getText("subjective_thermo_currency.js_17_Y29udG")}>
                  <SubjectiveThermoCurrencyComponent />
              </div>
              <div className={getText("subjective_thermo_currency.js_16_Zm9vdG")}>
                  <Footer />
              </div>
          </div>;
};
export default SubjectiveThermoCurrency;