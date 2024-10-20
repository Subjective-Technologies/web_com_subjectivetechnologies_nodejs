// extract_and_replace_text.js

const fs = require('fs');
const path = require('path');
const {
  parse
} = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
function generateUniqueKey(filePath, text) {
  return `${path.basename(filePath)}_${text.length}_${Buffer.from(text).toString('base64').slice(0, 6)}`;
}
function addGetTextImportIfNeeded(filePath, content) {
  const importStatement = "import { getText } from '../utils/getText.js';\n";
  if (!content.includes(importStatement.trim())) {
    // Add the import at the top of the file
    content = importStatement + content;
  }
  return content;
}
function isValidText(text) {
  const trimmedText = text.trim();

  // Exclude empty strings or whitespace
  if (!trimmedText) {
    return false;
  }

  // Exclude texts that are too long and contain newlines (likely code)
  if (trimmedText.length > 500 && /\n/.test(trimmedText)) {
    return false;
  }
  return true;
}
function extractAndReplaceTextFromJSX(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let ast;
  try {
    ast = parse(content, {
      sourceType: getText("extract_and_replace_text.js_6_bW9kdW"),
      plugins: ['jsx', 'classProperties', 'classPrivateProperties', 'classPrivateMethods', 'dynamicImport', 'optionalChaining', 'nullishCoalescingOperator', ['decorators', {
        decoratorsBeforeExport: true
      }], 'importAssertions'
      // Include 'typescript' if your codebase uses TypeScript
      // 'typescript',
      // Include 'flow' if your codebase uses Flow
      // 'flow',
      ]
    });
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error.message);
    return [];
  }
  const results = [];
  let modified = false;
  traverse(ast, {
    JSXText({
      node
    }) {
      const text = node.value;
      if (isValidText(text)) {
        const uniqueKey = generateUniqueKey(filePath, text.trim());
        results.push({
          key: uniqueKey,
          file_path: filePath,
          reference: getText("extract_and_replace_text.js_7_SlNYVG"),
          text: text.trim()
        });

        // Replace the text node value
        node.value = `{getText('${uniqueKey}')}`;
        modified = true;
      }
    },
    JSXAttribute({
      node
    }) {
      if (node.value && node.value.type === 'StringLiteral' && isValidText(node.value.value)) {
        const text = node.value.value;
        const uniqueKey = generateUniqueKey(filePath, text.trim());
        results.push({
          key: uniqueKey,
          file_path: filePath,
          reference: `JSXAttribute (${node.name.name})`,
          text: text.trim()
        });

        // Replace the attribute value with a JSX expression
        node.value = {
          type: getText("extract_and_replace_text.js_22_SlNYRX"),
          expression: {
            type: getText("extract_and_replace_text.js_14_Q2FsbE"),
            callee: {
              type: getText("extract_and_replace_text.js_10_SWRlbn"),
              name: getText("extract_and_replace_text.js_7_Z2V0VG")
            },
            arguments: [{
              type: getText("extract_and_replace_text.js_13_U3RyaW"),
              value: uniqueKey
            }]
          }
        };
        modified = true;
      }
    },
    StringLiteral({
      node,
      parent
    }) {
      // Handle string literals in object properties (e.g., arrays of objects)
      if (parent.type === 'ObjectProperty' && isValidText(node.value) && parent.value === node // Ensure we're modifying the value, not the key
      ) {
        const text = node.value;
        const uniqueKey = generateUniqueKey(filePath, text.trim());
        results.push({
          key: uniqueKey,
          file_path: filePath,
          reference: `ObjectProperty (${parent.key.name})`,
          text: text.trim()
        });

        // Replace the string literal with a call to getText
        parent.value = {
          type: getText("extract_and_replace_text.js_14_Q2FsbE"),
          callee: {
            type: getText("extract_and_replace_text.js_10_SWRlbn"),
            name: getText("extract_and_replace_text.js_7_Z2V0VG")
          },
          arguments: [{
            type: getText("extract_and_replace_text.js_13_U3RyaW"),
            value: uniqueKey
          }]
        };
        modified = true;
      }
    }
  });
  if (modified) {
    let output = generate(ast, {}, content).code;
    output = addGetTextImportIfNeeded(filePath, output);
    fs.writeFileSync(filePath, output, 'utf-8');
  }
  return results;
}
function walkDir(dir, callback) {
  const excludeDirs = new Set(['context', '.vscode', '.github', 'node_modules', '.next']);
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (!excludeDirs.has(f)) {
        walkDir(dirPath, callback);
      }
    } else {
      callback(dirPath);
    }
  });
}
function main() {
  const rootDir = process.argv[2] || '.';
  const outputFile = './utils/extracted_text.json';
  let allResults = [];

  // Read existing extracted_text.json if it exists
  if (fs.existsSync(outputFile)) {
    const existingData = fs.readFileSync(outputFile, 'utf-8');
    try {
      allResults = JSON.parse(existingData);
    } catch (error) {
      console.error(`Error parsing existing ${outputFile}:`, error.message);
    }
  }
  walkDir(rootDir, function (filePath) {
    try {
      if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        const results = extractAndReplaceTextFromJSX(filePath);
        allResults.push(...results);
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  if (allResults.length > 0) {
    // Remove duplicate entries based on the 'key' property
    const uniqueResults = [];
    const keys = new Set();
    for (const result of allResults) {
      if (!keys.has(result.key)) {
        keys.add(result.key);
        uniqueResults.push(result);
      }
    }

    // Ensure the utils directory exists
    const utilsDir = path.join(rootDir, 'utils');
    if (!fs.existsSync(utilsDir)) {
      fs.mkdirSync(utilsDir);
    }
    fs.writeFileSync(outputFile, JSON.stringify(uniqueResults, null, 2), 'utf-8');
    console.log(`Extraction and replacement complete. Results saved to ${outputFile}`);
  } else {
    console.log('No text found to extract.');
  }
}
main();