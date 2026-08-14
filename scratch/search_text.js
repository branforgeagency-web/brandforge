import fs from 'fs';
import path from 'path';

function searchFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      searchFiles(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const text = fs.readFileSync(fullPath, 'utf8');
      if (text.includes('BRANDFORGE IS THE') || text.includes('HIGH-OCTANE DIGITAL MARKETING')) {
        console.log("Found match in:", fullPath);
      }
    }
  }
}

searchFiles('c:\\brandforge\\src');
