const fs = require("fs");
const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((val) => !!val);

function part1() {
  let horz = 0;
  let depth = 0;

  input.forEach((val) => {
    let [dir, count] = val.split(" ");
    count = parseInt(count);
    switch (dir) {
      case "forward":
        horz += count;
        break;
      case "up":
        depth -= count;
        break;
      case "down":
        depth += count;
        break;
    }
  });
  return horz * depth;
}

function part2() {
  let aim = 0;
  let horz = 0;
  let depth = 0;

  input.forEach((val) => {
    let [dir, count] = val.split(" ");
    count = parseInt(count);
    switch (dir) {
      case "forward":
        horz += count;
        depth += aim * count;
        break;
      case "up":
        aim -= count;
        break;
      case "down":
        aim += count;
        break;
    }
  });
  return horz & depth;
}

console.log("part 1", part1());
console.log("part 2", part2());
