import { getText } from '../utils/getText.js';
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
  const handleBodyPartClick = index => {
    setSelectedBodyPart(index);
  };
  const bodyParts = [{
    subjective_body_part_name: getText("DashboardMyBodyComponent.js_30_Q29tcH"),
    subjective_body_part_type: getText("DashboardMyBodyComponent.js_7_VmlydH"),
    subjective_body_part_description: getText("DashboardMyBodyComponent.js_620_SW4gdG"),
    icon: getText("DashboardMyBodyComponent.js_76_L2ltYW")
  }, {
    subjective_body_part_name: getText("DashboardMyBodyComponent.js_18_SGFuZC"),
    subjective_body_part_type: getText("DashboardMyBodyComponent.js_7_VmlydH"),
    subjective_body_part_description: getText("DashboardMyBodyComponent.js_70_VGhpcy"),
    icon: getText("DashboardMyBodyComponent.js_79_L2ltYW")
  }, {
    subjective_body_part_name: getText("DashboardMyBodyComponent.js_22_U2hvdW"),
    subjective_body_part_type: getText("DashboardMyBodyComponent.js_7_VmlydH"),
    subjective_body_part_description: getText("DashboardMyBodyComponent.js_104_VGhpcy"),
    icon: getText("DashboardMyBodyComponent.js_82_L2ltYW")
  }, {
    subjective_body_part_name: getText("DashboardMyBodyComponent.js_6_Q2FtZX"),
    subjective_body_part_type: getText("DashboardMyBodyComponent.js_8_UGh5c2"),
    subjective_body_part_description: getText("DashboardMyBodyComponent.js_124_VGhpcy"),
    icon: getText("DashboardMyBodyComponent.js_68_L2ltYW")
  }, {
    subjective_body_part_name: getText("DashboardMyBodyComponent.js_12_QmF0dG"),
    subjective_body_part_type: getText("DashboardMyBodyComponent.js_7_VmlydH"),
    subjective_body_part_description: getText("DashboardMyBodyComponent.js_124_VGhpcy"),
    icon: getText("DashboardMyBodyComponent.js_81_L2ltYW")
  }, {
    subjective_body_part_name: getText("DashboardMyBodyComponent.js_12_V2VhdG"),
    subjective_body_part_type: getText("DashboardMyBodyComponent.js_7_VmlydH"),
    subjective_body_part_description: getText("DashboardMyBodyComponent.js_79_VGhpcy"),
    icon: getText("DashboardMyBodyComponent.js_73_L2ltYW")
  }, {
    subjective_body_part_name: getText("DashboardMyBodyComponent.js_24_Q29nbm"),
    subjective_body_part_type: getText("DashboardMyBodyComponent.js_7_VmlydH"),
    subjective_body_part_description: getText("DashboardMyBodyComponent.js_83_VGhpcy"),
    icon: getText("DashboardMyBodyComponent.js_73_L2ltYW")
  }, {
    subjective_body_part_name: getText("DashboardMyBodyComponent.js_29_VGhpcm"),
    subjective_body_part_type: getText("DashboardMyBodyComponent.js_7_VmlydH"),
    subjective_body_part_description: getText("DashboardMyBodyComponent.js_137_VGhlIF"),
    icon: getText("DashboardMyBodyComponent.js_77_L2ltYW")
  }];
  useEffect(() => {
    if (!containerRef.current) return;
    let scene, camera, renderer, controls, mixer, composer;
    const clock = new THREE.Clock();
    const init = () => {
      // Set up the scene
      scene = new THREE.Scene();

      // Set up the camera
      camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      camera.position.set(0, 1.6, 3);

      // Set up the renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true
      });
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
      new RGBELoader().setPath('3d/HDRI/').load('solitude_night_4k.exr', texture => {
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
      loader.load('3d/human/human_prototype.fbx', object => {
        const goldenMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xFFD700,
          // Gold color
          metalness: 1,
          roughness: 0.3,
          clearcoat: 1,
          clearcoatRoughness: 0.05,
          envMapIntensity: 1.5 // Boost the environment map effect
        });
        object.traverse(child => {
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
  return <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <a href={getText("DashboardMyBodyComponent.js_1_Lw==")}><h2>{getText('DashboardMyBodyComponent.js_4_SG9tZQ')}</h2></a>
        <ul className={styles.sidebarMenu}>
          <li><a href={getText("DashboardMyBodyComponent.js_10_L2Rhc2")}>{getText('DashboardMyBodyComponent.js_9_RGFzaG')}</a></li>
          <li>{getText('DashboardMyBodyComponent.js_7_UHJvZm')}</li>
          <li><a href={getText("DashboardMyBodyComponent.js_18_L2Rhc2")}>{getText('DashboardMyBodyComponent.js_7_TXkgQm')}</a></li>
          <li>{getText('DashboardMyBodyComponent.js_10_SW5qZW')}</li>          
          <li>{getText('DashboardMyBodyComponent.js_7_U3RhbW')}</li>
        </ul>
        <footer className={styles.sidebarFooter}>{getText('DashboardMyBodyComponent.js_14_U2lkZW')}</footer>
      </aside>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>{getText('DashboardMyBodyComponent.js_7_TXkgQm')}</h1>
        <div className={styles.threeJsContainer} ref={containerRef}>
          {/* Three.js animation will be rendered here */}
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1 className={styles.title}>{getText('DashboardMyBodyComponent.js_10_Qm9keS')}</h1>
        <div className={styles.bodyPartsList}>
          {bodyParts.map((bodyPart, index) => <div key={index} className={`${styles.bodyPartItem} ${selectedBodyPart === index ? styles.selected : ''}`} onClick={() => handleBodyPartClick(index)}>
              <img src={bodyPart.icon} alt={bodyPart.subjective_body_part_name} className={styles.bodyPartImage} />
              <div className={styles.bodyPartInfo}>
                <h3 className={styles.bodyPartName}>{bodyPart.subjective_body_part_name}</h3>
                <p className={styles.bodyPartType}>{bodyPart.subjective_body_part_type}</p>
                <p className={styles.bodyPartDescription}>{bodyPart.subjective_body_part_description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default DashboardMyBodyComponent;