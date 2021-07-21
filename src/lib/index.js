export const getCells = (bombs, boardSize) => {
  const numbers = random(bombs, boardSize);
  return Array.from(Array(boardSize)).map((_, i) => {
    return {
      index: i,
      isBomb: numbers.includes(i),
      value: 0,
    };
  });
};

export const random = (bombs, boardSize) => {
  const numbers = [];

  for (let i = 0; i < bombs; i++) {
    const rand = getRandom(boardSize, numbers);
    numbers.push(rand);
  }

  return numbers;
};

const getRandom = (boardSize, numbers) => {
  const rand = Math.floor(Math.random() * boardSize);
  if (numbers.includes(rand)) {
    return getRandom(boardSize, numbers);
  } else {
    return rand;
  }
};
