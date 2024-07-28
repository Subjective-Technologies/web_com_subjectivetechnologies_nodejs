import GUI from 'lil-gui';

class SubjectiveDynamicDebugUi {
  constructor() {
    this.gui = new GUI();
  }

  buildGuiFromGlobalDictionary() {
    // Your existing code for building the GUI from a global dictionary
  }

  updateUi() {
    // Your existing code for updating the UI
  }

  setup(scene, camera, model, material, lights) {
    const cameraFolder = this.gui.addFolder('Camera');
    cameraFolder.add(camera.position, 'x', -10, 10).name('Position X');
    cameraFolder.add(camera.position, 'y', -10, 10).name('Position Y');
    cameraFolder.add(camera.position, 'z', -10, 10).name('Position Z');
    cameraFolder.add(camera.rotation, 'x', -Math.PI, Math.PI).name('Rotation X');
    cameraFolder.add(camera.rotation, 'y', -Math.PI, Math.PI).name('Rotation Y');
    cameraFolder.add(camera.rotation, 'z', -Math.PI, Math.PI).name('Rotation Z');
    cameraFolder.add(camera, 'visible').name('Visible');

    if (model) {
      const modelFolder = this.gui.addFolder('Model');
      modelFolder.add(model.position, 'x', -10, 10).name('Position X');
      modelFolder.add(model.position, 'y', -10, 10).name('Position Y');
      modelFolder.add(model.position, 'z', -10, 10).name('Position Z');
      modelFolder.add(model.rotation, 'x', -Math.PI, Math.PI).name('Rotation X');
      modelFolder.add(model.rotation, 'y', -Math.PI, Math.PI).name('Rotation Y');
      modelFolder.add(model.rotation, 'z', -Math.PI, Math.PI).name('Rotation Z');
      modelFolder.add(model, 'visible').name('Visible');
    }

    if (material) {
      const materialFolder = this.gui.addFolder('Material');
      materialFolder.add(material, 'metalness', 0, 1).name('Metalness');
      materialFolder.add(material, 'roughness', 0, 1).name('Roughness');
      materialFolder.add(material, 'reflectivity', 0, 1).name('Reflectivity');
      materialFolder.add(material, 'clearcoat', 0, 1).name('Clearcoat');
      materialFolder.add(material, 'clearcoatRoughness', 0, 1).name('Clearcoat Roughness');
    }

    if (lights) {
      lights.forEach((light, index) => {
        const lightFolder = this.gui.addFolder(`Light ${index + 1}`);
        lightFolder.add(light.position, 'x', -10, 10).name('Position X');
        lightFolder.add(light.position, 'y', -10, 10).name('Position Y');
        lightFolder.add(light.position, 'z', -10, 10).name('Position Z');
        lightFolder.addColor(light, 'color').name('Color');
        lightFolder.add(light, 'intensity', 0, 10).name('Intensity');
        lightFolder.add(light, 'visible').name('Visible');
      });
    }
  }
}

export default SubjectiveDynamicDebugUi;
