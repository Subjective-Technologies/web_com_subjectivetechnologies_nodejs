import * as THREE from 'three';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class LightsDefault extends SubjectivePersistentObject {
  constructor(subjective_scene, developerMode = false) {
    super(developerMode);

    this.subjective_scene = subjective_scene;
    this.developerMode = developerMode;
    this.threejs_scene = subjective_scene.get_threejs_scene();
    this.pointLights = [];
    this.directionalLight = null;
    this.setup();

    this.pointLights.forEach((light) => {
      // Ensure lights only affect objects in layer 0
      light.layers.enable(0);
      this.threejs_scene.add(light);
    });

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(5, 5, 5);
    spotLight.target.position.set(3, 2, 0);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.1;
    spotLight.decay = 2;
    spotLight.distance = 50;
    spotLight.castShadow = true;
    // Ensure spot light only affects objects in layer 0
    spotLight.layers.enable(0);
    this.threejs_scene.add(spotLight);
    this.threejs_scene.add(spotLight.target);

    if (this.directionalLight) {
      // Ensure directional light only affects objects in layer 0
      this.directionalLight.layers.enable(0);
      this.threejs_scene.add(this.directionalLight);
    }
  }

  setup = () => {
    const pointLight1 = new THREE.PointLight(0xffffff, 1.5);
    pointLight1.position.set(5, 10, 5);
    this.pointLights.push(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1.5);
    pointLight2.position.set(-5, 10, -5);
    this.pointLights.push(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 1.5);
    pointLight3.position.set(5, -10, -5);
    this.pointLights.push(pointLight3);

    const pointLight4 = new THREE.PointLight(0xffffff, 1.5);
    pointLight4.position.set(-5, -10, 5);
    this.pointLights.push(pointLight4);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    this.directionalLight.position.set(10, 20, 10);
  };
}

export default LightsDefault;
