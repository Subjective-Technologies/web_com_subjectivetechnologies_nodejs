console.log('Loading DashboardMyBodyComponent.js');
import React, { useState } from 'react';
import styles from '../../public/styles/DashboardMyBodyComponent.module.css';

const DashboardMyBodyComponent = () => {
console.log('Rendering DashboardMyBodyComponent');
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);

    const handleBodyPartClick = (index) => {
        setSelectedBodyPart(index);
    };

    const bodyParts = [
        {
            subjective_body_part_name: 'Computational Distance Antenna',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'In the same way a GPS can give you the shortest path to go from point A to point B and you can measure it in miles/kilometers, we calculate this computational affinity between contexts. This can be between your own contexts from the past and present and also in between the contexts of other users. This body part has many different use cases, for example, you can detect when you have a better affinity to certain people in very specific aspects of their life, affinity to certain tasks, or even certain places. In this way you could find from your work twins to the perfect partners with a very low chance of divorces.',
            icon: '/images/bodyparts/subjective_marketing_images_virtual_body_part_antenna.webp'
        },
        {
            subjective_body_part_name: 'Hand Energy Glands',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This virtual gland works for exerting energy when the user is working.',
            icon: '/images/bodyparts/subjective_marketing_images_virtual_body_part_hand_gland.webp'
        },
        {
            subjective_body_part_name: 'Shoulder Energy Glands',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This virtual gland works for absorbing energy. Typically the energy that the user saves to other people.',
            icon: '/images/bodyparts/subjective_marketing_image_virtual_body_part_shoulder_gland.webp'
        },
        {
            subjective_body_part_name: 'Camera',
            subjective_body_part_type: 'Physical',
            subjective_body_part_description: 'This enables the user to augment their sight, being able to see not only their context but other contexts from other places.',
            icon: '/images/bodyparts/subjective_physical_body_part_security_camera.webp'
        },
        {
            subjective_body_part_name: 'Battery Hart',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This enables the user to augment their sight, being able to see not only their context but other contexts from other places.',
            icon: '/images/bodyparts/subjective_marketing_images_virtual_body_part_hart_battery.webp'
        },
        {
            subjective_body_part_name: 'Weather Nose',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This nose gives users the capacity to detect their current weather/temperature.',
            icon: '/images/bodyparts/subjective_virtual_body_part_weather_detector_nose.webp'
        },
        {
            subjective_body_part_name: 'Cognitive Expansion Halo',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This halo increases the user\'s cognitive power up to the available computing power.',
            icon: '/images/bodyparts/subjective_marketing_images_virtual_body_part_halo.webp'
        },
        {
            subjective_body_part_name: 'Third-Eye Future Foresighting',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'The Third-Eye is a stream of data that with events that could possibly happen in the future according your past contexts and experiences.',
            icon: '/images/bodyparts/subjective_marketing_image_virtual_body_part_third_eye.webp'
        }
    ];

console.log('Returning from DashboardMyBodyComponent');
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.leftSide}>
                <h1 className={styles.title}>My Body</h1>
                <div className={styles.threeJsContainer}>
                    {/* Placeholder for Three.js animation */}
                    <div className={styles.blackScene}></div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <h1 className={styles.title}>Body Parts</h1>
                <div className={styles.bodyPartsList}>
                    {bodyParts.map((bodyPart, index) => (
                        <div
                            key={index}
                            className={`${styles.bodyPartItem} ${selectedBodyPart === index ? styles.selected : ''}`}
                            onClick={() => handleBodyPartClick(index)}
                        >
                            <img src={bodyPart.icon} alt={bodyPart.subjective_body_part_name} className={styles.bodyPartImage} />
                            <div className={styles.bodyPartInfo}>
                                <h3 className={styles.bodyPartName}>{bodyPart.subjective_body_part_name}</h3>
                                <p className={styles.bodyPartType}>{bodyPart.subjective_body_part_type}</p>
                                <p className={styles.bodyPartDescription}>{bodyPart.subjective_body_part_description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardMyBodyComponent;
