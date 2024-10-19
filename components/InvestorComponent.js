import React from 'react';
import { InlineWidget } from 'react-calendly';
import styles from '../public/styles/InvestorComponent.module.css';

const InvestorComponent = () => {
  return (
    <div className={styles.investorContainer}>
      <h1 className={styles.title}>Investors Page for WorkTwins.com</h1>
      <h2 className={styles.subtitle}>Welcome to the Future of Hiring and Workforce Collaboration</h2>

      <p className={styles.text}>
        At WorkTwins.com, we are revolutionizing how companies hire and collaborate by using empirical, real-world data to match developers—and eventually professionals from all fields—based on actual work performance. Powered by our patented 0-Input Subjective Technology, we provide a platform where developers hire other developers, using WorkFootPrints to identify the best technical fit. With our technology, we eliminate inefficiencies in hiring, empower real-time collaboration, and create a data-driven approach that is poised to disrupt multiple industries.
      </p>

      <h2 className={styles.subheading}>Our Vision</h2>
      <p className={styles.text}>
        We believe the hiring process should be data-driven, efficient, and precise. Our goal is to eliminate the guesswork that exists in traditional recruitment by offering an empirical, real-time solution for workforce optimization. Starting with developers and expanding to all professions, WorkTwins is designed to empower professionals with data-driven collaboration and hiring, fostering collective work intelligence from a Subjective Perspective, with 0-Input.
      </p>

      <h2 className={styles.subheading}>Key Features of WorkTwins.com</h2>
      <ol className={styles.list}>
        <li>
          <h3 className={styles.featureTitle}>Developer-to-Developer Hiring</h3>
          <p className={styles.text}>
            Unlike traditional platforms, WorkTwins enables developers to hire developers based on their actual performance and coding activity, as captured through our WorkFootPrint system. This ensures that companies hire the right technical talent the first time, reducing the need for extensive interviews and coding tests.
          </p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>WorkFootPrint Technology</h3>
          <p className={styles.text}>
            WorkFootPrints are empirical records of a developer’s activities, performance, and real-world expertise. They eliminate the reliance on subjective resumes, interviews, or technical tests, offering a precise match between job requirements and the developer's demonstrated abilities.
          </p><br/>
          <div className={styles.footprintVignetteDiffuse}>
            <img src="/images/worktwins_vignette_diffuse.png"/>
          </div>
        </li>
        <li>
          <h3 className={styles.featureTitle}>Real-Time Collaboration & Collective Intelligence</h3>
          <p className={styles.text}>
            Developers can collaborate with other professionals facing the same technical challenges in real time, creating a network of collective intelligence. This fosters fast problem-solving and allows developers to never work alone.
          </p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>Built on Patented 0-Input Technology</h3>
          <p className={styles.text}>
            Our platform is powered by 0-Input Subjective Technology, a broader framework that enables seamless, intuitive interaction between professionals and technology, requiring minimal user input.
          </p>
        </li>
      </ol>

    {/* Subjective 0-Input Technology Section */}
    <section
            className={styles.subjectiveZeroInputSection}
            id="subjective-0-input-technology"
          >
            <h2 className={styles.sectionTitle}>
              What is Subjective 0-Input Technology?
            </h2>
            <div className={styles.subjectiveZeroInputContent}>
              <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                  <video
                    className={styles.subjectiveVideo}
                    src="/video/brainboost_marketing_media_video_subjective.mp4"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                </div><br/>
              </div>
            </div>
          </section>

            {/* PDF Viewer Section */}
            <h2 className={styles.subheading}>Download Our Documents</h2>
      <div className={styles.pdfGrid}>
        <div className={styles.pdfItem}>
          <iframe
            src="/downloads/Business Plan for WorkTwins.com.pdf"
            className={styles.pdfViewer}
            title="Business Plan"
          ></iframe>
          <a href="/downloads/Business Plan for WorkTwins.com.pdf" className={styles.downloadLink} target="_blank" rel="noopener noreferrer">
            Download Business Plan
          </a>
        </div>
        <div className={styles.pdfItem}>
          <iframe
            src="/downloads/Subjective Technologies_APA_7_en-202401142351.pdf"
            className={styles.pdfViewer}
            title="Subjective Technologies APA 7"
          ></iframe>
          <a href="/downloads/Subjective Technologies_APA_7_en-202401142351.pdf" className={styles.downloadLink} target="_blank" rel="noopener noreferrer">
            Download Subjective Technologies APA
          </a>
        </div>
        <div className={styles.pdfItem}>
          <iframe
            src="/downloads/subjective_technologies_an_exoskeleton_for_the_mind_print.pdf"
            className={styles.pdfViewer}
            title="Subjective Technologies Exoskeleton"
          ></iframe>
          <a href="/downloads/subjective_technologies_an_exoskeleton_for_the_mind_print.pdf" className={styles.downloadLink} target="_blank" rel="noopener noreferrer">
            Download Exoskeleton for the Mind
          </a>
        </div>
        <div className={styles.pdfItem}>
          <iframe
            src="/downloads/US20220358283A1.pdf"
            className={styles.pdfViewer}
            title="Patent US20220358283A1"
          ></iframe>
          <a href="/downloads/US20220358283A1.pdf" className={styles.downloadLink} target="_blank" rel="noopener noreferrer">
            Download Patent US20220358283A1
          </a>
        </div>
      </div>


              {/* Subjective 0-Input Technology Section */}
    <section
            className={styles.subjectiveZeroInputSection}
            id="subjective-0-input-technology"
          >
            <h2 className={styles.sectionTitle}>
            Get our book on Amazon 
            </h2>
            <div className={styles.subjectiveZeroInputContent}>
              <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                <a href="http://localhost:3000/images/brainboost_marketing_images_thefirstzeroinputtechnology_book_website.png"><img src="/images/brainboost_marketing_images_thefirstzeroinputtechnology_book_website.png"/></a>

                </div><br/>
              </div>
            </div>
          </section>


      <h2 className={styles.subheading}>Market Opportunity</h2>
      <p className={styles.text}>
        The global market for software developers is expected to grow from 26.4 million developers in 2023 to 45 million by 2030. The staff augmentation industry is on a similar growth trajectory, with a market size forecasted to grow from $132 billion in 2023 to $205 billion by 2030. Yet, hiring inefficiencies persist—long recruitment cycles, skills mismatches, and high costs are still major barriers for companies. WorkTwins.com addresses these challenges with data-driven, automated matching that eliminates the friction in hiring and onboarding.
      </p>

      <h2 className={styles.subheading}>Product Ecosystem: Beyond Developers</h2>
      <p className={styles.text}>
        WorkTwins.com is the first of many products in our broader Subjective Technology ecosystem. As AI and computer vision techniques evolve, the same WorkFootPrint model will be applied to other professions, from design and project management to data analysis and customer support. This positions WorkTwins as a scalable platform that can transform workforce optimization across industries.
      </p>

      <h3 className={styles.subsubheading}>Future Products:</h3>
      <ul className={styles.productList}>
        <li>
          <p className={styles.text}>Subjective ForMate – Automated form-filling system using zero input.</p>
        </li>
        <li>
          <p className={styles.text}>Subjective Domotics – Smart home automation that learns user behavior.</p>
        </li>
        <li>
          <p className={styles.text}>Subjective Semantizer – A post-education tool creating dynamic semantic models for knowledge enhancement.</p>
        </li>
        <li>
          <p className={styles.text}>Subjective JobFinder – Extending WorkTwins to match all professionals based on empirical data.</p>
        </li>
        <li>
          <p className={styles.text}>Subjective Thermo-Currency – A novel economic model using real-time energy accounting.</p>
        </li>
        <li>
          <p className={styles.text}>Subjective Advertising – A solution-centric advertising platform tailored to real-time user needs.</p>
        </li>
        <li>
          <p className={styles.text}>Subjective Adapter – A bridge for legacy systems, enhancing user experiences without complete system overhauls.</p>
        </li>
      </ul>

      <h2 className={styles.subheading}>Why Invest in WorkTwins.com?</h2>
      <ol className={styles.list}>
        <li>
          <h3 className={styles.featureTitle}>Huge Market Potential</h3>
          <p className={styles.text}>
            With a growing global workforce that is increasingly specialized, WorkTwins.com is positioned to address the inefficiencies in talent acquisition and real-time collaboration. Starting with the developer market, the platform is set to scale across industries, from IT to design, customer service, and beyond.
          </p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>Game-Changing Technology</h3>
          <p className={styles.text}>
            Our patented 0-Input Technology and Computational Affinity Antenna enable us to capture real-world performance data in a way that no other platform can. This ensures that companies hire based on empirical evidence, removing biases and inefficiencies from the hiring process.
          </p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>Scalable and Expandable</h3>
          <p className={styles.text}>
            WorkTwins.com is just the beginning. Our Subjective Technology framework provides a scalable foundation that can evolve into new industries and products, creating a wide-ranging impact across the global workforce.
          </p>
        </li>
        <li>
          <h3 className={styles.featureTitle}>Reduced Hiring Costs and Time</h3>
          <p className={styles.text}>
            By automating the technical vetting process and reducing the need for interviews, WorkTwins drastically shortens the time-to-hire and lowers recruitment costs. Companies can onboard the right talent quickly and efficiently.
          </p>
        </li>
      </ol>

      <h2 className={styles.subheading}>Financial Projections</h2>
      <table className={styles.financialTable}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Revenue</th>
            <th>Expenses</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024</td>
            <td>$2.5M</td>
            <td>$1.8M</td>
            <td>$700K</td>
          </tr>
          <tr>
            <td>2025</td>
            <td>$8M</td>
            <td>$4.5M</td>
            <td>$3.5M</td>
          </tr>
          <tr>
            <td>2026</td>
            <td>$15M</td>
            <td>$8M</td>
            <td>$7M</td>
          </tr>
          <tr>
            <td>2027</td>
            <td>$30M</td>
            <td>$14M</td>
            <td>$16M</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subheading}>Funding Requirements</h2>
      <p className={styles.text}>
        We are seeking $5 million in seed funding to accelerate platform development, enhance AI-driven matching algorithms, and expand marketing and sales operations. The funding will be used as follows:
      </p>
      <ul className={styles.list}>
        <li>
          <p className={styles.text}>30% for product development (enhancing WorkFootPrint analytics and real-time collaboration tools).</p>
        </li>
        <li>
          <p className={styles.text}>40% for sales and marketing (expanding the sales team, partnerships, and outreach efforts).</p>
        </li>
        <li>
          <p className={styles.text}>20% for customer support and operations.</p>
        </li>
        <li>
          <p className={styles.text}>10% for general corporate purposes.</p>
        </li>
      </ul>

      <h2 className={styles.subheading}>Meet Our Team</h2>
      <div className={styles.teamSection}>

        <div className={styles.teamMember}>
          <img src="/images/icons/profile_yo.-min.jpg" alt="Tommy Fox" className={styles.teamPhoto} />
          <div className={styles.memberInfo}>
            <h3>Tommy Fox – Company Founder</h3>
            <p className={styles.text}>
              Tommy leads the development of WorkTwins, bringing years of experience in software architecture and developer tools. He ensures the seamless integration of advanced AI and machine learning algorithms into the platform.
            </p>
          </div>
        </div>
      </div>

      {/* Calendly Widget Integration */}
      <h2 className={styles.subheading}>Schedule a Meeting with Tommy Fox</h2>
      <div className={styles.calendlyContainer}>
        <InlineWidget
          url="https://calendly.com/tommy-fox/30min"
          styles={{ height: '700px' }}
        />
      </div>

      <h2 className={styles.subheading}>Join Us in Shaping the Future of Work</h2>
      <p className={styles.text}>
        At WorkTwins.com, we are redefining how companies find, hire, and collaborate with talent. By investing in WorkTwins, you are backing a platform that will revolutionize the hiring process, improve workforce efficiency, and expand into new industries using cutting-edge technology.
      </p>

      <h2 className={styles.subheading}>Contact Us</h2>
      <p className={styles.text}>
        For more information or to discuss investment opportunities, please reach out to our Investor Relations Team at <a href="mailto:investors@worktwins.com" className={styles.link}>investors@worktwins.com</a>.
      </p>



    </div>
  );
};

export default InvestorComponent;
