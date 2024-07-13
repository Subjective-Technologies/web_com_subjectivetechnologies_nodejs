class SubjectiveGlobalDictionary {
    constructor() {
      if (!SubjectiveGlobalDictionary.instance) {
        this.global_dictionary = {};
        SubjectiveGlobalDictionary.instance = this;
      }
      return SubjectiveGlobalDictionary.instance;
    }
  
    set(from_class, line_num, var_name, value) {
      this.global_dictionary[`${from_class}_${line_num}_${var_name}`] = value;
    }
  
    get(from_class, line_num, var_name) {
      return this.global_dictionary[`${from_class}_${line_num}_${var_name}`];
    }
  }
  
  // Ensure only one instance is created
  const global_dictionary = new SubjectiveGlobalDictionary();

  global_dictionary.set('SubjectivePersistentObject_8_snapshots',[]);
  global_dictionary.set('SubjectivePersistentObject_8_snapshots',false);
  global_dictionary.set('SubjectivePersistentObject_8_snapshots',false);
  global_dictionary.set('SubjectivePersistentObject_8_snapshots',0);
  global_dictionary.set('SubjectivePersistentObject_8_snapshots',null);



  export default global_dictionary;
  