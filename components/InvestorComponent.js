import React, { useState } from 'react';
import styles from '../public/styles/InvestorComponent.module.css';

const CollapsibleSection = ({ title, content, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2 
        className={styles.collapsibleTitle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </h2>
      {isOpen && (
        <div className={styles.collapsibleContent}>
          {content}
          {children}
        </div>
      )}
    </div>
  );
};

const InvestorComponent = () => {
  return (
    <div className={styles.investorContainer}>
      <h1 className={styles.title}>Investment Opportunities with Subjective Technologies</h1>
      
      <div className={styles.imageContainer}>
        <img src="/images/brainboost_marketing_subjective_thermo_currency.jpg" alt="Investment Pitch" className={styles.pitchImage} />
      </div>
      <div className={styles.roundImageContainer}>
        <a href="https://github.com/Subjective-Technologies">
          <img src="/images/subjective_technologies_logo_github.png" alt="Investment Pitch" className={styles.pitchImage} />
        </a>
      </div>

      <div className={styles.collapsibleGrid}>
        <CollapsibleSection 
          title="Executive Summary"
          content="Brief overview of the company, mission statement, and key financial needs."
        />
        <CollapsibleSection 
          title="Company Description"
          content="Detailed description of the business, its solutions, and unique qualities."
        />
        <CollapsibleSection 
          title="Market Analysis"
          content={
            <React.Fragment>
              <p>
                Despite significant advancements in technology over the past few decades, legacy Third-Person technologies continue to present numerous challenges that hinder productivity, efficiency, and overall quality of life. Here, we outline the key problems associated with these technologies, emphasizing the limitations that our Subjective Technologies aim to overcome.
              </p>
              <p><b>Excessive Reliance on User Input:</b> Third-Person technologies require continuous user input, from typing and clicking to navigating complex menus and interfaces...</p>
              {/* Add all the remaining detailed issues as in the previous text you shared */}
            </React.Fragment>
          }
        />
        <CollapsibleSection 
          title="Organizational Structure and Management"
          content="Overview of company structure, key roles, and management qualifications."
        />
        <CollapsibleSection 
          title="Products or Services"
          content="Detailed information about the products or services offered, production process, and R&D."
        />
        <CollapsibleSection 
          title="Marketing and Sales Strategy"
          content="Strategies for market penetration, customer acquisition, and sales tactics."
        />
        <CollapsibleSection 
          title="Funding Requirements"
          content="Specific financial requirements, planned use of funds, and investment opportunities."
        />
        <CollapsibleSection 
          title="Financial Projections"
          content="Projected financial statements, break-even analysis, and profitability forecasts."
        />
        <CollapsibleSection 
          title="Appendix"
          content="Additional supporting documents like resumes, patents, and legal documents."
        />
      </div>

      <section className={styles.patentSection}>
        {/* Patent information could also be made collapsible if required */}
      </section>

      <div className={styles.downloadContainer}>
        <a href="/path/to/business_plan.pdf" className={styles.downloadButton} download>
          Download Business Plan PDF
        </a>
      </div>
    </div>
  );
};

export default InvestorComponent;
