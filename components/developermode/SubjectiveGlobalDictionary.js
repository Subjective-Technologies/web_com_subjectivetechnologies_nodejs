// components/developermode/SubjectiveGlobalDictionary.js

const globalDictionary = new Map();

export default {
  set: (className, prop, value) => {
    const key = `${className}_${prop}`;
    globalDictionary.set(key, value);
  },
  get: (key) => globalDictionary.get(key),
  getAll: () => Array.from(globalDictionary.entries()).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {})
};
