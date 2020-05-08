import { replaceAtIndex } from '../replaceAtIndex';

describe('behavior', () => {
  test('replaces items in array at given index', () => {
    const array = [1, 2, 3, 4, 5];
    const index = 2;
    const replaced = 99;
    expect(replaceAtIndex(array, index, replaced)).toEqual([1, 2, 99, 4, 5]);
  });
  test('doesnt mutate array', () => {
    const array = [1, 2, 3, 4, 5];
    const index = 2;
    const replaced = 99;
    const result = replaceAtIndex(array, index, replaced);
    expect(result).not.toBe(array);
  });
});
