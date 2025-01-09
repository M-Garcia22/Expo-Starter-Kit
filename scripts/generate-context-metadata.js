const fs = require('fs');
const path = require('path');

function extractContextAnnotations(fileContent) {
  const contextAnnotations = [];
  const lines = fileContent.split('\n');
  
  let currentContext = null;
  lines.forEach(line => {
    const contextMatch = line.match(/\/\/\s*@context:\s*(\w+)\s*-\s*(\w+)\s*-\s*(.+)/);
    if (contextMatch) {
      const [, key, type, description] = contextMatch;
      contextAnnotations.push({ key, type, description });
    }
  });

  return contextAnnotations;
}

function generateContextMetadata() {
  const contextDir = path.resolve(__dirname, '../src/app/contexts');
  const metadataPath = path.resolve(__dirname, '../src/app/contexts/context-metadata.json');

  const contextFiles = fs.readdirSync(contextDir)
    .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

  const contextMetadata = {};

  contextFiles.forEach(file => {
    const filePath = path.join(contextDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const contextName = path.basename(file, path.extname(file));
    const annotations = extractContextAnnotations(fileContent);

    if (annotations.length > 0) {
      contextMetadata[contextName] = {
        name: contextName,
        description: `Provides ${contextName} functionality`,
        annotations
      };
    }
  });

  fs.writeFileSync(metadataPath, JSON.stringify(contextMetadata, null, 2));
  console.log('Context metadata generated successfully.');
}

generateContextMetadata(); 