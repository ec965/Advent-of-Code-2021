const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((val) => parseInt(val))
  .filter((val) => !isNaN(val));

let depth = 0;
for (let i = 0; i < input.length - 3; i++) {
  let a = 0;
  let b = 0;
  for (let j = i; j < i + 3; j++) {
    a += input[j];
    b += input[j + 1];
  }
  if (a < b) depth++;
}

console.log(depth);
