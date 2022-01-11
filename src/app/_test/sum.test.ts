import { sum } from '../_helpers/sum';

describe('test sum function', () => {
  it('should return 3 for sum(1,2)', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('should return 10 for sum(5,5)', () => {
    expect(sum(5, 5)).toBe(10);
  });
});
