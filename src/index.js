// import * as fs from 'fs';
import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/extensions
import getDiff from './getDiff.js';
// eslint-disable-next-line import/extensions
import formatDiff from './formatters/index.js';
// eslint-disable-next-line import/extensions
import getFileExtention from './helpers.js';
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import yaml from 'js-yaml';

const buildAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const getFileContent = (file) => {
  const fileContent = fs.readFileSync(file, 'utf8');
  return fileContent;
};

const parse = (content, extention) => {
  switch (extention) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
      return yaml.load(content);
    case 'yaml':
      return yaml.load(content);
    default:
      throw new Error('Unsupported file format');
  }
};

export default (file1, file2, formatter = 'stylish') => {
  const fileContent1 = getFileContent(buildAbsolutePath(file1));
  const fileContent2 = getFileContent(buildAbsolutePath(file2));
  const parsedObject1 = parse(fileContent1, getFileExtention(file1));
  const parsedObject2 = parse(fileContent2, getFileExtention(file2));
  // получаем объект с различиями в файле
  const data = getDiff(parsedObject1, parsedObject2);
  // приводим эти различия к формату, который нам пришел в аргументах при запуске утилиты
  const result = formatDiff(data, formatter);
  // eslint-disable-next-line no-console
  console.log(result);
  return result;
};
