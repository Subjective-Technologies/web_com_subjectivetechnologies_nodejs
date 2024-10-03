// components/StaticLandingComponent.js

import React, { useState, useEffect, useRef } from 'react';
import styles from './StaticLanding.module.css';

const StaticLandingComponent = () => {
    const [theme, setTheme] = useState('dark'); // Default theme is dark
    const [showHeroContent, setShowHeroContent] = useState(true); // Control hero content visibility

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    // Refs for scroll animations
    const animatedElements = useRef([]);
    animatedElements.current = [];

    const addToAnimatedElements = (el) => {
        if (el && !animatedElements.current.includes(el)) {
            animatedElements.current.push(el);
        }
    };

    // Ref to keep track of the last scroll position
    const lastScrollTopRef = useRef(0);

    useEffect(() => {
        // Smooth scroll for anchor links
        const handleAnchorClick = (e) => {
            if (e.target.hash) {
                e.preventDefault();
                document.querySelector(e.target.hash).scrollIntoView({
                    behavior: 'smooth',
                });
            }
        };
        document.addEventListener('click', handleAnchorClick);

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.inView);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.current.forEach((el) => {
            observer.observe(el);
        });

        // Handle hero content visibility based on scroll direction
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTopRef.current) {
                // Scrolling down
                setShowHeroContent(false);
            } else if (scrollTop < lastScrollTopRef.current) {
                // Scrolling up
                setShowHeroContent(true);
            }
            lastScrollTopRef.current = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            animatedElements.current.forEach((el) => {
                observer.unobserve(el);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle "Get Started" button click
    const handleGetStartedClick = () => {
        const nextSection = document.getElementById('features');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className={`${styles.landingPage} ${
                theme === 'dark' ? styles.darkMode : styles.lightMode
            }`}
        >
            {/* Hero Section */}
            <section className={styles.heroSection} id="hero">
                <div
                    className={`${styles.heroContent} ${
                        !showHeroContent ? styles.hidden : ''
                    }`}
                >
                    <h1 className={styles.neonTextWhite}>Find your WorkTwins</h1>
                    <p className={styles.neonTextWhite}>
                        AI Precision For Candidate Selection based on empirical data.
                    </p>
                    <button
                        className={`${styles.ctaButton} ${styles.neonButton}`}
                        onClick={handleGetStartedClick}
                    >
                        Get Started
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.featuresSection} id="features">
                <h2 ref={addToAnimatedElements} className={styles.neonTextWhite}>
                    How it works
                </h2>
                <div className={styles.featuresGrid}>
                    {[
                        {
                            icon: '/images/feature_monitor.png',
                            title: 'Monitor Your Work Activity',
                            description:
                                'Utilize our desktop client, available for Windows, Mac, and Linux, to analyze your project files locally. The client automatically detects programming languages, libraries, frameworks, and APIs used within your projects. It also monitors your screen activity in real time using our KnowledgeHooks technology, providing detailed insights of your work experience.',
                        },
                        {
                            icon: '/images/feature_footprint.png',
                            title: 'Generate Your Work Experience Footprint',
                            description:
                                'Your work experience Footprint is a string generated solely for comparison and context matching. Based on this, users will be sorted according to their computational affinity or distance, helping to identify similarities and differences in technical skills and workflows.',
                        },
                        {
                            icon: '/images/feature_collaboration.png',
                            title: 'Real-Time Collaboration',
                            description:
                                'Imagine encountering a Windows error on your screen and instantly collaborating with other users facing the same error in real time. With WorkTwins.com, you never work alone—this is collective intelligence with a shared purpose. By connecting users experiencing similar challenges, the platform fosters a collaborative environment where solutions are found together, leveraging the power of a united workforce.',
                        },
                        {
                            icon: '/images/feature_whiteboard.png',
                            title: 'Impact',
                            description:
                                'Technical interviews become obsolete. The platform empirically guarantees that you will always find the perfect employee for any role, even for the most specific tasks. By leveraging real-time data and computational affinity, we ensure seamless matches between employers and candidates, eliminating the guesswork from hiring. Developers, hire Developers. ',
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className={styles.featureItem}
                            ref={addToAnimatedElements}
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                width="250"
                                height="250"
                            />
                            <h3 className={styles.neonTextWhite}>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Testimonials Section */}
            <section className={styles.testimonialsSection} id="testimonials">
                <h2 ref={addToAnimatedElements} className={styles.neonTextWhite}>
                    What Our Customers Say
                </h2>
                <div className={styles.testimonials}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className={styles.testimonialItem}
                            ref={addToAnimatedElements}
                        >
                            <p>
                                "This AI product has transformed our business in ways we couldn't
                                imagine."
                            </p>
                            <h4 className={styles.neonTextWhite}>- Customer {index + 1}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className={styles.ctaSection}>
                <h2 ref={addToAnimatedElements} className={styles.neonTextWhite}>
                    Ready to Embrace the Future?
                </h2>
                <button className={`${styles.ctaButton} ${styles.neonButton}`}>
                    Sign Up Now
                </button>
            </section>

            {/* Theme Switcher Button */}
            <button className={styles.themeSwitcher} onClick={toggleTheme}>
                {theme === 'dark' ? '🌞' : '🌜'}
            </button>
        </div>
    );
};

export default StaticLandingComponent;
