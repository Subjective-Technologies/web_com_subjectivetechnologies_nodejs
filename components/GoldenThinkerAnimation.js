import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GUI from 'lil-gui';

const DEVELOPER_MODE = true;

const GoldenThinkerAnimation = () => {
  useEffect(() => {
    let composer, camera, renderer, model, pointLight1, pointLight2, pointLight3, pointLight4, directionalLight, videoSphere;
    const scene = new THREE.Scene();
    let recording = false;
    let recordingPaused = false;
    let cameraPath = [];
    let lastTimestamp = null;
    let playbackIndex = 0;
    let playbackSpeed = 0.1; // Adjust this for smoother transitions

    function startRecording() {
      recording = true;
      recordingPaused = false;
      cameraPath = [];
      lastTimestamp = null;
      console.log("Recording started");
    }

    function stopRecording() {
      recording = false;
      recordingPaused = false;
      console.log("Recording stopped");
      console.log(cameraPath); // Print the camera path to the console
      exportCameraPath();
    }

    function pauseRecording() {
      recordingPaused = true;
      console.log("Recording paused");
    }

    function continueRecording() {
      recordingPaused = false;
      console.log("Recording continued");
    }

    function exportCameraPath() {
      const serializedPath = cameraPath.map(point => ({
        camera: {
          position: {
            x: point.camera.position.x,
            y: point.camera.position.y,
            z: point.camera.position.z
          },
          rotation: {
            x: point.camera.rotation.x,
            y: point.camera.rotation.y,
            z: point.camera.rotation.z
          }
        },
        lights: point.lights.map(light => ({
          position: {
            x: light.position.x,
            y: light.position.y,
            z: light.position.z
          },
          intensity: light.intensity
        }))
      }));
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(serializedPath));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "camera_path.json");
      document.body.appendChild(downloadAnchorNode); // Required for Firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }

    function loadCameraPath(jsonString) {
      const loadedPath = JSON.parse(jsonString);
      cameraPath = loadedPath.map(point => ({
        camera: {
          position: new THREE.Vector3(point.camera.position.x, point.camera.position.y, point.camera.position.z),
          rotation: new THREE.Euler(point.camera.rotation.x, point.camera.rotation.y, point.camera.rotation.z)
        },
        lights: point.lights.map(light => ({
          position: new THREE.Vector3(light.position.x, light.position.y, light.position.z),
          intensity: light.intensity
        }))
      }));
    }

    function playAnimation() {
      if (cameraPath.length === 0) {
        console.log("No recorded animation to play.");
        return;
      }

      playbackIndex = 0;
      function animatePlayback() {
        if (playbackIndex < cameraPath.length - 1) {
          const { camera: startCam, lights: startLights } = cameraPath[playbackIndex];
          const { camera: endCam, lights: endLights } = cameraPath[playbackIndex + 1];
          const alpha = playbackSpeed;

          camera.position.lerpVectors(startCam.position, endCam.position, alpha);
          camera.quaternion.slerpQuaternions(
            new THREE.Quaternion().setFromEuler(startCam.rotation),
            new THREE.Quaternion().setFromEuler(endCam.rotation),
            alpha
          );

          pointLight1.position.lerpVectors(startLights[0].position, endLights[0].position, alpha);
          pointLight1.intensity = THREE.MathUtils.lerp(startLights[0].intensity, endLights[0].intensity, alpha);
          pointLight2.position.lerpVectors(startLights[1].position, endLights[1].position, alpha);
          pointLight2.intensity = THREE.MathUtils.lerp(startLights[1].intensity, endLights[1].intensity, alpha);
          pointLight3.position.lerpVectors(startLights[2].position, endLights[2].position, alpha);
          pointLight3.intensity = THREE.MathUtils.lerp(startLights[2].intensity, endLights[2].intensity, alpha);
          pointLight4.position.lerpVectors(startLights[3].position, endLights[3].position, alpha);
          pointLight4.intensity = THREE.MathUtils.lerp(startLights[3].intensity, endLights[3].intensity, alpha);
          directionalLight.position.lerpVectors(startLights[4].position, endLights[4].position, alpha);
          directionalLight.intensity = THREE.MathUtils.lerp(startLights[4].intensity, endLights[4].intensity, alpha);

          playbackIndex += playbackSpeed;
          requestAnimationFrame(animatePlayback);
        } else {
          playbackIndex = 0;
        }
      }
      animatePlayback();
    }

    async function init() {
      const container = document.getElementById('animation_container');
      const clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 1.5;
      container.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
      camera.position.set(8, 4, 8); // Adjusted camera position for better view
      scene.add(camera);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0); // Set the target to the center of the statue and the pyramid
      controls.maxPolarAngle = Math.PI * 0.5;
      controls.minDistance = 5;
      controls.maxDistance = 20;

      pointLight1 = new THREE.PointLight(0xffffff, 1.5);
      pointLight1.position.set(5, 10, 5);
      scene.add(pointLight1);

      pointLight2 = new THREE.PointLight(0xffffff, 1.5);
      pointLight2.position.set(-5, 10, -5);
      scene.add(pointLight2);

      pointLight3 = new THREE.PointLight(0xffffff, 1.5);
      pointLight3.position.set(5, -10, -5);
      scene.add(pointLight3);

      pointLight4 = new THREE.PointLight(0xffffff, 1.5);
      pointLight4.position.set(-5, -10, 5);
      scene.add(pointLight4);

      directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
      directionalLight.position.set(10, 20, 10);
      scene.add(directionalLight);

      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.7, 0.5, 0.1); // Softer bloom effect
      const outputPass = new EffectComposer(renderer);

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      composer.addPass(outputPass);

      // Add video sphere
      const video = document.createElement('video');
      video.src = '3d/textures/video_texture_360.mp4';
      video.crossOrigin = 'anonymous';
      video.loop = true;
      video.muted = true;
      video.play();

      const videoTexture = new THREE.VideoTexture(video);
      const sphereGeometry = new THREE.SphereGeometry(3, 32, 32); // Smaller sphere
      const sphereMaterial = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide });
      videoSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      videoSphere.position.set(10, 3, 0); // Move the sphere further back
      scene.add(videoSphere);

      const goldMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xFFD700, // Gold color
        metalness: 1,
        roughness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1
      });

      new GLTFLoader().load('3d/all.glb', function (gltf) {
        model = gltf.scene;
        setMaterial(model, goldMaterial);
        model.rotation.set(0, -Math.PI / 2, 0);
        model.position.set(0, -2, 0);
        scene.add(model);
        animate();
        setSceneSettings(initialSettings);

        if (DEVELOPER_MODE) {
          setupGUI(model, goldMaterial);
        }
      });

      function setMaterial(object, material) {
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = material;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
      }

      function animate(timestamp) {
        requestAnimationFrame(animate);
        composer.render();
        controls.update(); // Update controls

        if (recording && !recordingPaused) {
          if (!lastTimestamp) lastTimestamp = timestamp;
          const elapsed = timestamp - lastTimestamp;
          if (elapsed > 100) { // Record every 100ms
            cameraPath.push({
              camera: {
                position: camera.position.clone(),
                rotation: camera.rotation.clone(),
              },
              lights: [
                {
                  position: pointLight1.position.clone(),
                  intensity: pointLight1.intensity
                },
                {
                  position: pointLight2.position.clone(),
                  intensity: pointLight2.intensity
                },
                {
                  position: pointLight3.position.clone(),
                  intensity: pointLight3.intensity
                },
                {
                  position: pointLight4.position.clone(),
                  intensity: pointLight4.intensity
                },
                {
                  position: directionalLight.position.clone(),
                  intensity: directionalLight.intensity
                }
              ]
            });
            lastTimestamp = timestamp;
          }
        }
      }

      function onKeyDown(event) {
        if (event.altKey && event.key === 's') {
          takeSnapshot();
        }
        if (event.shiftKey && event.key === 'R') {
          startRecording();
        }
        if (event.shiftKey && event.key === 'S') {
          stopRecording();
        }
        if (event.shiftKey && event.key === 'P') {
          pauseRecording();
        }
        if (event.shiftKey && event.key === 'C') {
          continueRecording();
        }
        if (event.shiftKey && event.key === 'A') {
          playAnimation();
        }
      }

      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('resize', onWindowResize);

      return () => {
        window.removeEventListener('keydown', onKeyDown);
        window.removeEventListener('resize', onWindowResize);
        renderer.dispose();
        composer.dispose();
      };
    }

    const takeSnapshot = () => {
      const sceneSnapshot = {
          camera: {
              position: camera.position,
              rotation: {
                  _x: camera.rotation.x,
                  _y: camera.rotation.y,
                  _z: camera.rotation.z,
                  _order: camera.rotation.order,
                  isEuler: camera.rotation.isEuler
              }
          },
          model: {
              position: model.position,
              rotation: {
                  _x: model.rotation.x,
                  _y: model.rotation.y,
                  _z: model.rotation.z,
                  _order: model.rotation.order,
                  isEuler: model.rotation.isEuler
              }
          },
          lights: [
              {
                  type: 'PointLight',
                  position: pointLight1.position,
                  color: pointLight1.color.getHex(),
                  intensity: pointLight1.intensity
              },
              {
                  type: 'PointLight2',
                  position: pointLight2.position,
                  color: pointLight2.color.getHex(),
                  intensity: pointLight2.intensity
              },
              {
                  type: 'PointLight3',
                  position: pointLight3.position,
                  color: pointLight3.color.getHex(),
                  intensity: pointLight3.intensity
              },
              {
                  type: 'PointLight4',
                  position: pointLight4.position,
                  color: pointLight4.color.getHex(),
                  intensity: pointLight4.intensity
              },
              {
                  type: 'DirectionalLight',
                  position: directionalLight.position,
                  color: directionalLight.color.getHex(),
                  intensity: directionalLight.intensity
              }
          ]
      };
      console.log(JSON.stringify(sceneSnapshot, null, 2));
      return sceneSnapshot;
  };
    
  const setSceneSettings = (settings) => {
    console.log("Applying scene settings:", settings);

    if (settings.camera) {
        camera.position.set(settings.camera.position.x, settings.camera.position.y, settings.camera.position.z);
        camera.rotation.set(settings.camera.rotation._x, settings.camera.rotation._y, settings.camera.rotation._z, settings.camera.rotation._order);
        camera.rotation.order = settings.camera.rotation._order;
        console.log("Camera position set to:", camera.position);
        console.log("Camera rotation set to:", camera.rotation);
        console.log("Camera rotation order set to:", camera.rotation.order);
    }
    if (settings.model) {
        model.position.set(settings.model.position.x, settings.model.position.y, settings.model.position.z);
        model.rotation.set(settings.model.rotation._x, settings.model.rotation._y, settings.model.rotation._z, settings.model.rotation._order);
        model.rotation.order = settings.model.rotation._order;
        console.log("Model position set to:", model.position);
        console.log("Model rotation set to:", model.rotation);
        console.log("Model rotation order set to:", model.rotation.order);
    }
    if (settings.lights) {
        settings.lights.forEach(light => {
            if (light.type === 'PointLight') {
                pointLight1.position.set(light.position.x, light.position.y, light.position.z);
                pointLight1.color.setHex(light.color);
                pointLight1.intensity = light.intensity;
                console.log("PointLight1 position set to:", pointLight1.position);
                console.log("PointLight1 intensity set to:", pointLight1.intensity);
            }
            if (light.type === 'PointLight2') {
                pointLight2.position.set(light.position.x, light.position.y, light.position.z);
                pointLight2.color.setHex(light.color);
                pointLight2.intensity = light.intensity;
                console.log("PointLight2 position set to:", pointLight2.position);
                console.log("PointLight2 intensity set to:", pointLight2.intensity);
            }
            if (light.type === 'PointLight3') {
                pointLight3.position.set(light.position.x, light.position.y, light.position.z);
                pointLight3.color.setHex(light.color);
                pointLight3.intensity = light.intensity;
                console.log("PointLight3 position set to:", pointLight3.position);
                console.log("PointLight3 intensity set to:", pointLight3.intensity);
            }
            if (light.type === 'PointLight4') {
                pointLight4.position.set(light.position.x, light.position.y, light.position.z);
                pointLight4.color.setHex(light.color);
                pointLight4.intensity = light.intensity;
                console.log("PointLight4 position set to:", pointLight4.position);
                console.log("PointLight4 intensity set to:", pointLight4.intensity);
            }
            if (light.type === 'DirectionalLight') {
                directionalLight.position.set(light.position.x, light.position.y, light.position.z);
                directionalLight.color.setHex(light.color);
                directionalLight.intensity = light.intensity;
                console.log("DirectionalLight position set to:", directionalLight.position);
                console.log("DirectionalLight intensity set to:", directionalLight.intensity);
            }
        });
    }
};

      
    const setupGUI = (model, material) => {
      const gui = new GUI();

      const cameraFolder = gui.addFolder('Camera');
      cameraFolder.add(camera.position, 'x', -10, 10).name('Position X');
      cameraFolder.add(camera.position, 'y', -10, 10).name('Position Y');
      cameraFolder.add(camera.position, 'z', -10, 10).name('Position Z');
      cameraFolder.add(camera.rotation, '_x', -Math.PI, Math.PI).name('Rotation X');
      cameraFolder.add(camera.rotation, '_y', -Math.PI, Math.PI).name('Rotation Y');
      cameraFolder.add(camera.rotation, '_z', -Math.PI, Math.PI).name('Rotation Z');

      const modelFolder = gui.addFolder('Model');
      modelFolder.add(model.position, 'x', -10, 10).name('Position X');
      modelFolder.add(model.position, 'y', -10, 10).name('Position Y');
      modelFolder.add(model.position, 'z', -10, 10).name('Position Z');
      modelFolder.add(model.rotation, '_x', -Math.PI, Math.PI).name('Rotation X');
      modelFolder.add(model.rotation, '_y', -Math.PI, Math.PI).name('Rotation Y');
      modelFolder.add(model.rotation, '_z', -Math.PI, Math.PI).name('Rotation Z');

      const materialFolder = gui.addFolder('Material');
      materialFolder.add(material, 'metalness', 0, 1).name('Metalness');
      materialFolder.add(material, 'roughness', 0, 1).name('Roughness');
      materialFolder.add(material, 'reflectivity', 0, 1).name('Reflectivity');
      materialFolder.add(material, 'clearcoat', 0, 1).name('Clearcoat');
      materialFolder.add(material, 'clearcoatRoughness', 0, 1).name('Clearcoat Roughness');

      const pointLight1Folder = gui.addFolder('Point Light 1');
      pointLight1Folder.add(pointLight1.position, 'x', -10, 10).name('Position X');
      pointLight1Folder.add(pointLight1.position, 'y', -10, 10).name('Position Y');
      pointLight1Folder.add(pointLight1.position, 'z', -10, 10).name('Position Z');
      pointLight1Folder.addColor(pointLight1, 'color').name('Color');
      pointLight1Folder.add(pointLight1, 'intensity', 0, 10).name('Intensity');

      const pointLight2Folder = gui.addFolder('Point Light 2');
      pointLight2Folder.add(pointLight2.position, 'x', -10, 10).name('Position X');
      pointLight2Folder.add(pointLight2.position, 'y', -10, 10).name('Position Y');
      pointLight2Folder.add(pointLight2.position, 'z', -10, 10).name('Position Z');
      pointLight2Folder.addColor(pointLight2, 'color').name('Color');
      pointLight2Folder.add(pointLight2, 'intensity', 0, 10).name('Intensity');

      const pointLight3Folder = gui.addFolder('Point Light 3');
      pointLight3Folder.add(pointLight3.position, 'x', -10, 10).name('Position X');
      pointLight3Folder.add(pointLight3.position, 'y', -10, 10).name('Position Y');
      pointLight3Folder.add(pointLight3.position, 'z', -10, 10).name('Position Z');
      pointLight3Folder.addColor(pointLight3, 'color').name('Color');
      pointLight3Folder.add(pointLight3, 'intensity', 0, 10).name('Intensity');

      const pointLight4Folder = gui.addFolder('Point Light 4');
      pointLight4Folder.add(pointLight4.position, 'x', -10, 10).name('Position X');
      pointLight4Folder.add(pointLight4.position, 'y', -10, 10).name('Position Y');
      pointLight4Folder.add(pointLight4.position, 'z', -10, 10).name('Position Z');
      pointLight4Folder.addColor(pointLight4, 'color').name('Color');
      pointLight4Folder.add(pointLight4, 'intensity', 0, 10).name('Intensity');

      const directionalLightFolder = gui.addFolder('Directional Light');
      directionalLightFolder.add(directionalLight.position, 'x', -10, 10).name('Position X');
      directionalLightFolder.add(directionalLight.position, 'y', -10, 10).name('Position Y');
      directionalLightFolder.add(directionalLight.position, 'z', -10, 10).name('Position Z');
      directionalLightFolder.addColor(directionalLight, 'color').name('Color');
      directionalLightFolder.add(directionalLight, 'intensity', 0, 10).name('Intensity');

      // TextArea for Snapshot
      const snapshotFolder = gui.addFolder('Snapshot');
      const snapshotContainer = document.createElement('div');
      snapshotContainer.style.padding = '10px';
      snapshotContainer.style.width = '100%';
      snapshotContainer.style.display = 'flex';
      snapshotContainer.style.flexDirection = 'column';

      const snapshotTextarea = document.createElement('textarea');
      snapshotTextarea.rows = 5;
      snapshotTextarea.cols = 50;
      snapshotTextarea.style.width = '100%';
      snapshotTextarea.style.height = '100px';

      const takeSnapshotButton = document.createElement('button');
      takeSnapshotButton.textContent = 'Take Snapshot';
      takeSnapshotButton.onclick = () => {
        const snapshot = takeSnapshot();
        snapshotTextarea.value = JSON.stringify(snapshot, null, 2);
      };

      const setSnapshotButton = document.createElement('button');
      setSnapshotButton.textContent = 'Set Snapshot';
      setSnapshotButton.onclick = () => {
        const snapshot = JSON.parse(snapshotTextarea.value);
        setSceneSettings(snapshot);
      };

      snapshotContainer.appendChild(snapshotTextarea);
      snapshotContainer.appendChild(takeSnapshotButton);
      snapshotContainer.appendChild(setSnapshotButton);
      snapshotFolder.domElement.appendChild(snapshotContainer);

      // TextArea for Animation
      const animationFolder = gui.addFolder('Animation');
      const animationContainer = document.createElement('div');
      animationContainer.style.padding = '10px';
      animationContainer.style.width = '100%';
      animationContainer.style.display = 'flex';
      animationContainer.style.flexDirection = 'column';

      const animationTextarea = document.createElement('textarea');
      animationTextarea.rows = 5;
      animationTextarea.cols = 50;
      animationTextarea.style.width = '100%';
      animationTextarea.style.height = '100px';

      const loadAnimationButton = document.createElement('button');
      loadAnimationButton.textContent = 'Load Animation';
      loadAnimationButton.onclick = () => {
        const jsonString = animationTextarea.value;
        loadCameraPath(jsonString);
      };

      animationContainer.appendChild(animationTextarea);
      animationContainer.appendChild(loadAnimationButton);
      animationFolder.domElement.appendChild(animationContainer);

      animationFolder.add({ startRecording }, 'startRecording').name('Start Recording (Shift+R)');
      animationFolder.add({ stopRecording }, 'stopRecording').name('Stop Recording (Shift+S)');
      animationFolder.add({ pauseRecording }, 'pauseRecording').name('Pause Recording (Shift+P)');
      animationFolder.add({ continueRecording }, 'continueRecording').name('Continue Recording (Shift+C)');
      animationFolder.add({ playAnimation }, 'playAnimation').name('Play Animation (Shift+A)');
    };

    const initialSettings = {
      camera: {
        position: {
          x: 8,
          y: 4,
          z: 8
        },
        rotation: {
          isEuler: true,
          _x: 0,
          _y: 0,
          _z: 0,
          _order: "XYZ"
        }
      },
      model: {
        position: {
          x: 0,
          y: -2,
          z: 0
        },
        rotation: {
          isEuler: true,
          _x: 0,
          _y: -1.5707963267948966,
          _z: 0,
          _order: "XYZ"
        }
      },
      lights: [
        {
          type: "PointLight",
          position: {
            x: 5,
            y: 10,
            z: 5
          },
          color: 0xffffff,
          intensity: 1.5
        },
        {
          type: "PointLight2",
          position: {
            x: -5,
            y: 10,
            z: -5
          },
          color: 0xffffff,
          intensity: 1.5
        },
        {
          type: "PointLight3",
          position: {
            x: 5,
            y: -10,
            z: -5
          },
          color: 0xffffff,
          intensity: 1.5
        },
        {
          type: "PointLight4",
          position: {
            x: -5,
            y: -10,
            z: 5
          },
          color: 0xffffff,
          intensity: 1.5
        },
        {
          type: "DirectionalLight",
          position: {
            x: 10,
            y: 20,
            z: 10
          },
          color: 0xffffff,
          intensity: 1.5
        }
      ]
    };

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    init();
  }, []);

  return <div id="animation_container" />;
};

export default GoldenThinkerAnimation;
