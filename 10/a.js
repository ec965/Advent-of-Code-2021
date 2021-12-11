const fs = require("fs");

function getInput() {
  return fs
    .readFileSync("input.txt", { encoding: "utf8" })
    .split("\n")
    .filter((val) => !!val)
    .map((val) => Array.from(val));
}

function isOpen(char) {
  return /[([<{]/.test(char);
}

function isClose(char) {
  return /[)\]>}]/.test(char);
}

function isMatch(open, close) {
  if (open === "<" && close === ">") return true;
  if (open === "(" && close === ")") return true;
  if (open === "[" && close === "]") return true;
  if (open === "{" && close === "}") return true;
  return false;
}

const pointMap = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

function parseParen(line) {
  const stack = [];
  for (let i = 0; i < line.length; i++) {
    if (isOpen(line[i])) stack.push(line[i]);
    else if (isClose(line[i])) {
      const open = stack.pop();
      if (!isMatch(open, line[i])) {
        return line[i];
      }
    }
  }

  if (stack.length === 0) return true; // complete
  return stack; // incomplete
}

function part1(input) {
  return input
    .map((line) => parseParen(line))
    .filter((val) => typeof val === "string")
    .reduce((sum, curr) => pointMap[curr] + sum, 0);
}

const multiPointMap = {
  "(": 1,
  "[": 2,
  "{": 3,
  "<": 4,
};

function getPointsForIncomplete(line) {
  return line.reverse().reduce((score, char) => score * 5 + multiPointMap[char], 0);
}

function part2(input) {
  let scores = input
    .map((line) => parseParen(line))
    .filter((line) => typeof line === "object")
    .map((line) => getPointsForIncomplete(line));

  scores = scores.sort((a, b) => a - b);
  return scores[Math.round((scores.length - 1) / 2)];
}

function examplePt2(line) {
  const leftOver = parseParen(line);
  return getPointsForIncomplete(leftOver);
}

const okEx = "[<>({}){}[([])<>]]";
const badEx = "<([]){()}[{}])";
const exampleInput = [
  "[({(<(())[]>[[{[]{<()<>>",
  "[(()[<>])]({[<{<<[]>>(",
  "(((({<>}<{<{<>}{[]{[]{}",
  "{<[[]]>}<{[{[{[]{()[[[]",
  "<{([{{}}[<[[[<>{}]]]>[]]",
];
let ex2Points = exampleInput.map(line => examplePt2(line));
ex2Points = ex2Points.sort((a,b) => a - b);
// console.log(ex2Points);
// console.log(ex2Points[Math.round(ex2Points.length / 2)], Math.round(ex2Points.length / 2));
// console.log(parseParen(okEx), parseParen(badEx));
console.log('part 1', part1(getInput()));

console.log("part 2", part2(getInput()));
