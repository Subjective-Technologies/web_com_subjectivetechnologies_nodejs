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
    // Add point lights with increased intensity
    this.addPointLight(new THREE.Vector3(10, 10, 10), 2);
    this.addPointLight(new THREE.Vector3(-10, 10, 10), 2);
    this.addPointLight(new THREE.Vector3(10, -10, 10), 2);
    this.addPointLight(new THREE.Vector3(-10, -10, 10), 2);

    // Additional light for the statue with increased intensity
    this.addSpotLight(new THREE.Vector3(0, 10, 10), new THREE.Vector3(-3, 0, 0), 2);
  }

  addPointLight(position, intensity) {
    const pointLight = new THREE.PointLight(0xffffff, intensity, 50);
    pointLight.position.copy(position);
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 2048;  // Increase shadow map size for better quality
    pointLight.shadow.mapSize.height = 2048;
    console.log("PointLight:", pointLight);  // Log properties
    this.lights.push(pointLight);
  }

  addSpotLight(position, targetPosition, intensity) {
    const spotLight = new THREE.SpotLight(0xffffff, intensity);
    spotLight.position.copy(position);
    spotLight.target.position.copy(targetPosition);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 2048;  // Increase shadow map size for better quality
    spotLight.shadow.mapSize.height = 2048;
    console.log("SpotLight:", spotLight);  // Log properties
    this.lights.push(spotLight);
    this.lights.push(spotLight.target);
  }

  getObject3D() {
    return this.lights;
  }
}

export default LightsDefault;
