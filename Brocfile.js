const funnel = require('broccoli-funnel');
const concat = require('broccoli-concat');
const mergeTrees = require('broccoli-merge-trees');
const esTranspiler = require('broccoli-babel-transpiler');
const pkg = require('./package.json');

const src = 'src';

const getModuleId = function (name) {
    name = pkg.name + '/' + name;
    return name.replace(/\/index$/, '');
};

const resolveModuleSource = function (source, filename) {
    var match = filename.match(/(.+)\/index\.\S+$/i);

    // is this an import inside an /index file?
    if (match) {
        var path = match[1];
        return source
            .replace(/^\.\//, path + '/')
            .replace(/^\.\.\//, '');
    } else {
        return source;
    }
};

const jsAmd = esTranspiler(src, {
    stage: 0,
    moduleIds: true,
    modules: 'amd',

    // Transforms /index.js files to use their containing directory name
    getModuleId: getModuleId,

    // Fix relative imports inside /index's
    resolveModuleSource: resolveModuleSource
});

const jsNormal = esTranspiler(src, {
    stage: 0,
    moduleIds: true,

    // Transforms /index.js files to use their containing directory name
    getModuleId: getModuleId,

    // Fix relative imports inside /index's
    resolveModuleSource: resolveModuleSource
});

const jsSystem = esTranspiler(src, {
    stage: 0,
    moduleIds: true,
    modules: 'system',

    // Transforms /index.js files to use their containing directory name
    getModuleId: getModuleId,

    // Fix relative imports inside /index's
    resolveModuleSource: resolveModuleSource
});

const amd = concat(jsAmd, {
    inputFiles: [
        '**/*.js'
    ],
    outputFile: '/amd.' + pkg.name + '.js'
});

const system = concat(jsSystem, {
    inputFiles: [
        '**/*.js'
    ],
    outputFile: '/system.' + pkg.name + '.js'
});

const normal = concat(jsNormal, {
    inputFiles: [
        '**/*.js'
    ],
    header: ";(function() {",
    footer: "}());",
    outputFile: '/' + pkg.name + '.js'
});

module.exports = mergeTrees([amd, normal, system]);