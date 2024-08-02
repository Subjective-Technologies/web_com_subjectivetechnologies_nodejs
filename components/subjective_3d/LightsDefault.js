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
    this.addPointLight(new THREE.Vector3(10, 10, 10), 5);
    this.addPointLight(new THREE.Vector3(-10, 10, 10), 5);
    this.addPointLight(new THREE.Vector3(10, -10, 10), 5);
    this.addPointLight(new THREE.Vector3(-10, -10, 10), 5);
    this.addPointLight(new THREE.Vector3(0, 5, -10), 5);
    this.addPointLight(new THREE.Vector3(0, -5, 10), 5);

    // Additional spotlights with increased intensity
    this.addSpotLight(new THREE.Vector3(0, 10, 10), new THREE.Vector3(0, 0, 0), 5);
    this.addSpotLight(new THREE.Vector3(5, 10, 0), new THREE.Vector3(0, 0, 0), 5);
    this.addSpotLight(new THREE.Vector3(-5, 10, 0), new THREE.Vector3(0, 0, 0), 5);

    // More point lights around the statue
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const x = Math.cos(angle) * 15;
      const z = Math.sin(angle) * 15;
      this.addPointLight(new THREE.Vector3(x, 5, z), 5);
    }

    // Add dynamic point lights
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const x = Math.cos(angle) * 20;
      const z = Math.sin(angle) * 20;
      this.addDynamicPointLight(new THREE.Vector3(x, 10, z), 3);
    }
  }

  addPointLight(position, intensity) {
    const pointLight = new THREE.PointLight(0xffffff, intensity, 100);
    pointLight.position.copy(position);
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 2048;  // Increase shadow map size for better quality
    pointLight.shadow.mapSize.height = 2048;
    console.log("PointLight:", pointLight);  // Log properties
    this.scene.add(pointLight);
    this.lights.push(pointLight);
  }

  addSpotLight(position, targetPosition, intensity) {
    const spotLight = new THREE.SpotLight(0xffffff, intensity);
    spotLight.position.copy(position);
    spotLight.target.position.copy(targetPosition);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 2048;  // Increase shadow map size for better quality
    spotLight.shadow.mapSize.height = 2048;
    this.scene.add(spotLight);
    this.scene.add(spotLight.target);
    console.log("SpotLight:", spotLight);  // Log properties
    this.lights.push(spotLight);
    this.lights.push(spotLight.target);
  }

  addDynamicPointLight(position, intensity) {
    const pointLight = new THREE.PointLight(0xffffff, intensity, 100);
    pointLight.position.copy(position);
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 2048;
    pointLight.shadow.mapSize.height = 2048;
    this.dynamicLightsGroup.add(pointLight);
    this.lights.push(pointLight);
  }

  animateDynamicLights(time) {
    // Rotate dynamic lights around the statue
    this.dynamicLightsGroup.rotation.y += time * 0.1;
  }

  getObject3D() {
    return this.lights;
  }

  update(time) {
    this.animateDynamicLights(time);
  }
}

export default LightsDefault;
