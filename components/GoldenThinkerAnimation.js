import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { initRenderer, initCamera, initLights, initComposer, initModel, setupGUI } from './SceneUtils';
import { startRecording, stopRecording, pauseRecording, continueRecording, playAnimation, loadCameraPath } from './AnimationUtils';

const DEVELOPER_MODE = true;

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    let scene, camera, renderer, composer, model, pointLights, directionalLight;
    let scrollY = window.scrollY;

    async function init() {
      const container = document.getElementById('animation_container');
      scene = new THREE.Scene();

      renderer = initRenderer(container);
      camera = initCamera(scene);
      composer = initComposer(renderer, scene, camera);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0); // Set the target to the center of the statue and the pyramid
      controls.maxPolarAngle = Math.PI * 0.5;
      controls.minDistance = 5;
      controls.maxDistance = 20;

      ({ pointLights, directionalLight } = initLights(scene));
      model = await initModel(scene);

      if (DEVELOPER_MODE) {
        setupGUI(model, camera, pointLights, directionalLight, startRecording, stopRecording, pauseRecording, continueRecording, (direction) => playAnimation(direction, camera, pointLights, directionalLight));
      }

      const animationData = await fetch('3d/animations/animation.json').then(res => res.json());
      loadCameraPath(JSON.stringify(animationData));

      window.addEventListener('resize', onWindowResize);
      window.addEventListener('scroll', onScroll);

      animate();
    }

    function animate() {
      requestAnimationFrame(animate);
      composer.render();
    }

    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    }

    function onScroll() {
      const deltaY = window.scrollY - scrollY;
      const playbackDirection = deltaY > 0 ? 1 : -1;
      playAnimation(playbackDirection, camera, pointLights, directionalLight);
      scrollY = window.scrollY;
    }

    init();
  }, []);

  return <div id="animation_container" />;
};

export default GoldenThinkerAnimation;
