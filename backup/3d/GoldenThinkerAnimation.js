// components/GoldenThinkerAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GTScene from './GTScene.js';

import BloomShaderTransformer from './GTBloomShaderTransformer.js';


const GoldenThinkerAnimation = () => {
  useEffect(() => {

      const gt_scene = new GTScene();
        

      const image360Path = 'images/360/background_black_4096x2048_360.png'
      const objPath = './3d/anim_goldenthinker.obj'; // Update with the actual path

    // ---------------------------------DEFINE MATERIALS------------------------------------
    
      // Create a gold material
      const goldMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xD4AF37, // Gold color
        metalness: 1.5, // Full metalness makes it look more like gold
        roughness: 0.3, // Adjust to make it shinier or more matte
        reflectivity: 1, // Full reflectivity for a metallic look
      });
      //materialCatalog.addMaterial('goldmaterial',goldMaterial);

      //const goldMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });

     const statue = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), goldMaterial);
     gt_scene.add(statue);

     //this.goldenThinkerScene.getRenderer().setSize(window.innerWidth,window.innerHeight);

    //-------------------------------- Materials ---------------------------------------
   
    
    




    //------------------------------Loading Objects------------------------------------------
    
    
      const thinkerStatuePath = '3d/anim_goldenthinker.obj';

      //material_calculation = (new BloomShaderTransformer(materialCatalog.getMaterial('goldmaterial'))).transform();

     // const originalMaterial = materialCatalog.getMaterial('goldmaterial');



     const bloomStrength  = 1.5;
     const bloomRadius = 0.2;
     const bloomThreshold = 0.8;
      material_calculation = (new BloomShaderTransformer()).transform(
        gt_scene.getRenderer(),
        gt_scene,
        gt_scene.getCamera(),
        goldMaterial,
        bloomStrength,
        bloomRadius,
        bloomThreshold
      );


      gt_scene.addElement(thinkerStatuePath, {
       material: material_calculation,
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
