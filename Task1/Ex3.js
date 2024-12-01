

const intNumbers = [2, 0, 3, 0, 1, 0];
let zeroCount = 0;

for (let i = 0; i < intNumbers.length; i++) {
  zeroCount += intNumbers[i] === 0 ? 1 : 0;
}

console.log(zeroCount);
