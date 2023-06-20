export const createNumbers = (max: number) => {
  const items: number[] = [];

  for (let i = 0; i <= max; i += 1) {
    items.push(i);
  }

  return items;
};
