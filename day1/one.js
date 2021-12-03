const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split('\n')
  .map((val) => parseInt(val))
  .filter((val) => !isNaN(val));

let depth = 0;
for (let i = 1; i < input.length; i++) {
  if(input[i-1] < input[i]) depth++;
}

console.log('depth %s', depth);
