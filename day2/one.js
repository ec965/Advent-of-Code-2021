const fs = require("fs");
const FORWARD = 'forward'; // x pos
const UP = 'up'; // y neg
const DOWN = 'down'; // y pos

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((val) => !!val);

let horz = 0;
let depth = 0;

input.forEach((val) => {
  let [dir, count] = val.split(' ');
  count = parseInt(count);
  switch(dir){
    case FORWARD:
      horz += count;
      break;
    case UP:
      depth -= count;
      break;
    case DOWN:
      depth += count;
      break;
  }
});

console.log(horz * depth);
