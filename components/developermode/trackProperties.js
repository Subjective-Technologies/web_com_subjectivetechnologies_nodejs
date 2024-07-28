console.log('Loading trackProperties.js');
import globalDictionary from './SubjectiveGlobalDictionary';

function trackProperties(obj, className, onChangeCallback) {
  const handler = {
    get(target, prop) {
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      globalDictionary.set(className, prop, value);
      if (onChangeCallback) {
        onChangeCallback(); // Notify the UI to refresh
      }
      return Reflect.set(target, prop, value);
    }
  };

  if (typeof obj === 'object' && obj !== null) {
    for (const [key, value] of Object.entries(obj)) {
      globalDictionary.set(className, key, value);
    }
  }

  return new Proxy(obj, handler);
}

export default trackProperties;