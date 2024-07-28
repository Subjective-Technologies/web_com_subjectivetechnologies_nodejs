
import os

# Path to the GoldenThinkerAnimation.js file
file_path = './components/GoldenThinkerAnimation.js'

# New content for the GoldenThinkerAnimation.js file
new_content = '''
import React, { useEffect } from 'react';
import SubjectiveSceneThree from '../subjective_3d/SubjectiveSceneThree';
import GoldenThinkerStatue from '../subjective_3d/GoldenThinkerStatue';
import LightsDefault from '../subjective_3d/LightsDefault';
import SubjectiveVideoPlane from '../subjective_3d/SubjectiveVideoPlane';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    let composer, scene, camera, renderer, controls;

    const container = document.getElementById('animation_container');
    
    // Initialize the scene using SubjectiveSceneThree wrapper
    scene = new SubjectiveSceneThree();
    camera = scene.camera;
    renderer = scene.renderer;

    // Append renderer to the container
    container.appendChild(renderer.domElement);

    // Add default lights
    const lights = new LightsDefault();
    lights.addToScene(scene);

    // Load and add 3D statue
    const statue = new GoldenThinkerStatue();
    statue.loadModel('path_to_model.glb').then(model => {
      scene.add(model);
    });

    // Add bloom and outline pass
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,  // Strength
      0.4,  // Radius
      0.85  // Threshold
    );
    const outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene, camera
    );

    composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    composer.addPass(outlinePass);

    // Load and add video plane
    const videoPlane = new SubjectiveVideoPlane('path_to_video.mp4');
    videoPlane.addToScene(scene);

    // Handle window resize
    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();
    };
    animate();

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      composer.dispose();
    };
  }, []);

  return (
    <div id="animation_container"></div>
  );
};

export default GoldenThinkerAnimation;
'''.strip()

# Write the new content to the GoldenThinkerAnimation.js file
with open(file_path, 'w') as file:
    file.write(new_content)

print(f"Updated {file_path} with new content.")
