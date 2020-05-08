export const replaceAtIndex = <Item = any>(array: Item[], index: number, item: Item): Item[] => {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
};
