var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js'),
};

const enableWatch = process.argv.slice(2) === '--watch';

if (enableWatch) chokidar.watch([paths.examples, paths.components]).on('change', () => {generate(paths);});
else generate(paths);

function generate(paths) {
  var errors = [];
  var componentData = getDirectories(paths.components).map((componentName) => {
    try {
      return getComponentData(paths, componentName);
    } catch(error) {
      errors.push('Error for ' + componentName + '. ' + error);
    }
  });
  writeFile(paths.output, 'module.exports = ' + JSON.stringify(errors.length ? errors : componentData));
}

function getComponentData(paths, componentName) {
    const content = readFile(path.join(paths.components, componentName, componentName + '.js'));
    const info = parse(content);
    return {
        name: componentName,
        description: info.componentDescription,
        props: info.props,
        code: content,
        examples: getExampleData(paths.examples, componentName),
    };
}

function getExampleData(examplePath, componentName) {
    const examples = getExampleFiles(examplePath, componentName);
    return examples.map(file => {
        const filePath = path.join(examplePath, componentName, file);
        const content = readFile(filePath);
        var info = parse(content);
        return {
            name: file.slice(0, -3),
            description: info.description,
            code: content,
        };
    });
}

function getExampleFiles(examplePath, componentName) {
    const files = [];
    try {
        files = getFiles(path.join(examplePath, componentName));
    } catch(error) {
        console.error(`no examples found for ${componentName}`);
    }
    return files;
}

function getDirectories(filePath) {
    return fs.readdirSync(filePath).filter(file => fs.statSync(path.join(filePath, file)).isDirectory());
}

function getFiles(filePath, filter) {
    return fs.readdirSync(filePath).filter(file => fs.statSync(path.join(filePath, file)).isFile());
}

function writeFile(filePath, content) {
    fs.writeFile(filePath, content, function(err) {
        err? console.error(`error writing ${filePath}: ${err}`) : console.log(`${filePath} saved`);
    });
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}
