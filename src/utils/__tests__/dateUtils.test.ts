import {sub, formatISO, add, Duration} from 'date-fns';

import {dateUtils} from '../dateUtils';

const MOCKED_NOW = 1696573824333;

function getDateISO(duration: Duration, operation?: 'sub' | 'add'): string {
  operation = operation || 'sub';

  const time =
    operation === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formatRelative(timeISO);
}

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateISO({seconds: 30})).toBe('30 s');
    });

    it('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({minutes: 30})).toBe('30 m');
    });

    it('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({hours: 5})).toBe('5 h');
    });

    it('should be displayed in days if less than 1 week ago', () => {
      expect(getDateISO({days: 3})).toBe('3 d');
    });

    it('should be displayed in weeks if less than 1 month ago', () => {
      expect(getDateISO({weeks: 3, hours: 2})).toBe('3 sem');
    });

    it('should be displayed in months if less than 1 year ago', () => {
      expect(getDateISO({months: 6})).toBe('6 mes');
    });

    it('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      expect(getDateISO({months: 13})).toBe('06/09/2022');
    });

    it('should be displayed in dd/MM/yyyy in future date', () => {
      expect(getDateISO({days: 2}, 'add')).toBe('08/10/2023');
    });
  });
});
