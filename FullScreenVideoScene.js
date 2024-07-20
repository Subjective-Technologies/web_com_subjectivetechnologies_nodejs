import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import SubjectiveSceneThree from './subjective_3d/SubjectiveSceneThree';
import SubjectiveVideoPlane from './subjective_3d/SubjectiveVideoPlane';
import styles from '../public/styles/GoldenThinkerAnimation.module.css';
import trackProperties from './developermode/trackProperties';

const developerMode = true;

function FullScreenVideoScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new SubjectiveSceneThree(developerMode);

    const cameraConfig = trackProperties({
      fov: 75,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1000
    }, 'cameraConfig');

    const camera = trackProperties(
      new THREE.PerspectiveCamera(
        cameraConfig.fov,
        cameraConfig.aspect,
        cameraConfig.near,
        cameraConfig.far
      ),
      'camera'
    );
    camera.position.set(0, 0, 10);

    const renderer = trackProperties(new THREE.WebGLRenderer(), 'renderer');
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0';

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    const videoPlane = new SubjectiveVideoPlane(scene, '/images/animations/mp4/brainboost_marketing_videos_landing_page.mp4', developerMode);

    videoPlane.onLoad().then(() => {
      const videoObject = videoPlane.getObject3D();
      if (videoObject) {
        videoObject.position.set(0, 0, -10);
        videoObject.scale.set(10, 10, 10);
      }
      scene.add_objects(videoPlane);
    });

    const synchronizeScroll = (event) => {
      const deltaY = event.deltaY || -event.wheelDelta;
      if (deltaY) {
        const videoElement = videoPlane.getObject3D().material.map.image;
        if (videoElement) {
          videoElement.currentTime += deltaY * 0.01;
        }
      }
      renderer.render(scene.get_threejs_scene(), camera);
    };

    window.addEventListener('scroll', synchronizeScroll);

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene.get_threejs_scene(), camera);
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

export default FullScreenVideoScene;
