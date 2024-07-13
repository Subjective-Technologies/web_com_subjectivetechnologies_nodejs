class SnapshotManager {
  constructor(cameraManager, modelManager, lightManager) {
    this.cameraManager = cameraManager;
    this.modelManager = modelManager;
    this.lightManager = lightManager;
    this.textarea = null;
  }

  setTextarea(textarea) {
    this.textarea = textarea;
  }

  takeSnapshot() {
    const snapshot = {
      camera: {
        position: this.cameraManager.camera.position,
        rotation: this.cameraManager.camera.rotation
      },
      model: {
        position: this.modelManager.model.position,
        rotation: this.modelManager.model.rotation
      },
      lights: this.lightManager.pointLights.map(light => ({
        type: 'PointLight',
        position: light.position,
        color: light.color.getHex(),
        intensity: light.intensity
      })).concat({
        type: 'DirectionalLight',
        position: this.lightManager.directionalLight.position,
        color: this.lightManager.directionalLight.color.getHex(),
        intensity: this.lightManager.directionalLight.intensity
      })
    };

    const snapshotJSON = JSON.stringify(snapshot, null, 2);

    if (this.textarea) {
      this.textarea.value = snapshotJSON;
    }

    return snapshot;
  }

  setSnapshot() {
    if (!this.textarea) {
      console.error('Textarea is not set');
      return;
    }

    const jsonString = this.textarea.value;
    const snapshot = JSON.parse(jsonString);

    this.cameraManager.camera.position.set(snapshot.camera.position.x, snapshot.camera.position.y, snapshot.camera.position.z);
    this.cameraManager.camera.rotation.set(snapshot.camera.rotation._x, snapshot.camera.rotation._y, snapshot.camera.rotation._z);

    this.modelManager.model.position.set(snapshot.model.position.x, snapshot.model.position.y, snapshot.model.position.z);
    this.modelManager.model.rotation.set(snapshot.model.rotation._x, snapshot.model.rotation._y, snapshot.model.rotation._z);

    snapshot.lights.forEach((light, index) => {
      if (light.type === 'PointLight') {
        this.lightManager.pointLights[index].position.set(light.position.x, light.position.y, light.position.z);
        this.lightManager.pointLights[index].color.setHex(light.color);
        this.lightManager.pointLights[index].intensity = light.intensity;
      } else if (light.type === 'DirectionalLight') {
        this.lightManager.directionalLight.position.set(light.position.x, light.position.y, light.position.z);
        this.lightManager.directionalLight.color.setHex(light.color);
        this.lightManager.directionalLight.intensity = light.intensity;
      }
    });
  }
}

export default SnapshotManager;
