const fs = require('fs');
const marked = require('marked');
const TerminalRenderer = require('marked-terminal');

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

let markupFile;

try {
  markupFile = fs.readFileSync(process.argv.pop(), 'utf-8');
  console.log(marked(markupFile));
} catch(e) {
  console.error('markuping: ' + e.message);
}

