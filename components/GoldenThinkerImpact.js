import React from 'react';
import TechnologyImpact from './TechnologyImpact';
import styles from '../public/styles/GoldenThinkerImpact.module.css';

const postScarcity = [
  {
    image: 'https://via.placeholder.com/800x400',
    title: 'Subjective ThermoCurrency',
    description: 'This pioneering currency is backed by the laws of physics, specifically energy. By using energy as a universal currency, we can create a fairer and more sustainable economic system. The subjective thermocurrency ensures that everyone has access to the resources they need by utilizing the energy they expend in their daily activities. This system promotes efficiency and equity, potentially eliminating the traditional concept of scarcity.',
  },
  {
    image: 'https://via.placeholder.com/800x400',
    title: 'Subjective Advertising',
    description: 'Unlike traditional advertising, which often relies on intrusive and irrelevant messages, subjective advertising is problem-solving oriented. By detecting specific user needs and providing targeted solutions, it enhances user satisfaction and reduces wasteful consumption, contributing to a more efficient allocation of resources.',
  },
  {
    image: 'https://via.placeholder.com/800x400',
    title: 'Subjective Domotics',
    description: 'This smart home technology learns and adapts to the user’s habits and preferences, optimizing energy use and improving comfort. By reducing unnecessary energy consumption and automating routine tasks, subjective domotics can significantly lower the cost of living and enhance the quality of life.',
  },
];

const postEducation = [
  {
    image: 'https://via.placeholder.com/800x400',
    title: 'Subjective Semantizer',
    description: 'This technology transforms written knowledge into subjective computer vision experiences, making learning more intuitive and accessible. By integrating real-time, context-aware learning into everyday activities, it reduces the need for formal education systems and makes knowledge acquisition more seamless and efficient.',
  },
  {
    image: 'https://via.placeholder.com/800x400',
    title: 'Subjective InstaJobFinder',
    description: 'By analyzing work environments and matching them with the most suitable candidates based on their past experiences and skills, this technology streamlines the job matching process. It reduces the time and effort required for job hunting and hiring, leading to a more efficient and satisfied workforce.',
  },
];

const postLabour = [
  {
    image: 'https://via.placeholder.com/800x400',
    title: 'Subjective Adapter',
    description: 'This tool learns from user interactions with legacy systems, automating repetitive tasks and reducing the need for manual input. It enhances productivity by allowing users to focus on more creative and meaningful work, ultimately leading to a reduction in traditional labor requirements.',
  },
  {
    image: 'https://via.placeholder.com/800x400',
    title: 'Subjective BeMyself',
    description: 'By creating digital clones that mimic the behavior and decision-making processes of individuals, this technology enables users to extend their presence and influence without being physically present. It allows for greater flexibility and efficiency in managing personal and professional tasks.',
  },
  {
    image: 'https://via.placeholder.com/800x400',
    title: 'Cognitive Booster',
    description: 'This system enhances human cognitive capabilities by providing real-time reminders, suggestions, and contextual information. It helps users manage their daily lives more effectively, reducing stress and increasing productivity.',
  },
];

const GoldenThinkerImpact = () => {
  return (
    <div className={styles.impactContainer}>
      <section className={styles.videoSection}>
        <video controls className={styles.video}>
          <source src="video/brainboost_marketing_media_video_subjective.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className={styles.introSection}>
        <h2 className={styles.introTitle}>Impact of Subjective Technologies in Society</h2>
        <p className={styles.introText}>
          The advent of Subjective Technologies marks a pivotal shift in the evolution of human interaction with technology. This transformation promises to usher in a new era characterized by post-scarcity, post-education, and post-labour dynamics, fundamentally altering the societal landscape. In this essay, we will explore the general implications of these changes and delve into specific technology products that exemplify these advancements.
        </p>
        <p className={styles.introText}>
          <strong>Post-Scarcity:</strong> The concept of post-scarcity revolves around the idea that technological advancements can provide abundance, reducing or eliminating the scarcity of resources. Subjective Technologies facilitate this by optimizing the use of resources through real-time, personalized cognitive assistance. For example, VirtualGlands, a concept within this framework, enable users to perform energy transactions unconsciously and instantaneously, effectively replacing traditional currency systems and contributing to a more efficient and abundant economy​​.
        </p>
        <p className={styles.introText}>
          <strong>Post-Education:</strong> Traditional education systems, with their one-size-fits-all approach, often fail to address individual learning needs and preferences. Subjective Technologies propose a paradigm shift towards a personalized learning experience. By providing real-time, context-sensitive cognitive services, these technologies empower individuals to learn and solve problems in ways that are tailored to their unique cognitive processes. This personalized approach democratizes access to knowledge and promotes continuous, lifelong learning, making formal education systems less critical​​​​.
        </p>
        <p className={styles.introText}>
          <strong>Post-Labour:</strong> The integration of Subjective Technologies into daily life has the potential to significantly reduce the cognitive load associated with various tasks, from mundane daily activities to complex professional responsibilities. By enhancing individual capabilities and automating routine tasks, these technologies could lead to a reduction in the necessity for traditional forms of labor. This shift could free individuals to pursue more creative, fulfilling, and intellectually stimulating endeavors, contributing to a more balanced and humane societal structure​​.
        </p>
      </section>

      <section className={styles.eraSection}>
        <h3 className={styles.eraTitle}>Post-Scarcity Era</h3>
        {postScarcity.map((tech, index) => (
          <TechnologyImpact
            key={index}
            image={tech.image}
            title={tech.title}
            description={tech.description}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <section className={styles.eraSection}>
        <h3 className={styles.eraTitle}>Post-Education Era</h3>
        {postEducation.map((tech, index) => (
          <TechnologyImpact
            key={index}
            image={tech.image}
            title={tech.title}
            description={tech.description}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <section className={styles.eraSection}>
        <h3 className={styles.eraTitle}>Post-Labour Era</h3>
        {postLabour.map((tech, index) => (
          <TechnologyImpact
            key={index}
            image={tech.image}
            title={tech.title}
            description={tech.description}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <section className={styles.impactQuoteSection}>
        <blockquote className={styles.impactQuote}>
          "The Golden Thinker has changed the way we approach technology. Their solutions are not just innovative, but truly transformative." - Industry Expert
        </blockquote>
      </section>
    </div>
  );
};

export default GoldenThinkerImpact;
