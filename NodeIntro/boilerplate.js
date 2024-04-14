const fs = require('fs');

const args = process.argv.slice(2);
if (args.length < 1) {
  console.log("Usage: node boilerplate.js <project>");
  process.exit(1);
}

const project = args[0];
const html_file = `${project}/index.html`;
const css_file = `${project}/style.css`;
const js_file = `${project}/app.js`;


if (fs.existsSync(project)) {
    console.log(`Error: ${project} already exists`);
    process.exit(1);
}

fs.mkdirSync(project);
fs.writeFileSync(html_file, `<!DOCTYPE html>
<html>
    <head>
        <title>${project}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>${project}</h1>
        <script src="app.js"></script>
    </body>
</html>
`);

fs.writeFileSync
fs.writeFileSync(css_file, `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    color: #333;
}
h1 {
    color: #00f;
}
`);

fs.writeFileSync(js_file, `console.log("Hello, ${project}!");`);

console.log(`Project ${project} created with index.html, style.css, and app.js`);

