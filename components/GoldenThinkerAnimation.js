// components/GoldenThinkerAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Scene from './3d/Scene';
import { EffectComposer, RenderPass, UnrealBloomPass } from 'postprocessing';
import BloomShaderTransformer from './3d/BloomShaderTransformer.js';
import MaterialCatalog from './3d/MaterialCatalog.js';

const GoldenThinkerAnimation = () => {
  useEffect(() => {

  const goldenThinkerScene = new Scene({});
    

   //const image360Path = 'images/360/back.jpg'; // Update with the actual path
   const image360Path = 'images/360/background_black_4096x2048_360.png'
   const objPath = './3d/anim_goldenthinker.obj'; // Update with the actual path
    
    //const objPath = '3d/anim_menu.obj';
    const material = new BloomShaderTransformer();


    // ---------------------------------DEFINE MATERIALS------------------------------------
//      const materialCatalog = new MaterialCatalog();
      
      // Create a gold material
      const goldMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xD4AF37, // Gold color
        metalness: 1.5, // Full metalness makes it look more like gold
        roughness: 0.3, // Adjust to make it shinier or more matte
        reflectivity: 1, // Full reflectivity for a metallic look
      });
     // materialCatalog.addMaterial('goldmaterial',goldMaterial);

    //-------------------------------- Materials ---------------------------------------
   
    
    




    //------------------------------Loading Objects------------------------------------------
    
    
      const thinkerStatuePath = '3d/anim_goldenthinker.obj';

      //material_calculation = (new BloomShaderTransformer(materialCatalog.getMaterial('goldmaterial'))).transform();

     // const originalMaterial = materialCatalog.getMaterial('goldmaterial');


      material_calculation = new BloomShaderTransformer().transform(goldenThinkerScene.getRenderer(),goldenThinkerScene,goldenThinkerScene.getCamera(),goldMaterial);

     goldenThinkerScene.addElement(thinkerStatuePath, {
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
