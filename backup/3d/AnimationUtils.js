import * as THREE from 'three';

let recording = false;
let recordingPaused = false;
let cameraPath = [];
let lastTimestamp = null;
let playbackIndex = 0;
const playbackSpeed = 0.1; // Adjust this for smoother transitions

export function startRecording() {
  recording = true;
  recordingPaused = false;
  cameraPath = [];
  lastTimestamp = null;
  console.log("Recording started");
}

export function stopRecording() {
  recording = false;
  recordingPaused = false;
  console.log("Recording stopped");
  console.log(cameraPath); // Print the camera path to the console
  exportCameraPath();
}

export function pauseRecording() {
  recordingPaused = true;
  console.log("Recording paused");
}

export function continueRecording() {
  recordingPaused = false;
  console.log("Recording continued");
}

export function exportCameraPath() {
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

export function loadCameraPath(jsonString) {
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

export function playAnimation(playbackDirection = 1, camera, pointLights, directionalLight) {
  if (cameraPath.length === 0) {
    console.log("No recorded animation to play.");
    return;
  }

  playbackIndex = Math.min(Math.max(playbackIndex, 0), cameraPath.length - 2);

  function animatePlayback() {
    if (playbackIndex < cameraPath.length - 1 && playbackIndex >= 0) {
      const { camera: startCam, lights: startLights } = cameraPath[Math.floor(playbackIndex)];
      const { camera: endCam, lights: endLights } = cameraPath[Math.ceil(playbackIndex)];
      const alpha = playbackIndex % 1;

      if (!startCam || !endCam) {
        console.error("startCam or endCam is undefined", { startCam, endCam });
        return;
      }

      camera.position.lerpVectors(startCam.position, endCam.position, alpha);
      camera.quaternion.slerpQuaternions(
        new THREE.Quaternion().setFromEuler(startCam.rotation),
        new THREE.Quaternion().setFromEuler(endCam.rotation),
        alpha
      );

      pointLights[0].position.lerpVectors(startLights[0].position, endLights[0].position, alpha);
      pointLights[0].intensity = THREE.MathUtils.lerp(startLights[0].intensity, endLights[0].intensity, alpha);
      pointLights[1].position.lerpVectors(startLights[1].position, endLights[1].position, alpha);
      pointLights[1].intensity = THREE.MathUtils.lerp(startLights[1].intensity, endLights[1].intensity, alpha);
      pointLights[2].position.lerpVectors(startLights[2].position, endLights[2].position, alpha);
      pointLights[2].intensity = THREE.MathUtils.lerp(startLights[2].intensity, endLights[2].intensity, alpha);
      pointLights[3].position.lerpVectors(startLights[3].position, endLights[3].position, alpha);
      pointLights[3].intensity = THREE.MathUtils.lerp(startLights[3].intensity, endLights[3].intensity, alpha);
      directionalLight.position.lerpVectors(startLights[4].position, endLights[4].position, alpha);
      directionalLight.intensity = THREE.MathUtils.lerp(startLights[4].intensity, endLights[4].intensity, alpha);

      playbackIndex += playbackDirection * playbackSpeed;
      requestAnimationFrame(animatePlayback);
    } else {
      playbackIndex = playbackDirection > 0 ? 0 : cameraPath.length - 1;
      requestAnimationFrame(animatePlayback);
    }
  }
  animatePlayback();
}
