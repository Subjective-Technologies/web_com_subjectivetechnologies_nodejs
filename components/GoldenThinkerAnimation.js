// components/GoldenThinkerAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import Scene from './Scene';

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    const image360Path = 'images/360/back.jpg'; // Update with the actual path
    const objPath = '3d/anim_goldenthinker.obj'; // Update with the actual path


    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFFD700, // Gold color
      metalness: 1.0, // Full metalness for a gold-like effect
      roughness: 0.4, // Adjust for shininess, lower values are shinier
      // Refraction properties can be added here if needed
  });
  



    const myScene = new Scene(image360Path,objPath, goldMaterial);
    myScene.init();

    return () => {
      // Clean up when the component unmounts
      myScene.dispose();
    };
  }, []);

  return <div id="animation_container"></div>;
};
export default GoldenThinkerAnimation;
