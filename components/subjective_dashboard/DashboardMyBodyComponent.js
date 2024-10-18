import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import styles from '../../public/styles/DashboardMyBodyComponent.module.css';

const DashboardMyBodyComponent = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const containerRef = useRef(null);

  const handleBodyPartClick = (index) => {
    setSelectedBodyPart(index);
  };

  const bodyParts = [
    {
      subjective_body_part_name: 'Computational Distance Antenna',
      subjective_body_part_type: 'Virtual',
      subjective_body_part_description:
        'In the same way a GPS can give you the shortest path to go from point A to point B and you can measure it in miles/kilometers, we calculate this computational affinity between contexts. This can be between your own contexts from the past and present and also in between the contexts of other users. This body part has many different use cases, for example, you can detect when you have a better affinity to certain people in very specific aspects of their life, affinity to certain tasks, or even certain places. In this way you could find from your work twins to the perfect partners with a very low chance of divorces.',
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
      subjective_body_part_description: "This halo increases the user's cognitive power up to the available computing power.",
      icon: '/images/bodyparts/subjective_marketing_images_virtual_body_part_halo.webp'
    },
    {
      subjective_body_part_name: 'Third-Eye Future Foresighting',
      subjective_body_part_type: 'Virtual',
      subjective_body_part_description: 'The Third-Eye is a stream of data that with events that could possibly happen in the future according your past contexts and experiences.',
      icon: '/images/bodyparts/subjective_marketing_image_virtual_body_part_third_eye.webp'
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    let scene, camera, renderer, controls, mixer, composer;

    const clock = new THREE.Clock();

    const init = () => {
      // Set up the scene
      scene = new THREE.Scene();

      // Set up the camera
      camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 1.6, 3);

      // Set up the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 1.5;
      containerRef.current.style.position = 'relative';
      containerRef.current.appendChild(renderer.domElement);

      // Set up orbit controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.target.set(0, 1.6, 0);
      controls.minDistance = 2.5;
      controls.maxDistance = 4;
      controls.update();

      // Load HDRI environment map
      new RGBELoader()
        .setPath('3d/HDRI/')
        .load('solitude_night_4k.exr', (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.environment = texture;
          scene.background = texture; // Optional: Set as background
        });

      // Set up lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambientLight);

      // Main front light
      const frontLight = new THREE.DirectionalLight(0xffffff, 1.2);
      frontLight.position.set(1, 1, 1).normalize();
      scene.add(frontLight);

      // Additional lights
      const backLight = new THREE.DirectionalLight(0xffffff, 0.7);
      backLight.position.set(-1, 1, -1).normalize();
      scene.add(backLight);

      const sideLight1 = new THREE.DirectionalLight(0xffffff, 0.7);
      sideLight1.position.set(1, 1, -1).normalize();
      scene.add(sideLight1);

      const sideLight2 = new THREE.DirectionalLight(0xffffff, 0.7);
      sideLight2.position.set(-1, 1, 1).normalize();
      scene.add(sideLight2);

      // Set up postprocessing
      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.6, 0.4, 0.85);
      composer.addPass(bloomPass);

      // Load the FBX model with golden material
      const loader = new FBXLoader();
      loader.load('3d/human/human_prototype.fbx', (object) => {
        const goldenMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xFFD700, // Gold color
          metalness: 1,
          roughness: 0.3,
          clearcoat: 1,
          clearcoatRoughness: 0.05,
          envMapIntensity: 1.5, // Boost the environment map effect
        });

        object.traverse((child) => {
          if (child.isMesh) {
            child.material = goldenMaterial;
            child.castShadow = true;
          }
        });

        object.scale.set(0.02, 0.02, 0.02);
        object.rotation.y = 0;
        mixer = new THREE.AnimationMixer(object);
        if (object.animations.length > 0) {
          mixer.clipAction(object.animations[0]).play();
        }
        scene.add(object);
      });

      // Handle window resize
      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      composer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      controls.update();
      composer.render(); // Use composer to render scene with postprocessing
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (renderer) {
        renderer.dispose();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <a href="/"><h2>Home</h2></a>
        <ul className={styles.sidebarMenu}>
          <li><a href="/dashboard">Dashboard</a></li>
          <li>Profile</li>
          <li><a href="/dashboard_my_body">My Body</a></li>
          <li>Injections</li>          
          <li>Stamina</li>
        </ul>
        <footer className={styles.sidebarFooter}>Sidebar Footer</footer>
      </aside>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>My Body</h1>
        <div className={styles.threeJsContainer} ref={containerRef}>
          {/* Three.js animation will be rendered here */}
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