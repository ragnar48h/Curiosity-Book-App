"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const ajv_1 = __importDefault(require("ajv"));
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const fs_1 = require("fs");
const rimraf_1 = __importDefault(require("rimraf"));
const generate_1 = require("./generate");
const packages = process.argv.splice(2);
if (packages.length !== 2) {
    console.error(`
    Invalid arguments.
    Please specify source mapping name and customization mapping path.
  `);
    process.exit(1);
}
const currentDir = process.cwd();
const mappingDir = path_1.default.resolve(currentDir, 'packages', 'mapping');
const mappingKittenDir = path_1.default.resolve(currentDir, 'packages', 'mapping-kitten');
function customize(source, destination) {
    return lodash_merge_1.default(source, destination);
}
exports.customize = customize;
const json = (input) => JSON.stringify(input, null, 2);
const { [0]: sourcePackageName, [1]: customMappingDerivedPath, } = packages;
const sourcePackagePath = path_1.default.resolve(mappingDir, sourcePackageName);
const customMappingPath = path_1.default.resolve(customMappingDerivedPath);
const customizedPackagePath = path_1.default.resolve(mappingKittenDir, `${sourcePackageName}-tmp`);
const { default: sourceMapping } = require(sourcePackagePath);
// TODO: resolve custom mapping
const customMapping = require(customMappingPath);
const schema = require(path_1.default.resolve(sourcePackagePath, 'schema-customization.json'));
const validationOptions = {
    allErrors: true,
};
const ajv = new ajv_1.default(validationOptions);
const validate = ajv.compile(schema);
const fitsSchema = validate(customMapping);
if (!fitsSchema) {
    const errors = validate.errors.map((error) => {
        return error.message;
    });
    const errorMessage = errors.join('\n*');
    console.error(`Please be advised to fix following errors:\n ${errorMessage}\n`);
    process.exit(1);
}
const mapping = customize(sourceMapping, customMapping);
const indexPath = path_1.default.resolve(customizedPackagePath, 'index.ts');
const mappingPath = path_1.default.resolve(customizedPackagePath, 'mapping.json');
if (!fs_1.existsSync(customizedPackagePath)) {
    fs_1.mkdirSync(customizedPackagePath);
}
const indexOutput = [
    'import { default as mapping } from \'./mapping.json\';',
    'export default mapping;',
].join('\n\n');
const mappingOutput = json(mapping);
fs_1.writeFileSync(indexPath, indexOutput);
fs_1.writeFileSync(mappingPath, mappingOutput);
generate_1.generateMappingPackage(customizedPackagePath);
const outputPath = path_1.default.resolve(currentDir, 'output.json');
const { default: output } = require(indexPath);
fs_1.writeFileSync(outputPath, json(output));
rimraf_1.default.sync(customizedPackagePath);
//# sourceMappingURL=customize.js.map