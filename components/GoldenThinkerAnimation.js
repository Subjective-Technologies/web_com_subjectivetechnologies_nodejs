import { getText } from '../utils/getText.js';
import React, { useEffect, useRef } from 'react';
import SubjectiveSceneThree from './subjective_3d/SubjectiveSceneThree';
import SubjectiveGlowingText from './subjective_3d/SubjectiveGlowingText';
import GoldenThinkerStatue from './subjective_3d/GoldenThinkerStatue';
const DEVELOPER_MODE = true;
const GoldenThinkerAnimation = () => {
  const containerRef = useRef(null);
  let subjectiveScene;
  useEffect(() => {
    const init = async () => {
      const container = containerRef.current;
      if (!container) return;

      // Pass the path of the texture image as an option
      subjectiveScene = new SubjectiveSceneThree(DEVELOPER_MODE, containerRef, {
        sphereTexturePath: getText("GoldenThinkerAnimation.js_18_aW1hZ2")
      });

      // Set scene size and camera position
      subjectiveScene.setSize(window.innerWidth, window.innerHeight);
      subjectiveScene.setCameraPosition({
        x: 8,
        y: 4,
        z: 8
      });

      // Create glowing text
      //new SubjectiveGlowingText(subjectiveScene.get_threejs_scene(), 'Subjective Technologies', DEVELOPER_MODE);

      // Add default lights
      subjectiveScene.addLights();

      // Add the model using GoldenThinkerStatue
      const thinkerStatue = new GoldenThinkerStatue(subjectiveScene.get_threejs_scene(), {
        color: 0xFFD700,
        metalness: 1,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1
      });
      thinkerStatue.loader.load('3d/all.glb', gltf => {
        subjectiveScene.model = gltf.scene;
        subjectiveScene.material = thinkerStatue.getMaterial();

        // Add grid helper
        subjectiveScene.addGridHelper();

        // Add axes helper
        subjectiveScene.addAxesHelper();

        // Set snapshot if available
        if (subjectiveScene.setSnapshot) {
          const initialSnapshot = {}; // Replace with actual snapshot or remove if not used
          subjectiveScene.setSnapshot(initialSnapshot);
        }

        // Setup GUI
        if (DEVELOPER_MODE) {
          subjectiveScene.setupGUI();
        }

        // Start animation loop
        subjectiveScene.animate();
      });
    };
    init();
    const handleResize = () => {
      if (subjectiveScene) {
        subjectiveScene.setSize(window.innerWidth, window.innerHeight);
        subjectiveScene.updateCameraAspect(window.innerWidth / window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (subjectiveScene) {
        subjectiveScene.dispose();
      }
    };
  }, []);
  return <div ref={containerRef} style={{
    width: getText("GoldenThinkerAnimation.js_4_MTAwJQ"),
    height: getText("GoldenThinkerAnimation.js_4_MTAwJQ")
  }} />;
};
export default GoldenThinkerAnimation;