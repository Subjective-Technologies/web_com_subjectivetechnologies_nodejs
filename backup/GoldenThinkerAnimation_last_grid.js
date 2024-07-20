import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import SubjectiveGlowingText from './marketing/marketing_3d/SubjectiveGlowingText';





const GoldenThinkerAnimation = () => {
  useEffect(() => {
    let composer, camera, renderer, model, pointLight1, pointLight2, pointLight3, pointLight4, directionalLight, videoSphere;


    const scene = new THREE.Scene();
    const bloomLayer = new THREE.Layers();
    bloomLayer.set(1); // Set layer 1 for bloom

    // Initialize renderer
    const container = document.getElementById('animation_container');
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.5; // Adjust as needed
    container.appendChild(renderer.domElement);

    // Initialize camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);
    scene.add(camera);

    // Initialize controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    // Add lights
    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Set up postprocessing
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, // Bloom strength
      0.4, // Radius
      0.85 // Threshold
    );

    let bloomComposer = new EffectComposer(renderer);
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    // Add grid helper for better visualization
    const gridHelper = new THREE.GridHelper(10, 10);
    //scene.add(gridHelper);

    // Create glowing text
    const glowingText = new SubjectiveGlowingText('Subjective Technologies', scene, camera, {}, true);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Render scene with bloom
      renderer.render(scene, camera);
      bloomComposer.render();

      controls.update();
    }

    animate();

    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      bloomComposer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.dispose();
      bloomComposer.dispose();
    };
  }, []);

  return (
    <div id="animation_container" style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default GoldenThinkerAnimation;
