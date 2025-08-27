import {stringsUtils} from '../stringsUtils';

test('capitalizeFirstLetter', () => {
  expect(stringsUtils.capitalizeFirstLetter('Ana maria')).toBe('Ana Maria');
});
