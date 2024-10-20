import { getText } from '../utils/getText.js';
console.log('Loading CreativeAnimation.js');
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import GoldenThinkerStatue from './subjective_3d/GoldenThinkerStatue';
import SubjectiveSceneThree from './subjective_3d/SubjectiveSceneThree';
import SubjectiveVideoPlane from './subjective_3d/SubjectiveVideoPlane';
import SubjectiveGlowingText from './subjective_3d/SubjectiveGlowingText';
import styles from '../public/styles/GoldenThinkerAnimation.module.css';
import LightsDefault from './subjective_3d/LightsDefault';
import trackProperties from './developermode/trackProperties';
import SubjectiveDynamicDebugUi from './developermode/SubjectiveDynamicDebugUi'; // Import the UI class

const developerMode = true;
function CreativeAnimation() {
  const containerRef = useRef(null);
  useEffect(() => {
    const scene = new SubjectiveSceneThree(developerMode);
    const cameraConfig = trackProperties({
      fov: 75,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1000
    }, 'cameraConfig');
    const camera = trackProperties(new THREE.PerspectiveCamera(cameraConfig.fov, cameraConfig.aspect, cameraConfig.near, cameraConfig.far), 'camera');
    camera.position.set(0, 0, 10);
    const renderer = trackProperties(new THREE.WebGLRenderer(), 'renderer');
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0'; // Ensure it is behind CSS3DRenderer

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }
    const controls = trackProperties(new OrbitControls(camera, renderer.domElement), 'controls');
    controls.enableDamping = true;
    const renderScene = trackProperties(new RenderPass(scene.get_threejs_scene(), camera), 'renderScene');
    const bloomPass = trackProperties(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5,
    // Strength
    0.4,
    // Radius
    0.85 // Threshold
    ), 'bloomPass');
    const composer = trackProperties(new EffectComposer(renderer), 'composer');
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    const outlinePass = trackProperties(new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene.get_threejs_scene(), camera), 'outlinePass');
    outlinePass.edgeStrength = 2.5;
    outlinePass.edgeGlow = 0.0;
    outlinePass.edgeThickness = 1.0;
    outlinePass.pulsePeriod = 0;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#190a05');
    composer.addPass(outlinePass);
    const goldenThinkerStatue = new GoldenThinkerStatue(scene, developerMode);
    const videoPlane = new SubjectiveVideoPlane(scene, '/images/animations/mp4/brainboost_marketing_videos_landing_page.mp4', developerMode);
    const glowingText = new SubjectiveGlowingText(scene, 'Subjective Technologies', developerMode);

    // Wait for objects to load
    const statueObject = goldenThinkerStatue.getObject3D();
    const videoObject = videoPlane.getObject3D();
    const textObject = glowingText.getObject3D();

    // Position and scale the objects
    if (statueObject) {
      statueObject.position.set(-3, 0, 0);
      statueObject.scale.set(0.5, 0.5, 0.5);
    }
    if (videoObject) {
      videoObject.position.set(0, 0, 0);
      videoObject.scale.set(3, 3, 3);
    }
    if (textObject) {
      textObject.position.set(0, 3, -5);
    }
    scene.add_objects(goldenThinkerStatue);
    scene.add_objects(videoPlane);
    scene.add_objects(glowingText);
    const lightsDefault = new LightsDefault(scene, developerMode);
    scene.add_objects(lightsDefault);

    // Add camera movement
    const clock = new THREE.Clock();
    const animate = function () {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Circular camera movement
      camera.position.x = 10 * Math.sin(elapsedTime * 0.5);
      camera.position.z = 10 * Math.cos(elapsedTime * 0.5);
      camera.lookAt(0, 0, 0);
      controls.update();
      composer.render();
    };
    animate();

    // Initialize and load the UI if developerMode is true
    if (developerMode) {
      new SubjectiveDynamicDebugUi(scene);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return <div ref={containerRef} className={styles.animation_container} style={{
    position: getText("CreativeAnimation.js_8_cmVsYX"),
    border: getText("CreativeAnimation.js_16_MnB4IH")
  }} />;
}
export default CreativeAnimation;