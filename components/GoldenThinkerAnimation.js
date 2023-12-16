// components/GoldenThinkerAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import Scene from './Scene';

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    const image360Path = 'images/360/back.jpg'; // Update with the actual path
   // const objPath = '3d/anim_goldenthinker.obj'; // Update with the actual path
    
    const objPath = '3d/anim_menu.obj';
    // Create a gold material
    const goldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xD4AF37, // Gold color
      metalness: 1, // Full metalness makes it look more like gold
      roughness: 0.3, // Adjust to make it shinier or more matte
      reflectivity: 1, // Full reflectivity for a metallic look
    });
    const myScene = new Scene(image360Path,objPath, goldMaterial);
    

   

     myScene.addElement(objPath, {
       material: goldMaterial,
       position: { x: 0, y: -2, z: 0 },
       rotation: { x: 0, y: 0, z: 0 },
     });







    return () => {
      // Clean up when the component unmounts
      //myScene.dispose();
    };
  }, []);

  return <div id="animation_container"></div>;
};
export default GoldenThinkerAnimation;
