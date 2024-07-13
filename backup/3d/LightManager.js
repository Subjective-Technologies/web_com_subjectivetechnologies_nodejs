import * as THREE from 'three';

class LightManager {
  constructor(scene) {
    this.scene = scene;
    this.pointLights = [];
    this.directionalLight = null;
  }

  init() {
    const pointLight1 = new THREE.PointLight(0xffffff, 1.5);
    pointLight1.position.set(5, 10, 5);
    this.scene.add(pointLight1);
    this.pointLights.push(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1.5);
    pointLight2.position.set(-5, 10, -5);
    this.scene.add(pointLight2);
    this.pointLights.push(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 1.5);
    pointLight3.position.set(5, -10, -5);
    this.scene.add(pointLight3);
    this.pointLights.push(pointLight3);

    const pointLight4 = new THREE.PointLight(0xffffff, 1.5);
    pointLight4.position.set(-5, -10, 5);
    this.scene.add(pointLight4);
    this.pointLights.push(pointLight4);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(10, 20, 10);
    this.scene.add(directionalLight);
    this.directionalLight = directionalLight;
  }
}

export default LightManager;
