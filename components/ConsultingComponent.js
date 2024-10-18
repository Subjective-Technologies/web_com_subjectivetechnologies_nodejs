import React from 'react';
import styles from '../public/styles/ConsultingComponent.module.css';

const ConsultingComponent = () => {
    console.log('Rendering ConsultingComponent');
    console.log('Returning from ConsultingComponent');

    return (
        <div className={styles.consultingContainer}>
            <h1 className={styles.title}>Consulting Services</h1>
            <p className={styles.description}>
                Welcome to BrainBoost Consulting, your trusted partner in driving technological excellence and innovation. As an Irish company expanding our services into Latin America, we bring a unique blend of global expertise and local talent to help your business thrive in today’s fast-paced digital world.
            </p>
            <div className={styles.servicesList}>
                <h2 className={styles.subheading}>Why Choose BrainBoost Consulting?</h2>
                <div align="center">
                    <img src="/images/cyber_tango_1.webp" alt="Cyber Tango Illustration" style={{ width: '80%' }} />
                </div>
                <ul>
                    <li>Strategic Location in LATAM: Our presence in Argentina offers a convenient time zone for collaborating with US companies, ensuring seamless communication and real-time project management. Argentina is rapidly emerging as the fourth pole of Artificial Intelligence globally, making it a hub of innovation and technological advancement.</li>
                    <li>Top-Notch Talent Pool: We boast a team of highly qualified professionals with extensive backgrounds in computer science, mathematics, and software engineering. Our experts are well-versed in cutting-edge technologies and possess the skills needed to deliver superior solutions tailored to your needs.</li>
                    <li>Flexible Engagement Models: We offer both contract and permanent engagement options, allowing you to choose the model that best fits your business requirements. Our Irish limited company structure enables smooth and efficient contracting processes.</li>
                </ul>
                <br />

            </div>
            <div className={styles.servicesList}>
                <h2 className={styles.subheading}>Our Services</h2>
                <ul>
                    <li>Custom Software Development: Tailored solutions to meet your specific business needs, leveraging the latest in Java, Python, Ruby, JavaScript, and more.</li>
                    <li>AI and Machine Learning: Harness the power of AI to drive business intelligence, automate processes, and enhance decision-making.</li>
                    <li>Blockchain and Cryptocurrency Solutions: Secure and scalable solutions for trading, compliance, and financial transactions.</li>
                    <li>IT Support and Maintenance: Comprehensive support to ensure your systems are running smoothly and efficiently.</li>
                    <li>Business Analysis and Consulting: Expert advice to optimize your business processes and technology stack.</li>
                    <li>Computer Vision: Advanced solutions for image processing, object detection, and recognition to enhance your applications.</li>
                    <li>Automation and Testing Automation: Streamline your processes and improve efficiency with our automation and testing automation services.</li>
                    <li>Branding and Product Design: Innovative design and branding services to help your product stand out in the market.</li>
                    <li>Product Development and Prototyping: From concept to prototype, we assist in every step of your product development journey.</li>
                    <li>Marketing Automation: Implementing tools and strategies to automate your marketing efforts and enhance customer engagement.</li>
                    <li>Social Media Marketing Campaigns: Creating and managing impactful social media campaigns to increase your brand presence.</li>
                    <li>Sales B2B: Providing strategies and tools to optimize your business-to-business sales processes.</li>
                    <li>Pharmaceutical Marketing: Specialized marketing strategies for the pharmaceutical sector, including compliance, product development, counter display units design, and pharmaceutical packaging design.</li>
                    <li>SEO Services: Enhancing your online presence and driving organic traffic to your website through targeted search engine optimization strategies.</li>
                </ul>
            </div>
            <div className={styles.servicesList}>
                <h2 className={styles.subheading}>Sectors We Serve</h2>
                <ul>
                    <li>Financial Services: Expertise in payments, compliance, trading, and cryptocurrencies.</li>
                    <li>E-commerce and Retail: Development of scalable e-commerce platforms, SEO strategies, and marketing automation tools.</li>
                    <li>Healthcare and Pharmaceuticals: IT solutions for healthcare systems, including compliance and data security, pharmaceutical marketing, counter display units design, pharmaceutical packaging design, and product development.</li>
                    <li>Technology and Startups: Support for tech startups, including software architecture, development, and market strategy.</li>
                    <li>Manufacturing and Supply Chain: Automation tools for manufacturing processes and supply chain management.</li>
                    <li>Marketing and Advertising: Comprehensive marketing automation, social media marketing, and B2B sales strategies.</li>
                </ul>
            </div>
            <div className={styles.servicesList}>
                <h2 className={styles.subheading}>Innovation and Recognition</h2>
                <ul>
                    <li>Patents and Trademarks: Our innovative solutions are backed by patents and trademarks, ensuring your business stays ahead of the competition.</li>
                    <li>Award-Winning Projects: Our team has received numerous accolades, including Bravo awards for innovation and collaboration at PayPal.</li>
                    <li>Research and Development: Commitment to continuous learning and improvement through research in programming languages, software development methodologies, and AI technologies.</li>
                </ul>
            </div>
            <div className={styles.contactInfo}>
                <h2 className={styles.subheading}>Partner with Us</h2>
                <p className={styles.text}>
                    Join hands with BrainBoost Consulting and leverage the power of a highly skilled team located in a prime geographical position for working with North American clients. Let us help you navigate the complexities of the digital world and achieve your business goals through innovation, expertise, and dedication.
                </p>
                <p className={styles.text}>
                    Contact us today to learn more about how we can assist you in driving your business forward. Together, we can achieve exceptional results.
                </p>
                <p className={styles.text}>
                    If you're interested in our consulting services, please contact us at <a href="/contact">Contact</a>.
                </p>
            </div>
        </div>
    );
};

export default ConsultingComponent;
