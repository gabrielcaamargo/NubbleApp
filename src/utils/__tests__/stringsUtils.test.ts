import {stringsUtils} from '../stringsUtils';

describe('stringsUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word', () => {
      expect(stringsUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
      expect(stringsUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringsUtils.capitalizeFirstLetter('aNa MaRia')).toBe('Ana Maria');
    });

    it('should remove leading trailing spaces', () => {
      expect(stringsUtils.capitalizeFirstLetter('  ana maria  ')).toBe(
        'Ana Maria',
      );
    });
  });
});
