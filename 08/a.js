const fs = require("fs");

function readInput() {
  const input = fs.readFileSync("input.txt", { encoding: 'utf8' });
  const lines = input.split("\n");
  lines.pop();
  return lines;
}

function segToN(seg) {
  switch (seg.length) {
    case 2:
      return 1;
    case 4:
      return 4;
    case 3:
      return 7;
    case 7:
      return 8;
    default:
      return false;
  }
}

function part1(){
  const getLineOutput = (line) => {
    line = line.split('|');
    let end = line.pop();
    end = end.trim();
    const endGroups = end.split(' ');
    return endGroups.map(str => segToN(str));
  }

  const lines = readInput();
  const out = lines.flatMap(getLineOutput).filter(val => val);
  return out.length;
}

console.log('part1', part1());
