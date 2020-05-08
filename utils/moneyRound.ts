export const moneyRound = (input: number): number => {
  let result: number;
  if ((input !== 0 && !input) || Number.isNaN(input)) {
    // eslint-disable-next-line no-console
    console.warn('Invalid input to MoneyRound: ', input);
    return 0;
  }

  const decimals = input.toString().replace(/^[^.]+[.]/, '').length;
  if (decimals <= 2) {
    return input;
  }
  result = Math.fround(input); // round to nearest 32bits float
  result = Math.trunc(result * 100) / 100; // 2 decimals
  return result;
};
