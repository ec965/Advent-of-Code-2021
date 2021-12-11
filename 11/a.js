const fs = require("fs");

function getInput() {
  return fs
    .readFileSync("input.txt", { encoding: "utf8" })
    .split("\n")
    .filter((val) => !!val)
    .map((val) => Array.from(val).map((str) => parseInt(str)));
}

function example1() {
  return `11111
19991
19191
19991
11111`
    .split("\n")
    .filter((val) => !!val)
    .map((val) => Array.from(val).map((str) => parseInt(str)));
}

function flashOctopuses(input) {
  let flashesInCycle = 0;
  let hasFlashes = true;
  // increment all
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      input[i][j]++;
    }
  }

  const flashCounted = new Set();

  while (hasFlashes) {
    hasFlashes = false;

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        // check for values over 9
        if (input[i][j] > 9 && !flashCounted.has(i + "," + j)) {
          flashCounted.add(i + "," + j);
          input[i][j]++;
          hasFlashes = true;
          flashesInCycle++;

          // increment neighbors
          // vert
          if (i - 1 >= 0) input[i - 1][j]++;
          if (i + 1 < input.length) input[i + 1][j]++;
          // horz
          if (j - 1 >= 0) input[i][j - 1]++;
          if (j + 1 < input[j].length) input[i][j + 1]++;
          // diagonal
          if (i - 1 >= 0 && j - 1 >= 0) input[i - 1][j - 1]++;
          if (i - 1 >= 0 && j + 1 < input[i].length) input[i - 1][j + 1]++;
          if (i + 1 < input.length && j + 1 < input[i].length) input[i + 1][j + 1]++;
          if (i + 1 < input.length && j - 1 >= 0) input[i + 1][j - 1]++;
        }
      }
    }
  }

  // reset those over 9
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] > 9) input[i][j] = 0;
    }
  }
  return flashesInCycle;
}

function part1(input, steps) {
  // 1. increment all
  // 2. check for values over 9
  //  a. reset val
  //  b. increment neighbors
  // 3. repeat step 2 until no values over 9 found
  let totalFlashes = 0;

  for (let i = 0; i < steps; i++) {
    totalFlashes += flashOctopuses(input);
  }

  return totalFlashes;
}

function checkBoardSynched(input){
  for(let i=0; i<input.length; i++){
    for(let j=0; j<input[i].length; j++){
      if(input[i][j] !== 0) return false;
    }
  }
  return true;
}

function part2(input){
  let cycle = 0;
  while(!checkBoardSynched(input)){
    flashOctopuses(input);
    cycle++;
  }
  return cycle;
}

console.log('ex1', part1(example1(), 1));
console.log("part 1", part1(getInput(), 100));
console.log('part 2', part2(getInput()));
