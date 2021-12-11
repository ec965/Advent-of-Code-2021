const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((val) => parseInt(val))
  .filter((val) => !isNaN(val));

function part1() {
  let depth = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] < input[i]) depth++;
  }

  return depth;
}

function part2() {
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

  return depth;
}

console.log("part 1", part1());
console.log("part 2", part2());
