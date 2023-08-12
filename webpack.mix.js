// webpack.mix.js

let mix = require("laravel-mix");

let fs = require("fs");
let path = require("path");

let getFiles = function (dir) {
  console.log({ dir });
  // get all 'files' in this directory
  // filter directories
  return fs.readdirSync(dir).filter((file) => {
    console.log(file);
    return fs.statSync(`${dir}/${file}`).isFile();
  });
};

getFiles(path.join(__dirname, "src", "scss")).forEach(function (filepath) {
  mix.sass(path.join(__dirname, "src", "scss", filepath), "assets");
});
getFiles(path.join(__dirname, "src", "js")).forEach(function (filepath) {
  mix.js(path.join(__dirname, "src", "js", filepath), "assets");
});
