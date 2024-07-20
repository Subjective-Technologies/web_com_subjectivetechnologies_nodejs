import * as THREE from 'three';
import SubjectivePersistentObject from './SubjectivePersistentObject';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import trackProperties from '../developermode/trackProperties';
import SubjectiveDynamicDebugUi from '../developermode/SubjectiveDynamicDebugUi';

class SubjectiveSceneThree extends SubjectivePersistentObject {
  constructor(developerMode = false) {
    super(developerMode); // Set the name property
    this.developerMode = developerMode;

    console.log('Initializing SubjectiveSceneThree...');

    // Initialize debug UI first
    this.debugUi = new SubjectiveDynamicDebugUi();
    
    // Track camera configuration properties
    const cameraConfig = trackProperties({
      fov: 75,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1000
    }, 'cameraConfig', this.debugUi.updateUi);

    // Track camera properties
    this.camera = trackProperties(
      new THREE.PerspectiveCamera(
        cameraConfig.fov,
        cameraConfig.aspect,
        cameraConfig.near,
        cameraConfig.far
      ),
      'camera', this.debugUi.updateUi
    );
    this.camera.position.set(0, 0, 10);

    // Track renderer properties
    this.renderer = trackProperties(new THREE.WebGLRenderer(), 'renderer', this.debugUi.updateUi);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.zIndex = '0'; // Ensure it is behind CSS3DRenderer

    // Track scene properties
    this.threejs_scene = trackProperties(new THREE.Scene(), 'threejs_scene', this.debugUi.updateUi);

    if (this.developerMode) {
      const axesHelper = new THREE.AxesHelper(10);
      this.threejs_scene.add(axesHelper);
      this.addGridHelper();
    }

    this.my_objects = trackProperties([], 'SubjectiveSceneThree_my_objects', this.debugUi.updateUi); // Track objects in the scene

    this.animate = this.animate.bind(this); // Ensure correct context for 'this'
    requestAnimationFrame(this.animate);
    this.renderer.setAnimationLoop(this.animate);

    // Track control properties
    const controls = trackProperties(new OrbitControls(this.camera, this.renderer.domElement), 'controls', this.debugUi.updateUi);
    controls.target.set(0, 0, 0);
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 5;
    controls.maxDistance = 20;

    this.addLights();
    
    // Build GUI from global dictionary
    this.debugUi.buildGuiFromGlobalDictionary();
  }

  add_objects(subjective_persistent_object) {
    let three_js_objects = subjective_persistent_object.getObject3D();
    if (Array.isArray(three_js_objects)) {
      console.log('Adding multiple objects to scene:', three_js_objects);
      three_js_objects.forEach((elem) => {
        console.log('Adding element to scene:', elem);
        this.threejs_scene.add(elem);
      });
    } else {
      console.log('Adding single object to scene:', three_js_objects);
      this.threejs_scene.add(three_js_objects);
    }
  }

  addGridHelper() {
    const size = 10;
    const divisions = 10;
    const gridHelper = trackProperties(new THREE.GridHelper(size, divisions), 'gridHelper', this.debugUi.updateUi);
    this.threejs_scene.add(gridHelper);
  }

  addLights() {
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
    console.log('Added initial spotLight:', spotLight);
  }

  animate() {
    if (this.developerMode && this.cube) {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }

    // Update objects in the scene
    this.my_objects.forEach(obj => {
      if (obj.update) obj.update();
    });

    this.renderer.render(this.get_threejs_scene(), this.get_threejs_camera());
  }

  getObject3D() {
    return this.get_threejs_scene();
  }

  get_threejs_scene() {
    return this.threejs_scene;
  }

  get_threejs_camera() {
    return this.camera;
  }

  get_threejs_renderer() {
    return this.renderer;
  }
}

export default SubjectiveSceneThree;
