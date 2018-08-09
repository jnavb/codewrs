// optimize
const findX = (n) => (sum((2*n) - 1) * n) + (sum(n-1) * (2*n))

const sum = (number) => (number * (number+1)) / 2