import * as THREE from 'three';
import SubjectivePersistentObject from './SubjectivePersistentObject';

class LightsDefault extends SubjectivePersistentObject{

    constructor(subjective_scene,developerMode=false){
        super(developerMode);

        this.subjective_scene = subjective_scene;
        this.developerMode = developerMode;
        this.threejs_scene = subjective_scene.get_threejs_scene();
        this.pointLights = [];
        this.directionalLight = null;
        this.setup();
        const light = new THREE.PointLight(0xffffff, 1.5);
        light.position.set(10, 10, 10);
        this.threejs_scene.add(light);
        this.pointLights.forEach((element,index) => {
            
            // element.position.lerpVectors(this.pointLights[index].position, endLights[index].position, alpha);
            // this.pointLights[index].intensity = THREE.MathUtils.lerp(startLights[index].intensity, endLights[index].intensity, alpha);
            this.pointLights[index].position.set(light.position.x, light.position.y, light.position.z);
            this.pointLights[index].color.setHex(light.color);
            this.pointLights[index].intensity = light.intensity;
            console.log("PointLight " + index +"intensity set to:", this.pointLights[index].intensity);
            this.threejs_scene.add(element);
        });

        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(5, 5, 5); // Adjust the position to point at the text
        spotLight.target.position.set(3, 2, 0); // The same position as the text
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 0.1;
        spotLight.decay = 2;
        spotLight.distance = 50;
        spotLight.castShadow = true;
        this.threejs_scene.add(spotLight);
        this.threejs_scene.add(spotLight.target);

        this.threejs_scene.add(this.directionalLight);
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
    
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(10, 20, 10);
        this.directionalLight = directionalLight;
    
    };



}

export default LightsDefault;