import * as THREE from 'three';
import SubjectivePersistentObject from './SubjectivePersistentObject';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import trackProperties from '../developermode/trackProperties';
import SubjectiveDynamicDebugUi from '../developermode/SubjectiveDynamicDebugUi';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';

class SubjectiveSceneThree extends SubjectivePersistentObject {
  constructor(developerMode = false, containerRef) {
    super(developerMode); // Set the name property
    this.developerMode = developerMode;
    this.containerRef = containerRef;

    // Initialize and load the UI if developerMode is true
    if (this.developerMode) {
      // Initialize debug UI first
      this.debugUi = new SubjectiveDynamicDebugUi();
    }

    // Track renderer properties
    this.renderer = trackProperties(new THREE.WebGLRenderer(), 'renderer', this.debugUi.updateUi);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.zIndex = '0'; // Ensure it is behind CSS3DRenderer

    if (this.containerRef && this.containerRef.current) {
      this.containerRef.current.appendChild(this.renderer.domElement);
    } else {
      console.error('Container reference is not defined or not a valid DOM element.');
    }

    // Camera code
    const cameraConfig = trackProperties({
      fov: 75,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1000
    }, 'cameraConfig');

    this.camera = trackProperties(
      new THREE.PerspectiveCamera(
        cameraConfig.fov,
        cameraConfig.aspect,
        cameraConfig.near,
        cameraConfig.far
      ),
      'camera'
    );
    this.camera.layers.enable(0);
    this.camera.position.set(0, 0, 10);

    const bloomPass = trackProperties(
      new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5, // Strength
        0.4, // Radius
        0.85 // Threshold
      ),
      'bloomPass'
    );

    const renderScene = trackProperties(new RenderPass(this.get_threejs_scene(), this.camera), 'renderScene');

    this.composer = trackProperties(new EffectComposer(this.renderer), 'composer');
    this.composer.addPass(renderScene);
    this.composer.addPass(bloomPass);

    const outlinePass = trackProperties(
      new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.get_threejs_scene(), this.camera),
      'outlinePass'
    );
    outlinePass.edgeStrength = 2.5;
    outlinePass.edgeGlow = 0.0;
    outlinePass.edgeThickness = 1.0;
    outlinePass.pulsePeriod = 0;
    outlinePass.visibleEdgeColor.set('#ffffff');
    outlinePass.hiddenEdgeColor.set('#190a05');
    this.composer.addPass(outlinePass);

    // Track scene properties
    this.threejs_scene = trackProperties(new THREE.Scene(), 'threejs_scene', this.debugUi.updateUi);
    console.log(this.threejs_scene); // Log the entire scene graph

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
    this.controls = trackProperties(new OrbitControls(this.camera, this.renderer.domElement), 'controls', this.debugUi.updateUi);
    this.controls.target.set(0, 0, 0);
    this.controls.maxPolarAngle = Math.PI * 0.5;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 20;
    this.controls.enableDamping = true;

    // Build GUI from global dictionary
    this.debugUi.buildGuiFromGlobalDictionary();

    // Initialize model and material (to be set later)
    this.model = null;
    this.material = null;
    this.lights = [];
  }

  add_objects(subjective_persistent_object) {
    let three_js_objects = subjective_persistent_object.getObject3D();
    if (Array.isArray(three_js_objects)) {
      three_js_objects.forEach((elem) => {
        this.threejs_scene.add(elem);
      });
    } else {
      this.threejs_scene.add(three_js_objects);
    }
  }

  addGridHelper() {
    const size = 10;
    const divisions = 10;
    const gridHelper = trackProperties(new THREE.GridHelper(size, divisions), 'gridHelper', this.debugUi.updateUi);
    this.threejs_scene.add(gridHelper);
  }

  addAxesHelper() {
    const axesHelper = new THREE.AxesHelper(10);
    this.threejs_scene.add(axesHelper);
  }

  addLights() {
    // Default lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    this.threejs_scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    this.threejs_scene.add(directionalLight);

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

    // Track lights
    this.lights.push(ambientLight, directionalLight, spotLight);
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

    this.controls.update(); // Ensure controls are updated
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

  setSize(width, height) {
    this.renderer.setSize(width, height);
  }

  setCameraPosition(position) {
    this.camera.position.set(position.x, position.y, position.z);
  }

  updateCameraAspect(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  setupGUI() {
    if (this.debugUi) {
      this.debugUi.setup(this.threejs_scene, this.camera, this.model, this.material, this.lights);
    }
  }

  dispose() {
    this.renderer.dispose();
    this.composer.dispose();
  }
}

export default SubjectiveSceneThree;
