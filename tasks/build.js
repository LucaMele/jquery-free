var fs = require("fs");
var mkdirp = require('mkdirp');
var pkg = require("../package.json");
var browserify = require("browserify");
mkdirp('dist');
browserify(["./src/index.js"])
    .transform("babelify", {presets: ["es2015"]})
    .transform('uglifyify')
    .bundle()
    .pipe(fs.createWriteStream("./dist/" + pkg.name + ".js"));