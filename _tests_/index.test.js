import getFileExtention from '../src/helpers';

// eslint-disable-next-line no-undef
test('check file extention', () => {
  // eslint-disable-next-line no-undef
  expect(getFileExtention('file1.json')).toEqual('json');
});
