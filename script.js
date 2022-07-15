// @ts-check

const fs = require("fs");
const path = require("path");
const minimatch = require("minimatch");
const recursive = require("recursive-readdir");

const filesToIgnore = ["*.script.js"]

const rootDirectory = "build/web"

const patternToMatch = "*.page.js"

recursive(
  path.join(process.cwd(), rootDirectory),
  filesToIgnore,
  (err, files) => {
    if (err) return;

    files.forEach((file) => {
      const parsed = path.parse(file);

      const matches = minimatch(parsed.base, patternToMatch);

      if (matches) {
        // remove the intermidiate dot given templates engines might
        // mistaken the following value after a dot as the file extension
        const [name] = parsed.name.split('.')
        const newName = `${name}.html`;

        const html = require(file).default;

        const newFilePath = path.join(parsed.dir, newName)

        // write new html file in-place
        fs.promises
          .writeFile(newFilePath, html, "utf-8")
          .then((_) => {
            console.log("file written: ", file, newFilePath);
          })
          .catch((e) => {
            console.log("file write failed: ", e);
          });
      }
    });
  }
);
