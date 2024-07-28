console.log('Loading StunningAnimation.js');
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import GoldenThinkerStatue from './subjective_3d/GoldenThinkerStatue';
import SubjectiveSceneThree from './subjective_3d/SubjectiveSceneThree';
import SubjectiveVideoPlane from './subjective_3d/SubjectiveVideoPlane';
import SubjectiveGlowingText from './subjective_3d/SubjectiveGlowingText';
import styles from '../public/styles/GoldenThinkerAnimation.module.css';
import LightsDefault from './subjective_3d/LightsDefault';

const developerMode = true;

function StunningAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new SubjectiveSceneThree(developerMode);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const renderScene = new RenderPass(scene.get_threejs_scene(), camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, // Strength
      0.4, // Radius
      0.85 // Threshold
    );
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Add objects
    const goldenThinkerStatue = new GoldenThinkerStatue(scene, developerMode);
    const videoPlane = new SubjectiveVideoPlane(scene, '/images/animations/mp4/brainboost_marketing_videos_landing_page.mp4', developerMode);
    const glowingText = new SubjectiveGlowingText(scene, 'Stunning Animation', developerMode);

    // Wait for objects to load
    Promise.all([goldenThinkerStatue.onLoad(), videoPlane.onLoad()]).then(() => {
      // Position and scale the objects
      const statueObject = goldenThinkerStatue.getObject3D();
      if (statueObject) {
        statueObject.position.set(-3, 0, 0);
        statueObject.scale.set(0.5, 0.5, 0.5);
      }

      const videoObject = videoPlane.getObject3D();
      if (videoObject) {
        videoObject.position.set(3, 0, 0);
        videoObject.scale.set(0.5, 0.5, 0.5);
      }

      const textObject = glowingText.getObject3D();
      if (textObject) {
        textObject.position.set(0, 2, 0);
      }

      scene.add_objects(goldenThinkerStatue);
      scene.add_objects(videoPlane);
      scene.add_objects(glowingText);

      console.log('Objects added to the scene:', { goldenThinkerStatue, videoPlane, glowingText });
    });

    const lightsDefault = new LightsDefault(scene, developerMode);
    scene.add_objects(lightsDefault);

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      composer.render();
    };

    animate();

    // Add scroll event listener for animation control
    const onScroll = (event) => {
      const delta = Math.sign(event.deltaY);
      // Move the objects based on scroll direction
      const statueObject = goldenThinkerStatue.getObject3D();
      if (statueObject) {
        statueObject.position.z += delta * 0.1;
      }
      const videoObject = videoPlane.getObject3D();
      if (videoObject) {
        videoObject.position.z += delta * 0.1;
      }
      const textObject = glowingText.getObject3D();
      if (textObject) {
        textObject.position.z += delta * 0.1;
      }
    };

    window.addEventListener('wheel', onScroll);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('wheel', onScroll);
    };
  }, []);

  return <div ref={containerRef} className={styles.animation_container} />;
}

export default StunningAnimation;
