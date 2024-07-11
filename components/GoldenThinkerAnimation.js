import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';

import GoldenThinkerStatue from './subjective_3d/GoldenThinkerStatue';
import SubjectiveSceneThree from './subjective_3d/SubjectiveSceneThree';
import Subjective2DSVGPlaneCSS3D from './subjective_3d/Subjective2DSVGPlaneCSS3D';
import styles from '../public/styles/GoldenThinkerAnimation.module.css';
import LightsDefault from './subjective_3d/LightsDefault';

const developerMode = true;

function GoldenThinkerAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new SubjectiveSceneThree();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';

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

    const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene.get_threejs_scene(), camera);
    outlinePass.edgeStrength = 2.5;
    outlinePass.edgeGlow = 0.0;
    outlinePass.edgeThickness = 1.0;
    outlinePass.pulsePeriod = 0;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#190a05');
    composer.addPass(outlinePass);

    const goldenThinkerStatue = new GoldenThinkerStatue(scene, developerMode);
    const svgPlaneCSS3D = new Subjective2DSVGPlaneCSS3D(scene, developerMode);

    // Wait for both objects to load
    Promise.all([goldenThinkerStatue.onLoad(), svgPlaneCSS3D.onLoad()]).then(() => {
      // Position and scale the objects
      goldenThinkerStatue.getObject3D().position.set(-3, 0, 0);
      goldenThinkerStatue.getObject3D().scale.set(0.5, 0.5, 0.5);

      svgPlaneCSS3D.getObject3D().position.set(3, 0, 0);
      svgPlaneCSS3D.getObject3D().scale.set(0.5, 0.5, 0.5);

      scene.add_object(goldenThinkerStatue);
      scene.add_object(svgPlaneCSS3D);
    });

    const lightsDefault = new LightsDefault(scene, developerMode);
    scene.add_object(lightsDefault);

    const synchronizeScroll = () => {
      controls.update();
      composer.render();
    };

    window.addEventListener('scroll', synchronizeScroll);

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      composer.render();
    };

    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('scroll', synchronizeScroll);
    };
  }, []);

  return <div ref={containerRef} className={styles.animation_container} style={{ position: 'relative', border: '2px solid yellow' }} />;
}

export default GoldenThinkerAnimation;
