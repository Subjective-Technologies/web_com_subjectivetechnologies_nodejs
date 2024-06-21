import os

def apply_patch(filename):
    with open(filename, 'r') as file:
        content = file.readlines()

    # Define the changes to be applied
    material_change = "        const sphereMaterial = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide, toneMapped: true, color: 0xAAAAAA, opacity: 0.8, transparent: true });\n"
    shader_pass_change = """        const contrastPass = new ShaderPass(BrightnessContrastShader);
        contrastPass.uniforms["contrast"].value = 1.5;
        contrastPass.uniforms["brightness"].value = -0.1;
        composer.addPass(contrastPass);\n"""

    text_geometry_code = """
        // Add text beside the statue
        const loader = new THREE.FontLoader();
        loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
            const textGeometry = new THREE.TextGeometry('Subjective Technologies', {
                font: font,
                size: 1,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            });
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(10, 5, 0); // Adjust position as needed
            scene.add(textMesh);
        });
    """
    
    # Add text geometry code after the statue is loaded
    for i, line in enumerate(content):
        if 'scene.add(model);' in line:
            content.insert(i + 1, text_geometry_code)
            break  # Add the text geometry code only once after the statue is added to the scene
    
    # Apply the changes
    for i, line in enumerate(content):
        if 'const sphereMaterial = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide });' in line:
            content[i] = material_change
        if 'composer.addPass(outputPass);' in line:
            content.insert(i + 1, shader_pass_change)
            break  # Add the shader pass code only once after the output pass

    # Write the changes back to the file
    with open(filename, 'w') as file:
        file.writelines(content)

    print(f"Changes applied successfully to {filename}")

if __name__ == "__main__":
    filename = "/brainboost/brainboost_marketing/marketing_web/web_com_subjectivetechnologies_nodejs/components/GoldenThinkerAnimation.js"
    apply_patch(filename)
