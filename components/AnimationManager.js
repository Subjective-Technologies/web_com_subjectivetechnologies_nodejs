import * as THREE from 'three';

class AnimationManager {
  constructor(cameraManager, lightManager) {
    this.cameraManager = cameraManager;
    this.lightManager = lightManager;
    this.recording = false;
    this.recordingPaused = false;
    this.cameraPath = [];
    this.lastTimestamp = null;
    this.playbackIndex = 0;
    this.playbackSpeed = 0.1;
    this.textarea = null;
  }

  setTextarea(textarea) {
    this.textarea = textarea;
  }


  startRecording = () => {
    this.recording = true;
    this.recordingPaused = false;
    this.cameraPath = [];
    this.lastTimestamp = null;
    console.log("Recording started");
  }

  stopRecording = () => {
    this.recording = false;
    this.recordingPaused = false;
    console.log("Recording stopped");
    console.log(this.cameraPath); // Print the camera path to the console
    this.exportCameraPath();
  }

  pauseRecording = () => {
    this.recordingPaused = true;
    console.log("Recording paused");
  }

  continueRecording = () => {
    this.recordingPaused = false;
    console.log("Recording continued");
  }

  exportCameraPath = () => {
    const serializedPath = this.cameraPath.map(point => ({
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

  loadCameraPath = (jsonString) => {
    const loadedPath = JSON.parse(jsonString);
    this.cameraPath = loadedPath.map(point => ({
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

  playAnimation = () => {
    if (this.cameraPath.length === 0) {
      console.log("No recorded animation to play.");
      return;
    }

    this.playbackIndex = 0;
    const animatePlayback = () => {
      if (this.playbackIndex < this.cameraPath.length - 1) {
        const { camera: startCam, lights: startLights } = this.cameraPath[this.playbackIndex];
        const { camera: endCam, lights: endLights } = this.cameraPath[this.playbackIndex + 1];
        const alpha = this.playbackSpeed;

        this.cameraManager.camera.position.lerpVectors(startCam.position, endCam.position, alpha);
        this.cameraManager.camera.quaternion.slerpQuaternions(
          new THREE.Quaternion().setFromEuler(startCam.rotation),
          new THREE.Quaternion().setFromEuler(endCam.rotation),
          alpha
        );

        this.lightManager.pointLights.forEach((light, index) => {
          light.position.lerpVectors(startLights[index].position, endLights[index].position, alpha);
          light.intensity = THREE.MathUtils.lerp(startLights[index].intensity, endLights[index].intensity, alpha);
        });
        this.lightManager.directionalLight.position.lerpVectors(startLights[4].position, endLights[4].position, alpha);
        this.lightManager.directionalLight.intensity = THREE.MathUtils.lerp(startLights[4].intensity, endLights[4].intensity, alpha);

        this.playbackIndex += this.playbackSpeed;
        requestAnimationFrame(animatePlayback);
      } else {
        this.playbackIndex = 0;
      }
    }
    animatePlayback();
  }

  record = (clock) => {
    if (this.recording && !this.recordingPaused) {
      const timestamp = clock.getElapsedTime();
      if (!this.lastTimestamp) this.lastTimestamp = timestamp;
      const elapsed = timestamp - this.lastTimestamp;
      if (elapsed > 0.1) { // Record every 100ms
        this.cameraPath.push({
          camera: {
            position: this.cameraManager.camera.position.clone(),
            rotation: this.cameraManager.camera.rotation.clone(),
          },
          lights: this.lightManager.pointLights.map(light => ({
            position: light.position.clone(),
            intensity: light.intensity
          })).concat([{
            position: this.lightManager.directionalLight.position.clone(),
            intensity: this.lightManager.directionalLight.intensity
          }])
        });
        this.lastTimestamp = timestamp;
      }
    }
  }
}

export default AnimationManager;
