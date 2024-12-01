const num = 123;

const div2 = num % 2 === 0;
const div3 = num % 3 === 0;
const div5 = num % 5 === 0;

const result = Number(div2) + Number(div3) + Number(div5);

console.log(result);
