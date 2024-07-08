import * as THREE from 'three';

class CameraManager {
  constructor(scene) {
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
    this.camera.position.set(8, 4, 8);
    scene.add(this.camera);
  }

  init() {
    // Any additional initialization logic can go here
  }
}

export default CameraManager;
