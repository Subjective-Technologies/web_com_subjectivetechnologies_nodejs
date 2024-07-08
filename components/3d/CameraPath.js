export function exportCameraPath(cameraPath) {
    const serializedPath = cameraPath.map(point => ({
      camera: {
        position: {
          x: point.camera.position.x,
          y: point.camera.position.y,
          z: point.camera.position.z
        },
        rotation: {
          x: point.camera.rotation.x,
          y: point.camera.rotation.y,
          z: point.camera.rotation.z
        }
      },
      lights: point.lights.map(light => ({
        position: {
          x: light.position.x,
          y: light.position.y,
          z: light.position.z
        },
        intensity: light.intensity
      }))
    }));
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(serializedPath));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "camera_path.json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
  
  export function loadCameraPath(jsonString) {
    const loadedPath = JSON.parse(jsonString);
    return loadedPath.map(point => ({
      camera: {
        position: new THREE.Vector3(point.camera.position.x, point.camera.position.y, point.camera.position.z),
        rotation: new THREE.Euler(point.camera.rotation.x, point.camera.rotation.y, point.camera.rotation.z)
      },
      lights: point.lights.map(light => ({
        position: new THREE.Vector3(light.position.x, light.position.y, light.position.z),
        intensity: light.intensity
      }))
    }));
  }
  