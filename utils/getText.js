import textData from './gpt_reviewed_text.json' assert { type: 'json' };

// Function to get text by key
export function getText(key) {
  const data = textData;
  return data.find(item => item.key === key)?.text || `Missing text for key: ${key}`;
}
