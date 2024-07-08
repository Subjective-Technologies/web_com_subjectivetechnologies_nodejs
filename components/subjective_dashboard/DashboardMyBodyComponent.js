import React, { useState } from 'react';
import styles from '../../public/styles/DashboardMyBodyComponent.module.css';

const DashboardMyBodyComponent = () => {
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);

    const handleBodyPartClick = (index) => {
        setSelectedBodyPart(index);
    };

    const bodyParts = [
        {
            subjective_body_part_name: 'Computational Distance Antenna',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'In the same way a GPS can give you the shortest path to go from point A to point B and you can measure it in miles/kilometers, we calculate this computational affinity between contexts. This can be between your own contexts from the past and present and also in between the contexts of other users. This body part has many different use cases, for example, you can detect when you have a better affinity to certain people in very specific aspects of their life, affinity to certain tasks, or even certain places. In this way you could find from your work twins to the perfect partners with a very low chance of divorces.',
            icon: 'images/icons/subjective_computational_distance_antenna.png'
        },
        {
            subjective_body_part_name: 'Hand Energy Glands',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This virtual gland works for exerting energy when the user is working.',
            icon: 'images/icons/subjective_hand_energy_glands.png'
        },
        {
            subjective_body_part_name: 'Shoulder Energy Glands',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This virtual gland works for absorbing energy. Typically the energy that the user saves to other people.',
            icon: 'images/icons/subjective_shoulder_energy_glands.png'
        },
        {
            subjective_body_part_name: 'Camera',
            subjective_body_part_type: 'Physical',
            subjective_body_part_description: 'This enables the user to augment their sight, being able to see not only their context but other contexts from other places.',
            icon: 'images/icons/camera.png'
        },
        {
            subjective_body_part_name: 'Battery Hart',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This enables the user to augment their sight, being able to see not only their context but other contexts from other places.',
            icon: 'images/icons/subjective_battery_heart.png'
        },
        {
            subjective_body_part_name: 'Weather Nose',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This nose gives users the capacity to detect their current weather/temperature.',
            icon: 'images/icons/subjective_weather_nose.png'
        },
        {
            subjective_body_part_name: 'Cognitive Expansion Halo',
            subjective_body_part_type: 'Virtual',
            subjective_body_part_description: 'This halo increases the user\'s cognitive power up to the available computing power.',
            icon: 'images/icons/subjective_cognitive_expansion_halo.png'
        }
    ];

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
