const fs = require("fs");
const path = require("path");

const source = path.join(process.cwd(), "production-snapshot");
const output = path.join(process.cwd(), "dist");

if (!fs.existsSync(path.join(source, "index.html"))) {
  throw new Error("production-snapshot/index.html is missing");
}

fs.rmSync(output, { recursive: true, force: true });
fs.cpSync(source, output, { recursive: true });

console.log("Production snapshot copied to dist");
