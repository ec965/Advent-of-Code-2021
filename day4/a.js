const fs = require("fs");

function readInput() {
  const input = fs
    .readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n\n")
    .filter((val) => !!val);
  let [bingo, ...boards] = input;
  bingo = bingo.split(",");
  boards = boards.map((board) => board.split("\n").filter((val) => !!val));

  boards.forEach((board, i) => {
    boards[i] = board.map((str) => str.split(" ").filter((val) => val !== ""));
  });
  return { bingo, boards };
}

function checkBoard(calledNums, board) {
  const numsSet = new Set(calledNums);

  // check rows
  for (let i = 0; i < board.length; i++) {
    let lastFound = true;
    for (let j = 0; j < board[i].length && lastFound; j++) {
      if (!numsSet.has(board[i][j])) lastFound = false;
    }
    if (lastFound) return true; // we won!
  }

  // check cols
  for (let i = 0; i < board.length; i++) {
    let lastFound = true;
    for (let j = 0; j < board[i].length && lastFound; j++) {
      if (!numsSet.has(board[j][i])) lastFound = false;
    }
    if (lastFound) return true; // we won!
  }

  // check diagonals
  let lastFound = true;
  for (let i = 0; i < board.length && lastFound; i++) {
    if (!numsSet.has(board[i][i])) lastFound = false;
  }
  if (lastFound) return true;

  lastFound = true;
  for (let i = 0; i < board.length && lastFound; i++) {
    if (!numsSet.has(board[i][board.length - 1 - i])) lastFound = false;
  }
  if (lastFound) return true;

  // we lost :(
  return false;
}

function sumUnmarked(calledNums, board) {
  const numsSet = new Set(calledNums);
  let sum = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!numsSet.has(board[i][j])) sum += parseInt(board[i][j]);
    }
  }
  return sum;
}

function part1() {
  const { bingo, boards } = readInput();
  const calledNums = [];
  for (let i = 0; i < bingo.length; i++) {
    calledNums.push(bingo[i]);
    for (let j = 0; j < boards.length; j++) {
      if (checkBoard(calledNums, boards[j])) {
        return sumUnmarked(calledNums, boards[j]) * bingo[i];
      }
    }
  }
}

function part2() {
  const { bingo, boards } = readInput();
  const calledNums = [];
  const winningBoardSums = [];
  const wonBoards = new Set();
  for (let i = 0; i < bingo.length; i++) {
    calledNums.push(bingo[i]);
    for (let j = 0; j < boards.length; j++) {
      if (!wonBoards.has(j) && checkBoard(calledNums, boards[j])) {
        winningBoardSums.push(bingo[i] * sumUnmarked(calledNums, boards[j]));
        wonBoards.add(j);
      }
    }
  }
  return winningBoardSums[winningBoardSums.length - 1];
}

console.log('part 1', part1());
console.log("part 2", part2());
