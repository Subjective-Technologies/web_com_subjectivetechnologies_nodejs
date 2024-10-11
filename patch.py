import React, { useState, useEffect, useRef } from 'react';
import styles from '../public/styles/StaticLanding.module.css';

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

    // Canvas ref for neural network background
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            // Drawing logic here
            requestAnimationFrame(animate);
        };
        animate();
        // Smooth scroll for anchor links
        const handleAnchorClick = (e) => {
            if (e.target.hash) {
                e.preventDefault();
                const targetElement = document.querySelector(e.target.hash);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
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

    // Neural Network Background Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Ensure canvas is available

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const mouse = { x: 0, y: 0 };

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };
        window.addEventListener('resize', handleResize);

        // Handle mouse move
        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Particle class
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.6 - 0.3;
                this.speedY = Math.random() * 0.6 - 0.3;
            }

            update() {
                this.x += this.speedX + (mouse.x - this.x) * 0.0005;
                this.y += this.speedY + (mouse.y - this.y) * 0.0005;

                // Wrap particles around edges
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                context.fillStyle = 'rgba(255, 215, 0, 0.7)'; // Golden color
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.closePath();
                context.fill();

                // Glow effect
                context.shadowColor = 'rgba(255, 215, 0, 0.7)';
                context.shadowBlur = 15;
            }
        }

        // Initialize particles
        const initParticles = () => {
            particles = [];
            const maxParticles = 100; // Adjust this number based on performance
            const numberOfParticles = Math.min(
                Math.floor((canvas.width * canvas.height) / 16000),
                maxParticles
            );
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        };

        // Animate particles
        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        // Connect particles with lines to simulate neural network
        const connectParticles = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 70) {
                        opacityValue = 1 - distance / 70;

                        // Create gradient for electricity effect
                        const gradient = context.createLinearGradient(
                            particles[a].x,
                            particles[a].y,
                            particles[b].x,
                            particles[b].y
                        );
                        gradient.addColorStop(0, `rgba(255, 223, 0, ${opacityValue})`);
                        gradient.addColorStop(1, `rgba(255, 140, 0, ${opacityValue})`);

                        context.strokeStyle = gradient;
                        context.lineWidth = 1.5;
                        context.beginPath();
                        context.moveTo(particles[a].x, particles[a].y);
                        context.lineTo(particles[b].x, particles[b].y);
                        context.stroke();
                    }
                }
            }
        };

        // Start animation
        initParticles();
        animate();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Empty dependency array to run once on mount

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
            {/* Neural Network Canvas */}
            <canvas ref={canvasRef} className={styles.neuralCanvas}></canvas>

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

            {/* Computational Affinity Antenna Section */}
            <section
                className={styles.computationalAffinitySection}
                id="computational-affinity-antenna"
            >
                <h2 className={styles.sectionTitle}>Computational Affinity Antenna</h2>
                <div className={styles.computationalAffinityContent}>
                    <div className={styles.imageContainer}>
                        <img
                            src="/images/bodyparts/subjective_marketing_images_virtual_body_part_antenna.webp"
                            alt="Computational Affinity Antenna"
                            className={styles.computationalAffinityImage}
                        />
                        {/* Optional: Add a decorative second image */}
                        <img
                            src="/images/office_antena.png"
                            alt="Office Antenna Background"
                            className={styles.decorativeImage}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <h2 className={styles.neonTextWhite}>Computational Affinity Antenna</h2>
                        <p>
                            Similar to how a GPS identifies the shortest route from point A to point B without requiring user input, and quantifies the distance in miles or kilometers, we calculate computational affinity between contexts. This encompasses both your own past and present contexts, as well as those of other users. The applications of this technology are vast, including detecting stronger affinities with specific individuals in particular aspects of their lives, tasks, or locations. With this, you can identify your WorkTwins or even the ideal life partner, significantly reducing the risk of divorce. This third-person web page, with its legacy user interface, applies an injection to your VirtualBody that extends your physical body, growing the Computational Affinity Antenna on your forehead. WorkTwins.com showcases our innovative Subjective 0-Input technology. As a reminder, one object (A) is considered subjective to another object (B) when object B requires no input from A to function, as it has already learned A's input and sends those messages to itself. Only parts of your body do not require explicit input from yourself.
                        </p>
                    </div>
                </div>
                {/* Background Overlay */}
                <div className={styles.backgroundOverlay}></div>
            </section>
                        {/* Features Section */}
            <section className={styles.computationalAffinityAntenna} id="features">
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
                                'Technical interviews become obsolete. The platform empirically guarantees that you will always find the perfect employee for any role, even for the most specific tasks. By leveraging real-time data and computational affinity, we ensure seamless matches between employers and candidates, eliminating the guesswork from hiring. Developers, hire Developers.',
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

            {/* How It Works Section */}
            <section className={styles.howItWorksSection} id="how-it-works">
                <h2 ref={addToAnimatedElements} className={styles.neonTextWhite}>
                    How It Works
                </h2>
                <div className={styles.steps}>
                    {[
                        {
                            icon: '/images/step1.png',
                            title: 'Step 1: Download the Client',
                            description:
                                'Get started by downloading our desktop client compatible with your operating system.',
                        },
                        {
                            icon: '/images/step2.png',
                            title: 'Step 2: Analyze Your Projects',
                            description:
                                'Allow the client to analyze your project files and monitor your work activity.',
                        },
                        {
                            icon: '/images/step3.png',
                            title: 'Step 3: Connect and Collaborate',
                            description:
                                'Find your WorkTwins and collaborate in real-time to solve challenges together.',
                        },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className={styles.stepItem}
                            ref={addToAnimatedElements}
                        >
                            <img
                                src={step.icon}
                                alt={step.title}
                                width="250"
                                height="250"
                            />
                            <h3 className={styles.neonTextWhite}>{step.title}</h3>
                            <p>{step.description}</p>
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
}

export default StaticLandingComponent;