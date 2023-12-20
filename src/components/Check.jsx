export default function Check(sq) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < 8; i++) {
    const [a, b, c] = wins[i];
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return [sq[a], a, b, c];
  }

  return false;
}
