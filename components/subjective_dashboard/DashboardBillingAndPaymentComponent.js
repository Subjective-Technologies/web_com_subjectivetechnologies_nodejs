import React, { useState } from 'react';
import styles from '../../public/styles/DashboardBillingAndPaymentComponent.module.css';

const DashboardBillingAndPaymentComponent = () => {
    const [paymentMethod, setPaymentMethod] = useState('stripe');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const charges = [
        { description: 'Service Charge', amount: '$100.00' },
        { description: 'Maintenance Fee', amount: '$50.00' },
        { description: 'Usage Charge', amount: '$75.00' },
        { description: 'Tax', amount: '$15.00' },
    ];

    const total = charges.reduce((acc, charge) => acc + parseFloat(charge.amount.replace('$', '')), 0);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Billing and Cost Analysis</h1>
            <div className={styles.billingTable}>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {charges.map((charge, index) => (
                            <tr key={index}>
                                <td>{charge.description}</td>
                                <td>{charge.amount}</td>
                            </tr>
                        ))}
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>${total.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.paymentPanel}>
                <h2>Set Payment Method</h2>
                <div className={styles.paymentMethods}>
                    <label>
                        <input
                            type="radio"
                            value="stripe"
                            checked={paymentMethod === 'stripe'}
                            onChange={handlePaymentMethodChange}
                        />
                        Stripe
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="paypal"
                            checked={paymentMethod === 'paypal'}
                            onChange={handlePaymentMethodChange}
                        />
                        PayPal
                    </label>
                </div>
                {paymentMethod === 'stripe' && (
                    <div className={styles.stripeForm}>
                        <h3>Stripe Payment Form</h3>
                        {/* Mocked Stripe Payment Form */}
                        <input type="text" placeholder="Card Number" />
                        <input type="text" placeholder="MM/YY" />
                        <input type="text" placeholder="CVC" />
                        <button>Pay with Stripe</button>
                    </div>
                )}
                {paymentMethod === 'paypal' && (
                    <div className={styles.paypalForm}>
                        <h3>PayPal Payment Form</h3>
                        {/* Mocked PayPal Payment Form */}
                        <button>Pay with PayPal</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardBillingAndPaymentComponent;
