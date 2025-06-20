const fs = require("fs");
const path = require("path");

const pagesToMove = [
  "projects",
  "contact",
  "dashboard",
  "chat",
  "achievements",
  "about",
];

// Create [locale] directory if it doesn't exist
const localeDir = path.join("app", "[locale]");
if (!fs.existsSync(localeDir)) {
  fs.mkdirSync(localeDir, { recursive: true });
}

// Move pages to [locale] directory
pagesToMove.forEach((page) => {
  const sourceDir = path.join("app", page);
  if (fs.existsSync(sourceDir)) {
    const targetDir = path.join(localeDir, page);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    // Copy all files from source to target
    const files = fs.readdirSync(sourceDir);
    files.forEach((file) => {
      const sourceFile = path.join(sourceDir, file);
      const targetFile = path.join(targetDir, file);
      if (fs.lstatSync(sourceFile).isFile()) {
        fs.copyFileSync(sourceFile, targetFile);
      }
    });
  }
});
