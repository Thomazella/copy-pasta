import { removeEmpty } from '../removeEmpty';

describe('behavior', () => {
  test('removes properties with value undefined from an object', () => {
    const input = {
      foo: 2,
      bar: undefined,
      tra: null,
      baz: 33
    };
    const expected = {
      foo: 2,
      tra: null,
      baz: 33
    };
    expect(removeEmpty(input)).toEqual(expected);
  });
});
