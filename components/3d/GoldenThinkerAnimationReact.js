import React, { useEffect } from 'react';

const GoldenThinkerAnimationReact = () => {
  useEffect(() => {
    // Add event listeners or other logic as needed
    return () => {
      // Clean up resources if needed
    };
  }, []);

  return (
    <div>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
      <a-scene background="color: #000;">
        <a-sky src="images/360/back4.jpg"></a-sky>
        <a-entity
          gltf-model="url(3d/thinker.glb)"
          position="-5 2.5 -3.5"
          scale="1 1 1"
          material="color: #D4AF37; metalness: 1.5; roughness: 0.3; reflectivity: 1;"
        ></a-entity>
      </a-scene>
    </div>
  );
};

export default GoldenThinkerAnimationReact;
