import { getText } from '../../utils/getText.js';
console.log('Loading DashboardBillingAndPaymentComponent.js');
import React, { useState } from 'react';
import styles from '../../public/styles/DashboardBillingAndPaymentComponent.module.css';
const DashboardBillingAndPaymentComponent = () => {
  console.log('Rendering DashboardBillingAndPaymentComponent');
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const handlePaymentMethodChange = event => {
    setPaymentMethod(event.target.value);
  };
  const charges = [{
    description: getText("DashboardBillingAndPaymentComponent.js_14_U2Vydm"),
    amount: getText("DashboardBillingAndPaymentComponent.js_7_JDEwMC")
  }, {
    description: getText("DashboardBillingAndPaymentComponent.js_15_TWFpbn"),
    amount: getText("DashboardBillingAndPaymentComponent.js_6_JDUwLj")
  }, {
    description: getText("DashboardBillingAndPaymentComponent.js_12_VXNhZ2"),
    amount: getText("DashboardBillingAndPaymentComponent.js_6_JDc1Lj")
  }, {
    description: getText("DashboardBillingAndPaymentComponent.js_3_VGF4"),
    amount: getText("DashboardBillingAndPaymentComponent.js_6_JDE1Lj")
  }];
  const total = charges.reduce((acc, charge) => acc + parseFloat(charge.amount.replace('$', '')), 0);
  console.log('Returning from DashboardBillingAndPaymentComponent');
  return <div className={styles.container}>
            <h1 className={styles.title}>{getText('DashboardBillingAndPaymentComponent.js_25_QmlsbG')}</h1>
            <div className={styles.billingTable}>
                <table>
                    <thead>
                        <tr>
                            <th>{getText('DashboardBillingAndPaymentComponent.js_11_RGVzY3')}</th>
                            <th>{getText('DashboardBillingAndPaymentComponent.js_6_QW1vdW')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {charges.map((charge, index) => <tr key={index}>
                                <td>{charge.description}</td>
                                <td>{charge.amount}</td>
                            </tr>)}
                        <tr>
                            <td><strong>{getText('DashboardBillingAndPaymentComponent.js_5_VG90YW')}</strong></td>
                            <td><strong>{getText('DashboardBillingAndPaymentComponent.js_1_JA==')}{total.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.paymentPanel}>
                <h2>{getText('DashboardBillingAndPaymentComponent.js_18_U2V0IF')}</h2>
                <div className={styles.paymentMethods}>
                    <label>
                        <input type={getText("DashboardBillingAndPaymentComponent.js_5_cmFkaW")} value={getText("DashboardBillingAndPaymentComponent.js_6_c3RyaX")} checked={paymentMethod === 'stripe'} onChange={handlePaymentMethodChange} />{getText('DashboardBillingAndPaymentComponent.js_6_U3RyaX')}</label>
                    <label>
                        <input type={getText("DashboardBillingAndPaymentComponent.js_5_cmFkaW")} value={getText("DashboardBillingAndPaymentComponent.js_6_cGF5cG")} checked={paymentMethod === 'paypal'} onChange={handlePaymentMethodChange} />{getText('DashboardBillingAndPaymentComponent.js_6_UGF5UG')}</label>
                </div>
                {paymentMethod === 'stripe' && <div className={styles.stripeForm}>
                        <h3>{getText('DashboardBillingAndPaymentComponent.js_19_U3RyaX')}</h3>
                        {/* Mocked Stripe Payment Form */}
                        <input type={getText("DashboardBillingAndPaymentComponent.js_4_dGV4dA")} placeholder={getText("DashboardBillingAndPaymentComponent.js_11_Q2FyZC")} />
                        <input type={getText("DashboardBillingAndPaymentComponent.js_4_dGV4dA")} placeholder={getText("DashboardBillingAndPaymentComponent.js_5_TU0vWV")} />
                        <input type={getText("DashboardBillingAndPaymentComponent.js_4_dGV4dA")} placeholder={getText("DashboardBillingAndPaymentComponent.js_3_Q1ZD")} />
                        <button>{getText('DashboardBillingAndPaymentComponent.js_15_UGF5IH')}</button>
                    </div>}
                {paymentMethod === 'paypal' && <div className={styles.paypalForm}>
                        <h3>{getText('DashboardBillingAndPaymentComponent.js_19_UGF5UG')}</h3>
                        {/* Mocked PayPal Payment Form */}
                        <button>{getText('DashboardBillingAndPaymentComponent.js_15_UGF5IH')}</button>
                    </div>}
            </div>
        </div>;
};
export default DashboardBillingAndPaymentComponent;