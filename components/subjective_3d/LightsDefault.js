import * as THREE from 'three';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class LightsDefault extends SubjectivePersistentObject {
  constructor(scene, developerMode) {
    super(developerMode);
    this.scene = scene.get_threejs_scene();
    this.developerMode = developerMode;
    this.lights = [];
    this.init();
  }

  init() {
    const ambientLight = new THREE.AmbientLight(0x404040);
    this.lights.push(ambientLight);

    // Add point lights
    this.addPointLight(new THREE.Vector3(10, 10, 10));
    this.addPointLight(new THREE.Vector3(-10, 10, 10));
    this.addPointLight(new THREE.Vector3(10, -10, 10));
    this.addPointLight(new THREE.Vector3(-10, -10, 10));

    // Additional light for the statue
    this.addSpotLight(new THREE.Vector3(0, 10, 10), new THREE.Vector3(-3, 0, 0));
  }

  addPointLight(position) {
    console.log('Creating PointLight at position:', position);
    const pointLight = new THREE.PointLight(0xffffff, 1, 50);
    pointLight.position.copy(position);
    this.lights.push(pointLight);
  }

  addSpotLight(position, targetPosition) {
    console.log('Creating SpotLight at position:', position, 'with target:', targetPosition);
    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.copy(position);
    spotLight.target.position.copy(targetPosition);
    this.lights.push(spotLight);
    this.lights.push(spotLight.target);
  }

  getObject3D() {
    console.log('Returning lights:', this.lights);
    return this.lights;
  }
}

export default LightsDefault;
