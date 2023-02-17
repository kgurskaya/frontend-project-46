import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const getFixturePath = (filepath) => path.join(dirname, '..', '__fixtures__', filepath);
const readFixture = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8').trim();

const expectedResult1 = readFixture('result.txt');

test('JSON', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(genDiff(filepath1, filepath2)).toEqual(expectedResult1);
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedResult1);
});

test('YAML', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');

  expect(genDiff(filepath1, filepath2)).toEqual(expectedResult1);
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedResult1);
});
