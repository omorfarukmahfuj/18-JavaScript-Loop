// Display sum of all the odd numbers from 81 to 131.
let sum = 0;

for (let i = 81; i < 132; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}

console.log(sum);

// Display sum of all the even numbers from 206 to 311.

let result = 0;

for (let i = 206; i < 312; i++) {
  if (i % 2 == 0) {
    result += i;
  }
}

console.log(result);
