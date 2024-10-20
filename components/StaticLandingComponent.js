import { getText } from '../utils/getText.js';
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
  const addToAnimatedElements = el => {
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
    const handleAnchorClick = e => {
      if (e.target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(e.target.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: getText("StaticLandingComponent.js_6_c21vb3")
          });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // Scroll animations
    const observerOptions = {
      threshold: 0.1
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.inView);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    animatedElements.current.forEach(el => {
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
      animatedElements.current.forEach(el => {
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
    const mouse = {
      x: 0,
      y: 0
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    // Handle mouse move
    const handleMouseMove = event => {
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
      const numberOfParticles = Math.min(Math.floor(canvas.width * canvas.height / 16000), maxParticles);
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    // Animate particles
    const animateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
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
            const gradient = context.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y);
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
      nextSection.scrollIntoView({
        behavior: getText("StaticLandingComponent.js_6_c21vb3")
      });
    }
  };
  var how_it_works = [{
    icon: getText("StaticLandingComponent.js_27_L2ltYW"),
    title: getText("StaticLandingComponent.js_63_TW9uaX"),
    description: getText("StaticLandingComponent.js_361_VXRpbG")
  }, {
    icon: getText("StaticLandingComponent.js_29_L2ltYW"),
    title: getText("StaticLandingComponent.js_39_R2VuZX"),
    description: getText("StaticLandingComponent.js_271_WW91ci")
  }, {
    icon: getText("StaticLandingComponent.js_33_L2ltYW"),
    title: getText("StaticLandingComponent.js_23_UmVhbC"),
    description: getText("StaticLandingComponent.js_410_SW1hZ2")
  }, {
    icon: getText("StaticLandingComponent.js_30_L2ltYW"),
    title: getText("StaticLandingComponent.js_6_SW1wYW"),
    description: getText("StaticLandingComponent.js_354_VGVjaG")
  }];
  return <div className={`${styles.landingPage} ${theme === 'dark' ? styles.darkMode : styles.lightMode}`}>
      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} className={styles.neuralCanvas}></canvas>

      {/* Hero Section */}
      <section className={styles.heroSection} id={getText("StaticLandingComponent.js_4_aGVybw")}>
        <div className={`${styles.heroContent} ${!showHeroContent ? styles.hidden : ''}`}>
          <h1 className={styles.neonTextWhite}>{getText('StaticLandingComponent.js_19_RmluZC')}</h1>

          <button className={`${styles.ctaButton} ${styles.neonButton}`} onClick={handleGetStartedClick}>{getText('StaticLandingComponent.js_11_R2V0IF')}</button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} id={getText("StaticLandingComponent.js_8_ZmVhdH")}>
        <h2 ref={addToAnimatedElements} className={styles.sectionTitle}>{getText('StaticLandingComponent.js_12_SG93IG')}</h2>
        <h3 ref={addToAnimatedElements} className={styles.subheading}>{getText('StaticLandingComponent.js_58_U3Viam')}</h3>
        <div className={styles.featuresGrid}>
          {how_it_works.map((feature, index) => <div key={index} className={styles.featureItem} ref={addToAnimatedElements}>
              <img src={feature.icon} alt={feature.title} width={getText("StaticLandingComponent.js_3_MjUw")} height={getText("StaticLandingComponent.js_3_MjUw")} />
              <h3 className={styles.neonTextWhite}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>)}
        </div>
      </section>

      {/* Download Section */}
      <section className={styles.downloadSection} id={getText("StaticLandingComponent.js_8_ZG93bm")}>
        <h2 ref={addToAnimatedElements} className={styles.sectionTitle}>{getText('StaticLandingComponent.js_15_RG93bm')}</h2>
        <div className={styles.downloadContent}>
          <div id={getText("StaticLandingComponent.js_11_dGhyZW")} align={getText("StaticLandingComponent.js_6_Y2VudG")}>
            <img src={getText("StaticLandingComponent.js_31_L2ltYW")} alt={getText("StaticLandingComponent.js_16_V29ya1")} />
          </div>
          <h2>{getText('StaticLandingComponent.js_37_RG93bm')}</h2>
          <p>{getText('StaticLandingComponent.js_68_U2VsZW')}</p>
          <div className={styles.downloadOptions}>
            <a href={getText("StaticLandingComponent.js_32_L2Rvd2")} className={`${styles.downloadLink} ${styles.windows}`}>
              <img src={getText("StaticLandingComponent.js_24_L2ltYW")} alt={getText("StaticLandingComponent.js_12_V2luZG")} />{getText('StaticLandingComponent.js_20_RG93bm')}</a>
            <a href={getText("StaticLandingComponent.js_30_L2Rvd2")} className={`${styles.downloadLink} ${styles.macos}`}>
              <img src={getText("StaticLandingComponent.js_22_L2ltYW")} alt={getText("StaticLandingComponent.js_10_TWFjT1")} />{getText('StaticLandingComponent.js_18_RG93bm')}</a>
            <a href={getText("StaticLandingComponent.js_30_L2Rvd2")} className={`${styles.downloadLink} ${styles.linux}`}>
              <img src={getText("StaticLandingComponent.js_22_L2ltYW")} alt={getText("StaticLandingComponent.js_10_TGludX")} />{getText('StaticLandingComponent.js_18_RG93bm')}</a>
          </div>
        </div>
      </section>

     
      {/* Contact Section */}
      <section className={styles.contactSection} id={getText("StaticLandingComponent.js_7_Y29udG")}>
        <div className={styles.contactContainer}>
          <h2 className={styles.sectionTitle}>{getText('StaticLandingComponent.js_10_Q29udG')}</h2>
          <div className={styles.gridContainer}>
            <div>
              <h2 className={styles.subheading}>{getText('StaticLandingComponent.js_27_R2VuZX')}</h2>
              <p className={styles.text}>{getText('StaticLandingComponent.js_25_RW1haW')}</p>
              <p className={styles.text}>{getText('StaticLandingComponent.js_24_UGhvbm')}</p>
              <div className={styles.pressContact}>
                <img src={getText("DashboardContentComponent.js_33_L2ltYW")} alt={getText("StaticLandingComponent.js_9_VG9tbX")} className={styles.pressImage} />
                <div className={styles.pressDetails}>
                  <h2 className={styles.subheading}>{getText('StaticLandingComponent.js_13_UHJlc3')}</h2>
                  <p className={styles.text}>{getText('StaticLandingComponent.js_15_TmFtZT')}</p>
                  <p className={styles.text}>{getText('StaticLandingComponent.js_42_RW1haW')}</p>
                  <p className={styles.text}>{getText('StaticLandingComponent.js_9_V2hhdH')}{' '}
                    <a href={getText("StaticLandingComponent.js_25_aHR0cH")} target={getText("StaticLandingComponent.js_6_X2JsYW")} rel={getText("StaticLandingComponent.js_19_bm9vcG")} className={styles.whatsappLink}>{getText('StaticLandingComponent.js_17_KzEgKD')}</a>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.videoPlaceholder}>
              <video className={styles.video} src={getText("StaticLandingComponent.js_23_L3ZpZG")} autoPlay muted loop />
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.subheading}>{getText('StaticLandingComponent.js_12_R2V0IG')}</h2>

              {/* Compact Calendly Integration */}
              <h2 className={styles.subheading}>{getText('StaticLandingComponent.js_33_U2NoZW')}</h2>
              <div className={styles.calendlyButtonContainer}>
                {rootElem && <PopupButton url={getText("StaticLandingComponent.js_36_aHR0cH")} rootElement={rootElem} text={getText("StaticLandingComponent.js_28_U2NoZW")} className={styles.calendlyButton} />}
              </div>
            </div>

            <div className={styles.bookImageContainer}>
              <a href={getText("StaticLandingComponent.js_94_aHR0cH")} target={getText("StaticLandingComponent.js_6_X2JsYW")} rel={getText("StaticLandingComponent.js_19_bm9vcG")}>
                <img src={getText("StaticLandingComponent.js_80_L2ltYW")} alt={getText("StaticLandingComponent.js_10_Qm9vay")} className={styles.bookImage} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default StaticLandingComponent;