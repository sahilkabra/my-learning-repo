var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

const joincwd = (...paths) => path.join.apply(path, [__dirname, ...paths]);
const paths = {
  examples: joincwd('../src', 'docs', 'examples'),
  components: joincwd('../src', 'components'),
  output: joincwd('../config', 'componentData.js'),
};
const enableWatch = process.argv[2] === '--watch';
const getDirectories = (filePath) => fs.readdirSync(filePath).filter(file => fs.statSync(path.join(filePath, file)).isDirectory());
const getFiles = (filePath) => fs.readdirSync(filePath).filter(file => fs.statSync(path.join(filePath, file)).isFile());
const readFile = fs.readFileSync

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

function writeFile(filePath, content) {
    fs.writeFile(filePath, content, function(err) {
        err? console.error(`error writing ${filePath}: ${err}`) : console.log(`${filePath} saved`);
    });
}


