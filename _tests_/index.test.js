import getFileExtention from '../src/helpers';

test('check file extention', () => {
  expect(getFileExtention('file1.json')).toEqual('json');
});
