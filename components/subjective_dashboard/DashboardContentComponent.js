import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title } from 'chart.js';
import styles from '../../public/styles/DashboardContentComponent.module.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register necessary components for ChartJS
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title, ChartDataLabels);

const DashboardContentComponent = () => {
  // Colors array (same for pie and bar charts)
  const colors = [
    '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#C9CBCF', '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#C9CBCF'
  ];

  // Data for Pie Chart
  const pieData = {
    labels: [
      'Python', 'Java', 'C', 'C++', 'PHP', 'HTML', 'JavaScript', 'Ruby', 'Swift', 'Go', 'Kotlin', 'R', 'TypeScript', 'SQL'
    ],
    datasets: [
      {
        data: [15, 12, 10, 8, 7, 6, 10, 5, 4, 3, 3, 5, 7, 5],
        backgroundColor: colors, // Use the shared colors array
      }
    ]
  };

  // Data for Bar Chart (apply same colors)
  const barData = {
    labels: [
      'Python', 'Java', 'C', 'C++', 'PHP', 'HTML', 'JavaScript', 'Ruby', 'Swift', 'Go', 'Kotlin', 'R', 'TypeScript', 'SQL'
    ],
    datasets: [
      {
        label: 'Technology Usage',
        data: [15, 12, 10, 8, 7, 6, 10, 5, 4, 3, 3, 5, 7, 5],
        backgroundColor: colors.map(color => color + '80'), // Apply transparent version of colors for the bar chart
        borderColor: colors, // Use solid colors for borders
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Technology Usage Bar Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at 0
      },
    },
  };

  // Options for Pie Chart to place labels inside slices
  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend for the pie chart
      },
      tooltip: {
        enabled: false // Disable tooltip to avoid overlap with data labels
      },
      datalabels: {
        color: '#000', // Set labels to black
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex]; // Display labels inside slices
        },
        font: {
          weight: 'bold',
          size: 12,
        },
      },
    },
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <a href="/"><h2>Home</h2></a>
        <ul className={styles.sidebarMenu}>
          <li>Dashboard</li>
          <li>Profile</li>
          <li><a href="/dashboard_my_body">My Body</a></li>
          <li>Injections</li>          
          <li>Stamina</li>
        </ul>
        <footer className={styles.sidebarFooter}>Sidebar Footer</footer>
      </aside>

      {/* Main Dashboard Content */}
      <div className={styles.mainContent}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>

        <div className={styles.widgetsContainer}>
          <div className={styles.widget}>
            <h3>Overall Work Experience</h3>
            <div className={styles.pieChartWrapper}>
              <Pie data={pieData} options={pieChartOptions} />
            </div>
          </div>

          {/* Technology Frameworks Bar Chart */}
          <div className={styles.technologyFrameworks}>
            <h3>Technology Frameworks</h3>
            <div className={styles.barChartWrapper}>
              <Bar data={barData} options={barChartOptions} /> {/* Bar Chart */}
            </div>
          </div>
        </div>

        {/* Other UsersComputational Affinity */}
        <div className={styles.widget}>
          <h3>Peers Sorted by Computational Affinity</h3>
          <ul className={styles.teamMembersList}>
            {['Mezue', 'Mezue', 'Mezue', 'Mezue', 'Mezue', 'Mezue'].map((member, idx) => (
              <li key={idx} className={styles.teamMemberItem}>
                <span><img src="/images/icons/profile_yo.-min.jpg" alt="Profile"/></span>
                <span>{member}</span>
                <button className={styles.sendMessageButton}>Send Message</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Page Visits Section */}
        <div className={styles.pageVisitsSection}>
          <h3>Page Visits</h3>
          <table className={styles.pageVisitsTable}>
            <thead>
              <tr>
                <th>Page Name</th>
                <th>Views</th>
                <th>Value</th>
                <th>Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              {['/demo/admin/index.html', '/demo/admin/index.html', '/demo/admin/index.html'].map((page, idx) => (
                <tr key={idx}>
                  <td>{page}</td>
                  <td>3,689</td>
                  <td>$10</td>
                  <td className={styles.increaseText}>+20%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardContentComponent;
