import { getText } from '../../utils/getText.js';
import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title } from 'chart.js';
import styles from '../../public/styles/DashboardContentComponent.module.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components for ChartJS
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title, ChartDataLabels);
const DashboardContentComponent = () => {
  // Colors array (same for pie and bar charts)
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#C9CBCF', '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#C9CBCF'];

  // Data for Pie Chart
  const pieData = {
    labels: ['Python', 'Java', 'C', 'C++', 'PHP', 'HTML', 'JavaScript', 'Ruby', 'Swift', 'Go', 'Kotlin', 'R', 'TypeScript', 'SQL'],
    datasets: [{
      data: [15, 12, 10, 8, 7, 6, 10, 5, 4, 3, 3, 5, 7, 5],
      backgroundColor: colors // Use the shared colors array
    }]
  };

  // Data for Bar Chart (apply same colors)
  const barData = {
    labels: ['Python', 'Java', 'C', 'C++', 'PHP', 'HTML', 'JavaScript', 'Ruby', 'Swift', 'Go', 'Kotlin', 'R', 'TypeScript', 'SQL'],
    datasets: [{
      label: getText("DashboardContentComponent.js_16_VGVjaG"),
      data: [15, 12, 10, 8, 7, 6, 10, 5, 4, 3, 3, 5, 7, 5],
      backgroundColor: colors.map(color => color + '80'),
      // Apply transparent version of colors for the bar chart
      borderColor: colors,
      // Use solid colors for borders
      borderWidth: 1
    }]
  };
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: getText("DashboardContentComponent.js_3_dG9w")
      },
      title: {
        display: true,
        text: getText("DashboardContentComponent.js_26_VGVjaG")
      }
    },
    scales: {
      y: {
        beginAtZero: true // Start the y-axis at 0
      }
    }
  };

  // Options for Pie Chart to place labels inside slices
  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false // Disable the legend for the pie chart
      },
      tooltip: {
        enabled: false // Disable tooltip to avoid overlap with data labels
      },
      datalabels: {
        color: getText("DashboardContentComponent.js_4_IzAwMA"),
        // Set labels to black
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex]; // Display labels inside slices
        },
        font: {
          weight: getText("DashboardContentComponent.js_4_Ym9sZA"),
          size: 12
        }
      }
    }
  };
  return <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <a href={getText("DashboardContentComponent.js_1_Lw==")}><h2>{getText('DashboardContentComponent.js_4_SG9tZQ')}</h2></a>
        <ul className={styles.sidebarMenu}>
          <li>{getText('DashboardContentComponent.js_9_RGFzaG')}</li>
          <li>{getText('DashboardContentComponent.js_7_UHJvZm')}</li>
          <li><a href={getText("DashboardContentComponent.js_18_L2Rhc2")}>{getText('DashboardContentComponent.js_7_TXkgQm')}</a></li>
          <li>{getText('DashboardContentComponent.js_10_SW5qZW')}</li>          
          <li>{getText('DashboardContentComponent.js_7_U3RhbW')}</li>
        </ul>
        <footer className={styles.sidebarFooter}>{getText('DashboardContentComponent.js_14_U2lkZW')}</footer>
      </aside>

      {/* Main Dashboard Content */}
      <div className={styles.mainContent}>
        <div className={styles.searchContainer}>
          <input type={getText("DashboardContentComponent.js_4_dGV4dA")} placeholder={getText("DashboardContentComponent.js_6_U2Vhcm")} className={styles.searchInput} />
        </div>

        <div className={styles.widgetsContainer}>
          <div className={styles.widget}>
            <h3>{getText('DashboardContentComponent.js_23_T3Zlcm')}</h3>
            <div className={styles.pieChartWrapper}>
              <Pie data={pieData} options={pieChartOptions} />
            </div>
          </div>

          {/* Technology Frameworks Bar Chart */}
          <div className={styles.technologyFrameworks}>
            <h3>{getText('DashboardContentComponent.js_21_VGVjaG')}</h3>
            <div className={styles.barChartWrapper}>
              <Bar data={barData} options={barChartOptions} /> {/* Bar Chart */}
            </div>
          </div>
        </div>

        {/* Other UsersComputational Affinity */}
        <div className={styles.widget}>
          <h3>{getText('DashboardContentComponent.js_38_UGVlcn')}</h3>
          <ul className={styles.teamMembersList}>
            {['Mezue', 'Mezue', 'Mezue', 'Mezue', 'Mezue', 'Mezue'].map((member, idx) => <li key={idx} className={styles.teamMemberItem}>
                <span><img src={getText("DashboardContentComponent.js_33_L2ltYW")} alt={getText("DashboardContentComponent.js_7_UHJvZm")} /></span>
                <span>{member}</span>
                <button className={styles.sendMessageButton}>{getText('DashboardContentComponent.js_12_U2VuZC')}</button>
              </li>)}
          </ul>
        </div>

        {/* Page Visits Section */}
        <div className={styles.pageVisitsSection}>
          <h3>{getText('DashboardContentComponent.js_11_UGFnZS')}</h3>
          <table className={styles.pageVisitsTable}>
            <thead>
              <tr>
                <th>{getText('DashboardContentComponent.js_9_UGFnZS')}</th>
                <th>{getText('DashboardContentComponent.js_5_Vmlld3')}</th>
                <th>{getText('DashboardContentComponent.js_5_VmFsdW')}</th>
                <th>{getText('DashboardContentComponent.js_11_Qm91bm')}</th>
              </tr>
            </thead>
            <tbody>
              {['/demo/admin/index.html', '/demo/admin/index.html', '/demo/admin/index.html'].map((page, idx) => <tr key={idx}>
                  <td>{page}</td>
                  <td>{getText('DashboardContentComponent.js_5_Myw2OD')}</td>
                  <td>{getText('DashboardContentComponent.js_3_JDEw')}</td>
                  <td className={styles.increaseText}>{getText('DashboardContentComponent.js_4_KzIwJQ')}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default DashboardContentComponent;