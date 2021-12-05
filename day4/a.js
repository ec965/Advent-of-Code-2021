const fs = require('fs');

function readInput(){
  const input = fs.readFileSync('input.txt', {encoding: 'utf-8'})
    .split('\n\n')
    .filter(val => !!val);
  let [bingo, ...boards] = input;
  bingo = bingo.split(',');
  boards = boards.map(board => board.split('\n').filter(val => !!val));

  boards.forEach((board, i) => {
    boards[i] = board.map(str => str.split(' ').filter(val => val !== ''));
  })
  return { bingo, boards };
}

function checkBoard(calledNums, board){
  const numsSet = new Set(calledNums);
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[i].length; j++){
      numSet.has(board[i][j]);
    }
  }
}

function part1(){
  const { bingo, boards } =  readInput();
}
