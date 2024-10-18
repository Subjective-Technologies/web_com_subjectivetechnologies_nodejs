import React, { useState, useEffect, useRef } from 'react';
import { PopupButton } from 'react-calendly';
import styles from '../public/styles/StaticLanding.module.css';

const StaticLandingComponent = () => {
  const [theme, setTheme] = useState('dark'); // Default theme is dark
  const [showHeroContent, setShowHeroContent] = useState(true); // Control hero content visibility
  const [rootElem, setRootElem] = useState(null);

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
    // Initialize rootElem
    if (typeof document !== 'undefined') {
      setRootElem(document.body);
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const animateCanvas = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Drawing logic here
      requestAnimationFrame(animateCanvas);
    };
    animateCanvas();

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
    const animateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animateParticles);
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
    animateParticles();

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
        <h2 ref={addToAnimatedElements} className={styles.sectionTitle}>
          How it works
        </h2>
        <h3 ref={addToAnimatedElements} className={styles.subheading}>
          Subjective Artificial Intelligence for Candidate Selection
        </h3>
        <div className={styles.featuresGrid}>
          {[
            {
              icon: '/images/feature_monitor.png',
              title:
                'Monitor Your Work Activity Using Computational Affinity Antenna',
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

      {/* Download Section */}
      <section className={styles.downloadSection} id="download">
        <h2 ref={addToAnimatedElements} className={styles.sectionTitle}>
          Download Client
        </h2>
        <div className={styles.downloadContent}>
          <div id="three_twins" align="center">
            <img src="/images/three_twins_laptops.png" alt="WorkTwins Client" />
          </div>
          <h2>Download WorkTwins Client Application</h2>
          <p>Select your operating system below to download the WorkTwins client:</p>
          <div className={styles.downloadOptions}>
            <a
              href="/downloads/worktwins_windows.exe"
              className={`${styles.downloadLink} ${styles.windows}`}
            >
              <img src="/images/windows_icon.svg" alt="Windows Icon" />
              Download for Windows
            </a>
            <a
              href="/downloads/worktwins_macos.dmg"
              className={`${styles.downloadLink} ${styles.macos}`}
            >
              <img src="/images/macos_icon.svg" alt="MacOS Icon" />
              Download for MacOS
            </a>
            <a
              href="/downloads/worktwins_linux.deb"
              className={`${styles.downloadLink} ${styles.linux}`}
            >
              <img src="/images/linux_icon.svg" alt="Linux Icon" />
              Download for Linux
            </a>
          </div>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.contactContainer}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <div className={styles.gridContainer}>
            <div>
              <h2 className={styles.subheading}>General Contact Information</h2>
              <p className={styles.text}>Email: info@worktwins.com</p>
              <p className={styles.text}>Phone: +1 (786) 796-5039</p>
              <div className={styles.pressContact}>
                <img
                  src="/images/icons/profile_yo.-min.jpg"
                  alt="Tommy Fox"
                  className={styles.pressImage}
                />
                <div className={styles.pressDetails}>
                  <h2 className={styles.subheading}>Press Contact</h2>
                  <p className={styles.text}>Name: Tommy Fox</p>
                  <p className={styles.text}>
                    Email: tommyfox@subjectivetechnologies.com
                  </p>
                  <p className={styles.text}>
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/17867965039"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappLink}
                    >
                      +1 (786) 796-5039
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.videoPlaceholder}>
              <video
                className={styles.video}
                src="/video/golden_twins.mp4"
                autoPlay
                muted
                loop
              />
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.subheading}>Get in Touch</h2>

              {/* Compact Calendly Integration */}
              <h2 className={styles.subheading}>
                Schedule a Meeting with Tommy Fox
              </h2>
              <div className={styles.calendlyButtonContainer}>
                {rootElem && (
                  <PopupButton
                    url="https://calendly.com/tommy-fox/30min"
                    rootElement={rootElem}
                    text="Schedule a 30-Minute Meeting"
                    className={styles.calendlyButton}
                  />
                )}
              </div>
            </div>

            <div className={styles.bookImageContainer}>
              <a
                href="https://www.amazon.com/dp/B0CKL4MVMC/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1696620400&sr=8-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/brainboost_marketing_images_thefirstzeroinputtechnology_book_website.png"
                  alt="Book Image"
                  className={styles.bookImage}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaticLandingComponent;
