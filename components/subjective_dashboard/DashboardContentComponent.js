// components/subjective_dashboard/DashboardContentComponent.js
import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import styles from '../../public/styles/DashboardContentComponent.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
);

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(75,192,192,0.6)',
        },
    ],
};

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'User Growth',
            data: [33, 53, 85, 41, 44, 65],
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
        },
    ],
};

const DashboardContentComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [toggleState, setToggleState] = useState(false);

    const handleModalToggle = () => {
        setModalOpen(!isModalOpen);
    };

    const handleToggleChange = () => {
        setToggleState(!toggleState);
    };

    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.title}>Dashboard Overview</h1>

            <div className={styles.widgetContainer}>
                <div className={styles.widget}>
                    <h2 className={styles.widgetTitle}>Monthly Sales</h2>
                    <Bar data={barData} />
                </div>

                <div className={styles.widget}>
                    <h2 className={styles.widgetTitle}>User Growth</h2>
                    <Line data={lineData} />
                </div>
            </div>

            <div className={styles.widget}>
                <h2 className={styles.widgetTitle}>Data Table</h2>
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>28</td>
                            <td>New York</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>34</td>
                            <td>San Francisco</td>
                        </tr>
                        <tr>
                            <td>Sam Johnson</td>
                            <td>45</td>
                            <td>Chicago</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.widget}>
                <h2 className={styles.widgetTitle}>Interactive Buttons</h2>
                <button className={styles.button} onClick={() => alert('Button 1 clicked!')}>Button 1</button>
                <button className={styles.button} onClick={() => alert('Button 2 clicked!')}>Button 2</button>
            </div>

            <div className={styles.widget}>
                <h2 className={styles.widgetTitle}>Form Example</h2>
                <form className={styles.form}>
                    <label className={styles.formLabel}>
                        Name:
                        <input type="text" className={styles.formInput} /></label>
                    <label className={styles.formLabel}>
                        Email:
                        <input type="email" className={styles.formInput} />
                    </label>
                    <button type="submit" className={styles.formButton}>Submit</button>
                </form>
            </div>

            <div className={styles.widget}>
                <h2 className={styles.widgetTitle}>Modal Example</h2>
                <button className={styles.button} onClick={handleModalToggle}>Open Modal</button>
                {isModalOpen && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <span className={styles.modalClose} onClick={handleModalToggle}>&times;</span>
                            <p>This is a modal!</p>
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.widget}>
                <h2 className={styles.widgetTitle}>Toggle Example</h2>
                <label className={styles.toggleSwitch}>
                    <input type="checkbox" checked={toggleState} onChange={handleToggleChange} />
                    <span className={styles.slider}></span>
                </label>
                <p>{toggleState ? "Toggle is ON" : "Toggle is OFF"}</p>
            </div>

            <div className={styles.widget}>
                <h2 className={styles.widgetTitle}>Slider Example</h2>
                <input type="range" min="1" max="100" className={styles.rangeSlider} />
            </div>
        </div>
    );
};

export default DashboardContentComponent;