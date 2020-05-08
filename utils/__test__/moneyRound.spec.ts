import { moneyRound } from '../moneyRound';

describe('behavior', () => {
  test('rounds a number to 2 decimals', () => {
    expect(moneyRound(0.234)).toEqual(0.23);
  });
  test('rounds a long float to float32 and 2 decimals', () => {
    expect(moneyRound(0.2834729387492743)).toEqual(0.28);
  });
  test('doenst round a number that is aready 2 decimals', () => {
    expect(moneyRound(0.28)).toEqual(0.28);
  });
  test('doenst round a number that is aready 1 decimals', () => {
    expect(moneyRound(0.4)).toEqual(0.4);
  });
  test('third decimal is ignored regardless of being high or low', () => {
    expect(moneyRound(0.999)).toEqual(0.99);
    expect(moneyRound(0.991)).toEqual(0.99);
  });
  test('returns 0 if input is invalid', () => {
    expect(moneyRound()).toEqual(0);
    expect(moneyRound(NaN)).toEqual(0);
  });
});
