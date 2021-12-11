const fs = require("fs");

function getInput() {
  return fs
    .readFileSync("input.txt", { encoding: "utf8" })
    .split("\n")
    .filter((val) => !!val)
    .map((val) => Array.from(val).map((str) => parseInt(str)));
}

function part1(){
  const input = getInput();

}

console.log('part 1', part1());
