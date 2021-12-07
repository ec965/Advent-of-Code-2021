const fs = require('fs');

function getInput(){
  return fs.readFileSync('input.txt', {encoding: 'utf-8'})
    .split('\n')
    .filter(val => !!val)
    .map(line => line.split(' -> ').map((val) => parseInt(val.replace(',', ''))));
}

function part1(){
  const input = getInput();
}

console.log('part 1', part1());
