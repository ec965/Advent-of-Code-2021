const fs = require('fs');

const input = fs.readFileSync('input.txt', {encoding: 'utf-8'})
  .split('\n')
  .filter(val => !!val);

let aim = 0;
let horz = 0;
let depth = 0;

input.forEach(val => {
  let [dir, count] = val.split(' ');
  count = parseInt(count);
  switch(dir){
    case 'forward':
      horz += count;
      depth += aim * count;
      break;
    case 'up':
      aim -= count;
      break;
    case 'down':
      aim += count;
      break;
  }
});

console.log(horz * depth);
