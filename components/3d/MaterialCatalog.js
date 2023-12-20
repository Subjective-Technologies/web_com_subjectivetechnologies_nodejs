class MaterialCatalog {
    constructor() {
      if (!MaterialCatalog.instance) {
        this.materials = {};
        MaterialCatalog.instance = this;
      }
  
      return MaterialCatalog.instance;
    }
  
    addMaterial(name, material) {
      if (!this.materials[name]) {
        this.materials[name] = material;
        console.log(`Material "${name}" added to the catalog.`);
      } else {
        console.log(`Material "${name}" already exists in the catalog.`);
      }
    }
  
    getMaterial(name) {
      const material = this.materials[name];
      if (material) {
        console.log(`Material "${name}" loaded from the catalog.`);
        return material;
      } else {
        console.log(`Material "${name}" not found in the catalog.`);
        return null;
      }
    }
  
    listMaterials() {
      return Object.keys(this.materials);
    }
  }

export default MaterialCatalog;
  
  // Create a singleton instance of the MaterialCatalog
//   const materialCatalog = new MaterialCatalog();
  
  // Example usage:
/*   const material1 = { color: 'red', roughness: 0.5 };
  const material2 = { color: 'blue', roughness: 0.3 };
  
  materialCatalog.addMaterial('Material1', material1);
  materialCatalog.addMaterial('Material2', material2);
  
  const loadedMaterial1 = materialCatalog.getMaterial('Material1');
  const loadedMaterial3 = materialCatalog.getMaterial('Material3');
  
  console.log('List of materials:', materialCatalog.listMaterials()); */
  